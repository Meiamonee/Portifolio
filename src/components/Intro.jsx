import { useLayoutEffect, useRef, useState } from 'react';
import { assetPath } from '../data/site';

export function Intro() {
  const introRef = useRef(null);
  const videoRef = useRef(null);
  const [hidden, setHidden] = useState(false);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const intro = introRef.current;
    const video = videoRef.current;
    const page = document.querySelector('.page');
    let finished = false;
    let started = false;
    let timer;

    const finish = () => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      clearTimeout(window.introWatchdog);
      root.classList.remove('intro-playing', 'intro-running');
      if (page) page.inert = false;
      video?.pause();
      setHidden(true);
    };
    const onPlaying = () => {
      if (finished) return video?.pause();
      if (started) return;
      started = true;
      clearTimeout(timer);
      root.classList.add('intro-running');
      timer = setTimeout(finish, 5100);
    };
    const onKeyDown = (event) => { if (event.key === 'Escape') finish(); };
    const onPageShow = (event) => { if (event.persisted) finish(); };
    const onAnimationEnd = (event) => { if (event.animationName === 'intro-layer') finish(); };

    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !video || !root.classList.contains('intro-playing')) {
      finish();
      return;
    }

    if (page) page.inert = true;
    video.muted = true;
    video.addEventListener('playing', onPlaying);
    video.addEventListener('error', finish);
    video.querySelector('source')?.addEventListener('error', finish);
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('pageshow', onPageShow);
    intro.addEventListener('animationend', onAnimationEnd);
    timer = setTimeout(finish, 2500);
    video.play()?.catch(finish);

    return () => {
      clearTimeout(timer);
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('error', finish);
      video.querySelector('source')?.removeEventListener('error', finish);
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pageshow', onPageShow);
      intro.removeEventListener('animationend', onAnimationEnd);
      if (page) page.inert = false;
    };
  }, []);

  return (
    <div className="site-intro" aria-hidden="true" hidden={hidden} ref={introRef}>
      <video className="site-intro-mark" ref={videoRef} muted playsInline preload="auto"
        poster={assetPath('intro-poster.png')} width="536" height="536" tabIndex={-1} disablePictureInPicture>
        <source src={assetPath('intro-original.mp4')} type="video/mp4" />
      </video>
    </div>
  );
}
