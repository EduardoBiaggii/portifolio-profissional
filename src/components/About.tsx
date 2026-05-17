import './About.css';
import aboutPhoto from '../assets/sobremim.png';

export default function About() {
  return (
    <section id="sobre" className="section-inner" data-reveal>
      <div className="about">
        <div className="about__text">

          <p className="about__kicker">luz propria, pe no chao</p>
          <h2 className="section-title">Sobre mim</h2>

          <p className="about__p">
            Pai do Eduardo Levi, 7 anos. Minha família é minha base e o
            principal motivo de tudo que construo.
          </p>

          <p className="about__p">
            Tenho perfil comercial, focado em resultado e performance. Estou em
            fase de reconstrução profissional — construindo o Plix App e gerando
            renda real para minha família.
          </p>

        </div>

        <div className="about__photo-shell">
          <div className="about__photo">
            <img src={aboutPhoto} alt="Paulo Eduardo com sua familia" />
          </div>
        </div>
      </div>
    </section>
  );
}
