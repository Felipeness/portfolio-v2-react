import { useEffect, type RefObject } from 'react';

interface CountUpOptions {
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function useCountUp(
  ref: RefObject<HTMLElement | null>,
  value: number,
  options: CountUpOptions = {},
) {
  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return;
    const element = ref.current;
    const { suffix = '', prefix = '', duration = 2000 } = options;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.textContent = prefix + String(value) + suffix;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          function update(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(value * eased);
            element.textContent = prefix + String(current) + suffix;
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, value, options]);
}
