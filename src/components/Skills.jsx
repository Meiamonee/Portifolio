import { assetPath, skills } from '../data/site';

export function Skills() {
  return (
    <section className="section" id="competencias">
      <div className="split">
        <div className="section-label">02 — Competências</div>
        <div className="skills">
          {skills.map((group) => (
            <div className="skill" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <img className="tech-icon" src={assetPath(`tech-icons/${item.icon}`)} alt="" width="26" height="26" />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
