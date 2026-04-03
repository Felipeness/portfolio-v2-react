import { useEffect, useRef, type RefObject } from 'react';

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
  const { childSelector, stagger = 0.08, y = 20, threshold = 0.1 } = options;
  const initialized = useRef(false);

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined' || initialized.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    initialized.current = true;
    const container = ref.current;

    const elements = childSelector
      ? Array.from(container.querySelectorAll(childSelector))
      : [container];

    if (elements.length === 0) return;

    // Only animate elements that are BELOW the viewport
    const viewportBottom = window.scrollY + window.innerHeight;

    const toAnimate: HTMLElement[] = [];
    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      const elTop = htmlEl.getBoundingClientRect().top + window.scrollY;

      if (elTop > viewportBottom - 100) {
        // Below viewport — set up for animation
        htmlEl.style.opacity = '0';
        htmlEl.style.transform = `translateY(${y}px)`;
        toAnimate.push(htmlEl);
      }
      // Elements already in viewport stay visible (no animation)
    });

    if (toAnimate.length === 0) return;

    // Add transitions after a frame to avoid flash
    requestAnimationFrame(() => {
      toAnimate.forEach((el, i) => {
        el.style.transition = `opacity 0.5s ease ${i * stagger}s, transform 0.5s ease ${i * stagger}s`;
      });
    });

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

    toAnimate.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ref, childSelector, stagger, y, threshold]);
}
