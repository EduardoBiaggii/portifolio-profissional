import './Projects.css';
import plixAppLogo from '../assets/plix-app.png';

type Tech = {
  name: string;
  icon: 'react' | 'typescript' | 'firebase' | 'css';
};

const plixStack: Tech[] = [
  { name: 'React', icon: 'react' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Firebase', icon: 'firebase' },
  { name: 'CSS', icon: 'css' },
];

function TechIcon({ icon }: { icon: Tech['icon'] }) {
  if (icon === 'react') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <circle cx="24" cy="24" r="3.4" />
        <ellipse cx="24" cy="24" rx="18" ry="7" />
        <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(120 24 24)" />
      </svg>
    );
  }

  if (icon === 'typescript') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <rect x="7" y="7" width="34" height="34" rx="5" />
        <path d="M16 18h14M23 18v16M31 25c1.1-1 2.5-1.4 4.1-1.1 1.4.2 2.6.8 3.4 1.7M31 33c1.2 1 2.7 1.4 4.4 1.2 1.9-.3 3.1-1.3 3.1-2.8 0-3.8-6.8-2.1-6.8-5.4" />
      </svg>
    );
  }

  if (icon === 'firebase') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <path d="M12 38 18.5 8c.2-.8 1.3-.9 1.7-.2l6.1 11.5 3.9-7.5c.4-.8 1.6-.6 1.8.2L36 38 24 44 12 38Z" />
        <path d="m12 38 14.3-18.7M36 38 26.3 19.3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path d="M12 8h24l-2.2 28L24 41l-9.8-5L12 8Z" />
      <path d="M18 17h13l-.4 5H18.4l.3 4h11.6l-.7 7.2L24 36l-5.6-2.8-.3-3.8" />
    </svg>
  );
}

function TechStack({ items }: { items: Tech[] }) {
  return (
    <ul className="project-card__stack" aria-label="Stack utilizada">
      {items.map((tech) => (
        <li key={tech.name} className={`project-card__tech project-card__tech--${tech.icon}`}>
          <TechIcon icon={tech.icon} />
          <span>{tech.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  return (
    <section id="projetos" className="section-inner" data-reveal>
      <div className="projects__header">
        <p className="projects__kicker">produto, tentativa, execucao</p>
        <h2 className="section-title">Projetos</h2>
      </div>

      <div className="projects__grid">
        <div className="project-card">
          <span className="project-card__badge">Em desenvolvimento</span>
          <a
            href="https://massive-boulder-296212.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__logo-link"
            aria-label="Abrir Plix App"
          >
            <img src={plixAppLogo} alt="" className="project-card__logo" />
          </a>
          <h3 className="project-card__name">Plix App</h3>
          <p className="project-card__desc">
            Ferramenta de gestao de vendas e calculo de comissao para
            vendedores de loja. Feita por quem viveu o problema.
          </p>
          <p className="project-card__meta">Produto · Mobile · 2025</p>

          <TechStack items={plixStack} />

          <div className="project-card__footer">
            <a
              href="https://massive-boulder-296212.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              Ver o Plix →
            </a>
            <a href="#contato" className="project-card__invite">
              Pedir convite
            </a>
          </div>
        </div>

        <div className="project-card project-card--future">
          <span className="project-card__badge">Proximo ciclo</span>
          <h3 className="project-card__name">Novo produto</h3>
          <p className="project-card__desc">
            Espaco reservado para a proxima ideia validada: simples, util e com
            foco em resolver um problema real antes de parecer grande.
          </p>
          <p className="project-card__meta">Pesquisa · Produto · em breve</p>

          <div className="project-card__footer">
            <a href="#contato" className="project-card__link">
              Conversar sobre ideias →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
