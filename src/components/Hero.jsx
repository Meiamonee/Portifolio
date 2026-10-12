import spiralMarkup from '../assets/spiral.html?raw';
import { assetPath, links } from '../data/site';

const sprigPaths = [
  'M100 300 C 96 220, 106 130, 100 20',
  'M100 250 C 80 245, 55 225, 40 195 C 70 200, 95 220, 100 250',
  'M100 190 C 80 185, 55 165, 40 135 C 70 140, 95 160, 100 190',
  'M100 130 C 80 125, 55 105, 40 75 C 70 80, 95 100, 100 130',
  'M100 70 C 82 66, 62 50, 52 26 C 78 30, 96 48, 100 70',
  'M100 220 C 120 215, 145 195, 160 165 C 130 170, 105 190, 100 220',
  'M100 160 C 120 155, 145 135, 160 105 C 130 110, 105 130, 100 160',
  'M100 100 C 120 95, 145 75, 160 45 C 130 50, 105 70, 100 100',
];

export function Hero() {
  return (
    <header className="hero" id="topo" data-pause-offscreen="">
      {/* Apenas o SVG decorativo original é inserido como HTML estático confiável. */}
      <div className="hero-spiral" aria-hidden="true" dangerouslySetInnerHTML={{ __html: spiralMarkup }} />
      <div className="hero-inner">
        <div className="hero-row">
          <div className="hero-copy">
            <div className="eyebrow">Full Stack Developer · Poços de Caldas, MG</div>
            <h1 className="hero-title">Pedro<br />Souza</h1>
            <p className="hero-lead">Desenvolvedor Full Stack com foco em front-end. Construo aplicações web com interfaces responsivas, código limpo e boas práticas.</p>
            <div className="hero-cta">
              <a className="btn btn-dark" href="#projetos">Ver projetos</a>
              <a className="btn btn-line" href={links.linkedin}>LinkedIn</a>
              <a className="btn btn-line" href={links.github}>GitHub</a>
            </div>
          </div>
          <div className="hero-photo">
            <svg className="sprig" aria-hidden="true" viewBox="0 0 230 345" focusable="false">
              {sprigPaths.map((path) => <path key={path} d={path} />)}
            </svg>
            <div className="photo-frame" aria-hidden="true" />
            <img className="photo" src={assetPath('retrato-pedro.jpg')}
              srcSet={`${assetPath('retrato-pedro-640.jpg')} 640w, ${assetPath('retrato-pedro.jpg')} 1000w`}
              sizes="(max-width: 767px) 76vw, (max-width: 1023px) 36vw, 400px"
              width="1000" height="1249" fetchPriority="high" decoding="async"
              alt="Retrato de Pedro Souza sorrindo, de óculos redondos e camisa branca estampada com folhas" />
            <div className="photo-tag">Engenharia de Computação · 2027</div>
          </div>
        </div>
      </div>
    </header>
  );
}
