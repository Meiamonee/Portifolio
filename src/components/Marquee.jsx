import { marquee } from '../data/site';

export function Marquee() {
  return (
    <div className="stack-marquee" role="group" aria-label="Tecnologias utilizadas" data-pause-offscreen="">
      <div className="stack-track">
        {Array.from({ length: 4 }, (_, index) => (
          <div className="stack-set" aria-hidden={index ? 'true' : undefined} key={index}>
            {marquee.map((item) => <span key={item}>{item}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}
