import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Chat from './components/Chat';
import Contact from './components/Contact';
import './components/Nav.css';

const NAV_LINKS = [
  { label: 'Sobre', href: '#sobre', orbit: 'dawn' },
  { label: 'Projetos', href: '#projetos', orbit: 'zenith' },
  { label: 'Chat', href: '#chat', orbit: 'flare' },
  { label: 'Contato', href: '#contato', orbit: 'dusk' },
] as const;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const observeAll = () => {
      document.querySelectorAll('[data-reveal]:not(.revealed)').forEach((el) => {
        obs.observe(el);
      });
    };

    observeAll();
    const interval = setInterval(observeAll, 500);

    return () => {
      obs.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ background: 'transparent', minHeight: '100vh' }}>
      <nav
        className="nav"
        aria-label="Navegação principal"
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 400 }}
      >
        <div className="nav__left">
          <a href="#sobre" className="nav__link" data-orbit="dawn">Sobre</a>
          <a href="#projetos" className="nav__link" data-orbit="zenith">Projetos</a>
        </div>
        <div className="nav__center" />
        <div className="nav__right">
          <a href="#chat" className="nav__link" data-orbit="flare">Chat</a>
          <a href="#contato" className="nav__link" data-orbit="dusk">Contato</a>
        </div>
      </nav>

      <button
        className="nav__hamburger"
        onClick={() => setMenuOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      {menuOpen && (
        <div className="nav__overlay" onClick={() => setMenuOpen(false)}>
          <div
            className="nav__drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            <button className="nav__close" onClick={() => setMenuOpen(false)} aria-label="Fechar menu">✕</button>
            {NAV_LINKS.map(({ label, href, orbit }) => (
              <a key={href} href={href} className="nav__drawer-link" data-orbit={orbit} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        </div>
      )}

      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <About />
        <Projects />
        <Chat />
        <Contact />
      </main>
    </div>
  );
}
