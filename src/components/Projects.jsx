import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/site';

function useCompactLayout() {
  const [compact, setCompact] = useState(() => matchMedia('(max-width: 1023px)').matches);
  useEffect(() => {
    const media = matchMedia('(max-width: 1023px)');
    const update = () => setCompact(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return compact;
}

function ProjectCard({ project, compact }) {
  const [open, setOpen] = useState(false);
  const [suppressHover, setSuppressHover] = useState(false);
  const pointerStart = useRef(null);
  useEffect(() => { if (!compact) setOpen(false); }, [compact]);

  const toggle = () => setOpen((current) => !current);
  const onClick = (event) => {
    if (!compact || event.target.closest('a')) return;
    const start = pointerStart.current;
    if (start && (Math.abs(event.clientX - start.x) > 10 || Math.abs(event.clientY - start.y) > 10)) return;
    toggle();
  };
  const onKeyDown = (event) => {
    if (!compact || event.target.closest('a')) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle();
    } else if (event.key === 'Escape' && open) {
      setOpen(false);
    }
  };
  const onProjectLinkClick = (event) => {
    const link = event.currentTarget;
    setOpen(false);
    setSuppressHover(true);
    requestAnimationFrame(() => {
      link.blur();
      link.closest('.proj-card')?.blur();
    });
  };

  return (
    <article className={`proj-card${open ? ' is-open' : ''}${suppressHover ? ' is-leaving' : ''}`} tabIndex={0}
      aria-label={`${open ? 'Ocultar detalhes de ' : 'Ver detalhes de '}${project.title}`}
      aria-expanded={open}
      onPointerDown={(event) => { pointerStart.current = { x: event.clientX, y: event.clientY }; }}
      onPointerLeave={() => setSuppressHover(false)}
      onClick={onClick} onKeyDown={onKeyDown}>
      <div className="proj-num-bg" aria-hidden="true">{project.number}</div>
      <div className="proj-front">
        <div className="proj-meta"><b>{project.number}</b><span className="proj-tag">{project.category}</span></div>
        <div>
          <h3 className="proj-title">{project.title}</h3>
          <div className="proj-hint"><i />Ver detalhes<span className="arrow">→</span></div>
        </div>
      </div>
      <div className="proj-back">
        <div className="proj-back-meta">{project.number} — {project.category}</div>
        <h3 className="proj-back-title">{project.title}</h3>
        <p className="proj-desc">{project.description}</p>
        <div className="chips">{project.stack.map((name) => <span className="chip" key={name}>{name}</span>)}</div>
        <a className="proj-link" href={project.href} target="_blank" rel="noopener noreferrer"
          onClick={onProjectLinkClick}>Ver no GitHub →</a>
      </div>
    </article>
  );
}

export function Projects() {
  const compact = useCompactLayout();
  return (
    <section className="section" id="projetos">
      <div className="projects-head">
        <div className="section-label">03 — Projetos</div>
        <h2 className="section-h2">Trabalhos<br />selecionados</h2>
      </div>
      <div className="proj-grid">
        {projects.map((project) => <ProjectCard project={project} compact={compact} key={project.number} />)}
      </div>
    </section>
  );
}
