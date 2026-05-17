import './Contact.css';

const LINKS = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5585988998725?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20te%20contratar.%20O%20salário%20é%20R$15.000.%20Você%20começa%20amanhã? hahaha',
    className: 'whatsapp'
  },
  {
    label: 'E-mail',
    href: 'https://mail.google.com/mail/?view=cm&to=paulo.biaggii@gmail.com&su=Oportunidade%20profissional&body=Olá%20Paulo,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar.',
    className: 'email'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eduardobiagi/',
    className: 'linkedin'
  },
] as const;

export default function Contact() {
  return (
    <section id="contato" className="section-inner contact" data-reveal>
      <p className="contact__kicker">vamos conversar</p>
      <h2 className="section-title">Contato</h2>
      <p className="contact__subtitle">
        Se o projeto fez sentido, me chama pelo canal que for mais direto para voce.
      </p>

      <div className="contact__buttons">
        {LINKS.map(({ label, href, className }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`contact__btn ${className}`}
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
