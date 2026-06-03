import './About.css';
import aboutPhoto from '../assets/sobremim.png';

export default function About() {
  return (
    <section id="sobre" className="section-inner about-section" data-reveal="flip">
      <div className="about">
        <div className="about__text">
          <p className="about__kicker">de vendedor a fundador</p>
          <h2 className="section-title">Sobre mim</h2>

          <p className="about__p" style={{ animationDelay: '0.1s' }}>
            Passei 10 anos no piso de loja — Samsung, iPlace, varejo de tecnologia.
            Aprendi a vender, bater meta e calcular comissão em planilha no fim do mês.
            Senti na pele o problema que o Plix resolve.
          </p>

          <p className="about__p" style={{ animationDelay: '0.2s' }}>
            Hoje estou em reconstrução profissional. Aprendo a construir na prática
            com React, TypeScript e Supabase. O Plix é produto real, com usuários reais.
          </p>

          <p className="about__p" style={{ animationDelay: '0.3s' }}>
            Pai do Eduardo Levi. A família é o motivo, o produto é o caminho.
          </p>
        </div>

        <div className="about__photo-wrap glass">
          <img src={aboutPhoto} alt="Paulo Eduardo com sua familia" className="about__photo-img" />
        </div>
      </div>
    </section>
  );
}
