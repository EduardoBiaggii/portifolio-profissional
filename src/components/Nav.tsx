import { useState } from 'react';
import './Nav.css';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      {/* Desktop Floating Nav */}
      <nav className="nav" aria-label="Navegação principal">
        <div className="nav__left">
          <a href="#sobre" className="nav__link" data-orbit="dawn">Sobre</a>
          <a href="#projetos" className="nav__link" data-orbit="zenith">Projetos</a>
        </div>

        <div className="nav__center">
          <a href="#top" className="nav__logo" aria-label="Voltar ao início">
            PE
          </a>
        </div>

        <div className="nav__right">
          <a href="#chat" className="nav__link" data-orbit="flare">Chat</a>
          <a href="#contato" className="nav__link" data-orbit="dusk">Contato</a>
        </div>
      </nav>

      {/* Mobile Hamburger (desenhado com linhas CSS para morphing) */}
      <button
        className={`nav__hamburger ${open ? 'nav__hamburger--active' : ''}`}
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={open}
      >
        <span className="nav__hamburger-bar"></span>
        <span className="nav__hamburger-bar"></span>
      </button>

      {/* Mobile Drawer (Overlay e Gaveta de Vidro) */}
      {open && (
        <div className="nav__overlay" onClick={close}>
          <div
            className="nav__drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            <button className="nav__close" onClick={close} aria-label="Fechar menu">
              <span className="nav__close-bar"></span>
              <span className="nav__close-bar"></span>
            </button>
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
