import { experience } from '../data/site';

export function Experience() {
  return (
    <section className="section section-exp" id="experiencia">
      <div className="split">
        <div className="section-label">04 — Experiência</div>
        <div className="section-body">
          {experience.map((item) => (
            <div className="job" key={item.title}>
              <div className="job-date">{item.period}</div>
              <div className="job-body">
                <h3>{item.title}</h3>
                <div className="job-role">{item.role}</div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
