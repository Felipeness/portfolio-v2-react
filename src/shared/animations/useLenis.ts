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

      gsap.ticker.add((time) => {
        lenis?.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    }

    init();

    return () => {
      lenis?.destroy();
    };
  }, []);
}
