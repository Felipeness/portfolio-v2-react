import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap } from './gsap-setup';

interface HeroScaleFadeOptions {
  scaleTo?: number;
  opacityTo?: number;
  scrub?: number | boolean;
}

export function useHeroScaleFade(
  ref: RefObject<HTMLElement | null>,
  options: HeroScaleFadeOptions = {},
) {
  const { scaleTo = 0.85, opacityTo = 0, scrub = 1 } = options;

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        scale: scaleTo,
        opacity: opacityTo,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: 'bottom top',
          scrub,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, scaleTo, opacityTo, scrub]);
}
