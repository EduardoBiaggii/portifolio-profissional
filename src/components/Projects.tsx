import './Projects.css';
import plixAppLogo from '../assets/apple-touch-icon.png';

type Tech = {
  name: string;
  icon: 'react' | 'typescript' | 'supabase' | 'tailwind';
};

function PlixPreview() {
  const bars = [
    { month: 'Jan', h: 22 },
    { month: 'Fev', h: 38 },
    { month: 'Mar', h: 52 },
    { month: 'Abr', h: 44 },
    { month: 'Mai', h: 68 },
    { month: 'Jun', h: 88, active: true },
    { month: 'Jul', h: 0 },
    { month: 'Ago', h: 0 },
  ];

  return (
    <div className="plix-preview" aria-hidden="true">
      <div className="plix-preview__top-bar" />
      <div className="plix-preview__header">
        <div className="plix-preview__logo-row">
          <span className="plix-preview__wordmark">PLIX</span>
          <div className="plix-preview__user-info">
            <span className="plix-preview__username">Paulo de Biagi</span>
            <span className="plix-preview__rank">OURO</span>
          </div>
        </div>
        <div className="plix-preview__months">
          {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'].map((m, i) => (
            <span key={m} className={i === 5 ? 'active' : ''}>{m}</span>
          ))}
        </div>
      </div>

      <div className="plix-preview__body">
        <p className="plix-preview__kicker">VOCÊ GANHOU ESTE MÊS</p>
        <p className="plix-preview__amount">R$ 4.517<span>,67</span></p>
        <div className="plix-preview__stats-row">
          <div className="plix-preview__stat">
            <span>FATURAMENTO</span>
            <strong>R$ 42.300</strong>
          </div>
          <div className="plix-preview__stat">
            <span>LANÇAMENTOS</span>
            <strong>21</strong>
          </div>
        </div>
        <div className="plix-preview__chart">
          {bars.map(({ month, h, active }) => (
            <div key={month} className="plix-preview__bar-col">
              <div
                className={`plix-preview__bar${active ? ' plix-preview__bar--active' : ''}`}
                style={{ height: h > 0 ? `${h}%` : '3px' }}
              />
              <span className={active ? 'active' : ''}>{month}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="plix-preview__nav">
        {['Lançar', 'Pré-Venda', 'Histórico', 'Resumo', 'Metas'].map((tab) => (
          <span key={tab} className={tab === 'Resumo' ? 'active' : ''}>{tab}</span>
        ))}
      </div>
    </div>
  );
}

const plixStack: Tech[] = [
  { name: 'React', icon: 'react' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Supabase', icon: 'supabase' },
  { name: 'Tailwind', icon: 'tailwind' },
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

  if (icon === 'supabase') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <path d="M27 7 11 28h15v13l15-21H26V7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path d="M14 21c1.2-4.8 4.8-7.2 9.6-6 2.4.6 4.8 1.8 6 3.6-2.4.6-4.8.6-7.2-1.2-1.2-.6-2.4-1.2-3.6.6-1.2.6-1.8 1.8-1.8 3.6 4.8-1.2 9.6-.6 13.2 2.4-1.2 4.8-4.8 7.2-9.6 6-2.4-.6-4.8-1.8-6-3.6 2.4-.6 4.8-.6 7.2 1.2 1.2.6 2.4 1.2 3.6-.6 1.2-.6 1.8-1.8 1.8-3.6-4.8 1.2-9.6.6-13.2-2.4Z" />
      <path d="M25 29c1.2-4.8 4.8-7.2 9.6-6 2.4.6 4.8 1.8 6 3.6-2.4.6-4.8.6-7.2-1.2-1.2-.6-2.4-1.2-3.6.6-1.2.6-1.8 1.8-1.8 3.6 4.8-1.2 9.6-.6 13.2 2.4-1.2 4.8-4.8 7.2-9.6 6-2.4-.6-4.8-1.8-6-3.6 2.4-.6 4.8-.6 7.2 1.2 1.2.6 2.4 1.2 3.6-.6 1.2-.6 1.8-1.8 1.8-3.6-4.8 1.2-9.6.6-13.2-2.4Z" />
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
    <section id="projetos" className="section-inner projects-section" data-reveal="fade">
      <div className="projects__header">
        <p className="projects__kicker">produto, tentativa, execucao</p>
        <h2 className="section-title">Projetos</h2>
      </div>

      <div className="projects__grid">
        <div className="project-card project-card--plix" data-reveal="zoom">
          <PlixPreview />
          <div className="project-card__header">
            <div className="project-card__logo-neon">
              <a
                href="https://plixv2.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Plix App"
                className="project-card__logo-anchor"
              >
                <img src={plixAppLogo} alt="Plix App" className="project-card__logo" />
              </a>
            </div>
            <div className="project-card__header-info">
              <span className="project-card__badge">Em desenvolvimento</span>
              <h3 className="project-card__name">Plix App</h3>
            </div>
          </div>
          <p className="project-card__desc">
            Ferramenta de gestao de vendas e calculo de comissao para
            vendedores de loja. Feita por quem viveu o problema.
          </p>
          <p className="project-card__meta">Produto · Mobile · 2025</p>

          <TechStack items={plixStack} />

          <div className="project-card__footer">
            <a
              href="https://plixv2.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link project-card__link--plix"
            >
              Ver o Plix →
            </a>
          </div>
        </div>

        <div className="project-card project-card--future" data-reveal="zoom">
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
