import { useState } from 'react';
import './Nav.css';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      {/* Desktop nav */}
      <nav className="nav" aria-label="Navegação principal">
        <div className="nav__left">
          <a href="#sobre" className="nav__link" data-orbit="dawn">Sobre</a>
          <a href="#projetos" className="nav__link" data-orbit="zenith">Projetos</a>
        </div>

        <div className="nav__center">
          <a href="#top" className="nav__lamp" aria-label="Início">
            <svg className="nav__lamp-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 2.61 1.41 4.89 3.5 6.19V17a1 1 0 001 1h5a1 1 0 001-1v-1.81C17.59 13.89 19 11.61 19 9c0-3.87-3.13-7-7-7z" fill="currentColor" opacity="0.9"/>
              <path d="M9 21a1 1 0 001 1h4a1 1 0 000-2H10a1 1 0 00-1 1z" fill="currentColor"/>
              <path d="M10 17h4v2h-4z" fill="currentColor" opacity="0.7"/>
              <line x1="12" y1="2" x2="12" y2="0.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="4.22" y1="4.22" x2="3.15" y2="3.15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="19.78" y1="4.22" x2="20.85" y2="3.15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="2" y1="9" x2="0.5" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="22" y1="9" x2="23.5" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
        </div>

        <div className="nav__right">
          <a href="#chat" className="nav__link" data-orbit="flare">Chat</a>
          <a href="#contato" className="nav__link" data-orbit="dusk">Contato</a>
        </div>
      </nav>

      {/* Mobile hamburger */}
      <button
        className="nav__hamburger"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={open}
      >
        ☰
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="nav__overlay" onClick={close}>
          <div
            className="nav__drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="nav__close" onClick={close} aria-label="Fechar menu">✕</button>
            <a href="#sobre"    className="nav__drawer-link" data-orbit="dawn" onClick={close}>Sobre</a>
            <a href="#projetos" className="nav__drawer-link" data-orbit="zenith" onClick={close}>Projetos</a>
            <a href="#chat"     className="nav__drawer-link" data-orbit="flare" onClick={close}>Chat</a>
            <a href="#contato"  className="nav__drawer-link" data-orbit="dusk" onClick={close}>Contato</a>
          </div>
        </div>
      )}
    </>
  );
}
