import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap, ScrollTrigger } from './gsap-setup';

interface ScrollRevealOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  childSelector?: string;
}

export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  options: ScrollRevealOptions = {},
) {
  const {
    y = 30,
    duration = 0.8,
    stagger = 0.1,
    start = 'top 85%',
    childSelector,
  } = options;

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const targets = childSelector
        ? ref.current!.querySelectorAll(childSelector)
        : ref.current;

      gsap.set(targets, { y, opacity: 0 });

      gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start,
        },
      });
    }, ref);

    return () => {
      ctx.revert();
    };
  }, [ref, y, duration, stagger, start, childSelector]);
}
