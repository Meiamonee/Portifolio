"""Recolor the supplied animation without changing its drawing or frame timing."""
import argparse
import subprocess
from pathlib import Path

import cv2
import imageio_ffmpeg
import numpy as np
from PIL import Image

parser = argparse.ArgumentParser()
parser.add_argument('source', type=Path)
args = parser.parse_args()
output = Path(__file__).resolve().parents[1] / 'dist' / 'assets'
capture = cv2.VideoCapture(str(args.source))
fps = capture.get(cv2.CAP_PROP_FPS)
frames = []
while True:
    ok, frame = capture.read()
    if not ok:
        break
    frames.append(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
capture.release()
if not frames or not fps:
    raise RuntimeError('Unable to decode the source video')

# One fixed crop around the union of all frames: no artificial zoom or jitter.
active = np.max(np.stack(frames), axis=(0, 3)) > 45
ys, xs = np.nonzero(active)
cx, cy = (xs.min() + xs.max()) / 2, (ys.min() + ys.max()) / 2
side = int(max(xs.max() - xs.min(), ys.max() - ys.min()) + 40)
side += side % 2
x, y = round(cx - side / 2), round(cy - side / 2)
ink = np.array([20, 17, 15], dtype=np.float32)
paper = np.array([242, 239, 232], dtype=np.float32)
mapped = []
for frame in frames:
    # Red and white both have a bright red channel. Preserve black details and
    # antialiasing while eliminating the original red from every frame.
    coverage = np.clip((frame[:, :, 0].astype(np.float32) - 16) / 219, 0, 1)
    recolored = np.rint(ink + coverage[:, :, None] * (paper - ink)).astype(np.uint8)
    square = np.empty((side, side, 3), dtype=np.uint8)
    square[:] = ink
    left, top = max(x, 0), max(y, 0)
    right, bottom = min(x + side, frame.shape[1]), min(y + side, frame.shape[0])
    square[top-y:bottom-y, left-x:right-x] = recolored[top:bottom, left:right]
    mapped.append(square)

Image.fromarray(mapped[0]).save(output / 'intro-poster.png')
command = [imageio_ffmpeg.get_ffmpeg_exe(), '-y', '-hide_banner', '-loglevel', 'error',
           '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{side}x{side}',
           '-r', str(fps), '-i', '-', '-an', '-c:v', 'libx264', '-preset', 'slow',
           '-crf', '16', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
           str(output / 'intro-original.mp4')]
encoder = subprocess.Popen(command, stdin=subprocess.PIPE)
for index in range(round(5 * fps)):
    encoder.stdin.write(mapped[index % len(mapped)].tobytes())
encoder.stdin.close()
if encoder.wait() != 0:
    raise RuntimeError('Video encoding failed')
print(f'Source: {len(frames)} frames at {fps:g} fps. Output: {side}x{side}, 5 seconds.')
print(output / 'intro-original.mp4')
