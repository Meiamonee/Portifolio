import { education, languages } from '../data/site';

export function About() {
  return (
    <section className="section section-sobre" id="sobre">
      <div className="split">
        <div className="section-label">01 — Sobre</div>
        <div className="section-body">
          <h2 className="lead-h2">Desenvolvedor Full Stack com foco em front-end e experiência em React, JavaScript, HTML, CSS, Tailwind CSS, Node.js e APIs REST.</h2>
          <p className="lead-p">Atuo no desenvolvimento de aplicações web com React, Node.js, MongoDB e PostgreSQL, priorizando código limpo, interfaces responsivas e boas práticas.</p>
          <div className="info">
            <div className="info-col">
              <div className="info-title">Formação</div>
              {education.map((item) => (
                <div className="info-item" key={item.title}>
                  <div className="info-strong">{item.title}</div>
                  <div>{item.institution}</div>
                  <div className="info-meta">{item.period}</div>
                </div>
              ))}
            </div>
            <div className="info-col-sm">
              <div className="info-title">Idiomas</div>
              {languages.map((item) => (
                <div className="lang-row" key={item.name}>
                  <span className="info-strong">{item.name}</span><span>{item.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
