import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Chat from './components/Chat';
import Contact from './components/Contact';

// Função utilitária de rolagem suave com offset de cabeçalho e curva de desaceleração personalizada (easeOutCubic)
function smoothScrollTo(targetSelector: string, duration: number = 800, offset: number = 90) {
  // Ajuste especial para voltar ao topo
  if (targetSelector === '#top') {
    const startPosition = window.pageYOffset;
    const distance = -startPosition;
    let startTime: number | null = null;

    function animTop(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      // easeOutCubic
      const run = distance * (Math.pow(progress - 1, 3) + 1) + startPosition;
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animTop);
      } else {
        window.scrollTo(0, 0);
      }
    }
    requestAnimationFrame(animTop);
    return;
  }

  const target = document.querySelector(targetSelector);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function easeOutCubic(t: number, b: number, c: number, d: number) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
  }

  function animSection(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeOutCubic(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) {
      requestAnimationFrame(animSection);
    } else {
      window.scrollTo(0, targetPosition);
      // Aplica o efeito spotlight de pulso luminoso na seção alcançada
      target.classList.add('section-pulse-glow');
      setTimeout(() => {
        target.classList.remove('section-pulse-glow');
      }, 1800);
    }
  }

  requestAnimationFrame(animSection);
}

export default function App() {
  useEffect(() => {
    // 1. Intersection Observer para animações de fade-in ao rolar
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

    // 2. Interceptador global de cliques para rolagem suave com compensação
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        smoothScrollTo(href, 800, 90);
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      obs.disconnect();
      clearInterval(interval);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div style={{ background: 'transparent', minHeight: '100vh' }}>
      {/* Barra de Navegação Flutuante Unificada */}
      <Nav />

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
