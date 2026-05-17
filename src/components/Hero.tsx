import './Hero.css';
import profilePhoto from '../assets/foto-perfil.jpeg';

export default function Hero() {
  const scrollToChat = () => {
    document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" data-reveal>
      <div className="hero__portrait-shell">
        <div className="hero__avatar">
          <img src={profilePhoto} alt="Foto de perfil de Paulo Eduardo" />
        </div>
      </div>

      <div className="hero__text">
        <p className="hero__eyebrow">portfolio em construcao real</p>
        <h1 className="hero__name">Paulo Eduardo</h1>
        <p className="hero__tagline">Vendedor. Pai. Construtor.</p>
        <p className="hero__subtitle">
          Transformando experiência em produto — criador do Plix App
        </p>
        <button className="hero__cta" onClick={scrollToChat}>
          Converse comigo
        </button>
      </div>
    </section>
  );
}
