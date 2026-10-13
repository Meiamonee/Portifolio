import { links } from '../data/site';

function BrazilFlag() {
  return (
    <svg className="phone-flag" viewBox="0 0 28 20" role="img" aria-label="Bandeira do Brasil">
      <rect width="28" height="20" fill="#009739" />
      <path d="M14 2 26 10 14 18 2 10Z" fill="#FFDF00" />
      <circle cx="14" cy="10" r="5.2" fill="#002776" />
      <path d="M9.3 8.7c3.6-.4 7 .8 9.6 3.1" fill="none" stroke="#fff" strokeWidth=".85" />
    </svg>
  );
}

export function Contact() {
  return (
    <footer className="contact" id="contato">
      <div className="contact-inner">
        <div className="section-label">05 — Contato</div>
        <h2 className="contact-title">Vamos<br />conversar.</h2>
        <a className="contact-mail" href={links.email}>pedrolsouzafaria@hotmail.com</a>
        <a className="contact-phone" href={links.phone}><BrazilFlag /><span>+55 (35) 98472-6490</span></a>
        <div className="contact-links">
          <a className="btn btn-line on-dark" href={links.linkedin}>LinkedIn</a>
          <a className="btn btn-line on-dark" href={links.github}>GitHub</a>
        </div>
        <div className="footer">
          <span>© 2026 Pedro Souza</span>
          <span>Poços de Caldas, Minas Gerais, Brasil</span>
        </div>
      </div>
    </footer>
  );
}
