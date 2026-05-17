import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to every [data-reveal] element.
 * Only activates on desktop (> 768px). No-op on mobile.
 */
export function useReveal(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    if (window.innerWidth <= 768) return;

    const timer = setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>('[data-reveal]');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      els.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 400); // slight delay so main content finishes fading in

    return () => clearTimeout(timer);
  }, [enabled]);
}
