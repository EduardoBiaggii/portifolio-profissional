import './Hero.css';
import profilePhoto from '../assets/foto-perfil.jpeg';

export default function Hero() {
  return (
    <section className="hero" data-reveal="zoom">
      <div className="hero__portrait glass">
        <img src={profilePhoto} alt="Foto de perfil de Paulo Eduardo" className="hero__portrait-img" />
      </div>

      <div className="hero__text">
        <p className="hero__eyebrow">founder · builder · ex-piso de loja</p>
        <h1 className="hero__name">Paulo<br />Eduardo</h1>
        <p className="hero__tagline">
          10 anos vendendo.<br />Agora construindo o que faltava.
        </p>
        <p className="hero__subtitle">
          Criador do Plix — ferramenta de comissão feita por quem calculou comissão na mão.
        </p>

        <div className="hero__cta-row">
          <a
            href="https://plixv2.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta glass"
          >
            Ver o Plix →
          </a>
          <a href="#contato" className="hero__cta-secondary">
            Falar comigo
          </a>
        </div>

        <div className="hero__credentials">
          <span className="hero__credential glass">10 anos em vendas</span>
          <span className="hero__credential glass">Founder do Plix</span>
          <span className="hero__credential glass">Builder solo</span>
        </div>
      </div>
    </section>
  );
}
