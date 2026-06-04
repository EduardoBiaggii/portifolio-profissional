import './Certificates.css';
import estacioLogo from '../assets/estacio.png';

const certs = [
  {
    course: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Estácio',
    year: '5º Período',
    area: 'Tecnologia da Informação',
    icon: null,
    logo: estacioLogo,
    color: '#34d399',
  },
  {
    course: 'Express Course',
    institution: 'Code.org',
    year: '2021',
    area: 'Ciência da Computação',
    icon: '💻',
    logo: null,
    color: '#00adef',
  },
  {
    course: 'Algoritmo',
    institution: 'Curso Online',
    year: 'Abr 2023',
    area: 'Lógica de Programação · 40h',
    icon: '⚙️',
    logo: null,
    color: '#a78bfa',
  },
] as const;

export default function Certificates() {
  return (
    <section id="certificados" className="section-inner" data-reveal="fade">
      <div className="certs__header">
        <p className="certs__kicker">formação contínua</p>
        <h2 className="section-title">Certificados</h2>
      </div>

      <div className="certs__grid">
        {certs.map((c) => (
          <div
            key={c.course}
            className="cert__card"
            style={{ ['--cert-color' as any]: c.color }}
          >
            <div className="cert__icon">
              {c.logo
                ? <img src={c.logo} alt={c.institution} className="cert__logo" />
                : c.icon
              }
            </div>
            <div className="cert__body">
              <span className="cert__course">{c.course}</span>
              <span className="cert__institution">{c.institution}</span>
              <span className="cert__area">{c.area}</span>
            </div>
            <div className="cert__year">{c.year}</div>
            <div className="cert__badge">✓ Concluído</div>
          </div>
        ))}
      </div>
    </section>
  );
}
