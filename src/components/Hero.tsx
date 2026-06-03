import './Hero.css';
import profilePhoto from '../assets/foto-perfil.jpeg';

export default function Hero() {
  return (
    <section className="hero" data-reveal="zoom" id="top">
      {/* Elementos Decorativos Premium de Fundo */}
      <div className="hero__grid-pattern" aria-hidden="true" />
      <div className="hero__glow-1" aria-hidden="true" />
      <div className="hero__glow-2" aria-hidden="true" />

      {/* Double-Bezel Frame para a Foto de Perfil */}
      <div className="hero__portrait-outer glass">
        <div className="hero__portrait-inner">
          <img 
            src={profilePhoto} 
            alt="Foto de perfil de Paulo Eduardo" 
            className="hero__portrait-img" 
          />
        </div>
      </div>

      <div className="hero__text">
        {/* Eyebrow com indicador de status de atividade */}
        <div className="hero__eyebrow-container">
          <span className="hero__status-pulse" aria-hidden="true">
            <span className="hero__status-ping"></span>
            <span className="hero__status-dot"></span>
          </span>
          <p className="hero__eyebrow">founder · builder · ex-piso de loja</p>
        </div>

        {/* Nome com efeito de destaque em gradiente */}
        <h1 className="hero__name">
          <span className="hero__name-first">Paulo</span>
          <span className="hero__name-last">Eduardo</span>
        </h1>

        <p className="hero__tagline">
          10 anos vendendo.<br />Agora construindo o que faltava.
        </p>
        
        <p className="hero__subtitle">
          Criador do Plix — ferramenta de comissão feita por quem calculou comissão na mão.
        </p>

        {/* CTAs com design táteis e padrão Button-in-Button */}
        <div className="hero__cta-row">
          <a
            href="https://plixv2.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta glass"
          >
            <span className="hero__cta-text">Ver o Plix</span>
            <span className="hero__cta-circle" aria-hidden="true">
              <svg className="hero__cta-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
          <a href="#contato" className="hero__cta-secondary">
            <span>Falar comigo</span>
          </a>
        </div>

        {/* Credenciais com ícones vetoriais elegantes */}
        <div className="hero__credentials">
          <span className="hero__credential glass">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="hero__credential-icon">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
            10 anos em vendas
          </span>
          <span className="hero__credential glass">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="hero__credential-icon">
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              <circle cx="12" cy="12" r="4"/>
            </svg>
            Founder do Plix
          </span>
          <span className="hero__credential glass">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="hero__credential-icon">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            Builder solo
          </span>
        </div>
      </div>
    </section>
  );
}
