import { useLayoutEffect } from 'react';
import { gsap } from './gsap-setup';

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useLenis() {
  useLayoutEffect(() => {
    if (prefersReducedMotion() || typeof window === 'undefined') return;

    let lenis: InstanceType<typeof import('lenis').default> | undefined;

    async function init() {
      const Lenis = (await import('lenis')).default;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenis.on('scroll', () => {
        // ScrollTrigger update is handled by the ticker
      });

      const tickerCallback = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);

      // Store for cleanup
      (lenis as any)._tickerCallback = tickerCallback;
    }

    init();

    return () => {
      if (lenis) {
        const cb = (lenis as any)._tickerCallback;
        if (cb) gsap.ticker.remove(cb);
        lenis.destroy();
      }
    };
  }, []);
}
