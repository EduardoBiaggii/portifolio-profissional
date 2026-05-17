import { useState, type CSSProperties } from 'react';

import { useReveal } from './hooks/useReveal';
import Lamp from './components/Lamp';
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
  const [isOn, setIsOn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleLight = () => setIsOn((prev: boolean) => !prev);

  useReveal(isOn);

  const navVisible = {
    opacity: isOn ? 1 : 0,
    pointerEvents: (isOn ? 'auto' : 'none') as CSSProperties['pointerEvents'],
    transition: 'opacity 0.9s ease 0.3s',
  };

  return (
    <div
      data-lamp={isOn ? 'on' : 'off'}
      style={{ background: 'transparent', minHeight: '100vh', transition: 'background 1.2s ease, color 1.2s ease' }}
    >

      <Lamp isOn={isOn} onToggle={toggleLight} />


      {/* Fixed nav — desktop */}
      <nav
        className="nav"
        aria-label="Navegação principal"
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 400, ...navVisible }}
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

      {/* Mobile hamburger */}
      <button
        className="nav__hamburger"
        style={navVisible}
        onClick={() => setMenuOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      {/* Mobile fullscreen drawer */}
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
              <a key={href} href={href} className="nav__drawer-link" data-orbit={orbit} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </div>
        </div>
      )}

      {/* Site content — fades in when lamp is on */}
      <main
        style={{
          opacity: isOn ? 1 : 0,
          transition: 'opacity 0.9s ease 0.3s',
          pointerEvents: isOn ? 'auto' : 'none',
          paddingTop: '80px',
        }}
      >
        <Hero />
        <About />
        <Projects />
        <Chat />
        <Contact />
      </main>

    </div>
  );
}
