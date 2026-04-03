import { useEffect, type RefObject } from 'react';

interface ScrollRevealOptions {
  childSelector?: string;
  stagger?: number;
  y?: number;
  threshold?: number;
}

export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  options: ScrollRevealOptions = {},
) {
  const { childSelector, stagger = 0.1, y = 20, threshold = 0.15 } = options;

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const elements = childSelector
      ? Array.from(ref.current.querySelectorAll(childSelector))
      : [ref.current];

    // Set initial hidden state via inline styles
    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = `translateY(${y}px)`;
      htmlEl.style.transition = `opacity 0.6s ease ${i * stagger}s, transform 0.6s ease ${i * stagger}s`;
    });

    // Use requestAnimationFrame to ensure elements are laid out before observing
    requestAnimationFrame(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const htmlEl = entry.target as HTMLElement;
              htmlEl.style.opacity = '1';
              htmlEl.style.transform = 'translateY(0)';
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold },
      );

      elements.forEach((el) => observer.observe(el));

      // Fallback: if elements are still invisible after 2 seconds, force-show them
      const fallbackTimer = setTimeout(() => {
        elements.forEach((el) => {
          const htmlEl = el as HTMLElement;
          if (htmlEl.style.opacity === '0') {
            htmlEl.style.opacity = '1';
            htmlEl.style.transform = 'translateY(0)';
          }
        });
      }, 2000);

      // Store cleanup
      (ref as any)._scrollRevealCleanup = () => {
        clearTimeout(fallbackTimer);
        observer.disconnect();
      };
    });

    return () => {
      if ((ref as any)._scrollRevealCleanup) {
        (ref as any)._scrollRevealCleanup();
      }
    };
  }, [ref, childSelector, stagger, y, threshold]);
}
