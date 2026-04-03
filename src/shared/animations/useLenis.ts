import { useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from './gsap-setup';
import { prefersReducedMotion } from '~/shared/utils/prefersReducedMotion';

export function useLenis() {
  const lenisRef = useRef<any>(null);
  const tickerRef = useRef<((time: number) => void) | null>(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (prefersReducedMotion()) return;

    let mounted = true;

    async function init() {
      const Lenis = (await import('lenis')).default;
      if (!mounted) return;

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenis.on('scroll', () => {
        ScrollTrigger.update();
      });

      const tickerCallback = (time: number) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);

      lenisRef.current = lenis;
      tickerRef.current = tickerCallback;
    }

    init();

    return () => {
      mounted = false;
      if (tickerRef.current) gsap.ticker.remove(tickerRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
    };
  }, []);
}
