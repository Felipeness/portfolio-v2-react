import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap, ScrollTrigger } from './gsap-setup';

interface BatchRevealOptions {
  itemSelector?: string;
  stagger?: number;
  duration?: number;
  y?: number;
}

export function useBatchReveal(
  containerRef: RefObject<HTMLElement | null>,
  options: BatchRevealOptions = {},
) {
  const { itemSelector = '.batch-item', stagger = 0.1, duration = 0.6, y = 50 } = options;

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(itemSelector);
    if (items.length === 0) return;

    gsap.set(items, { opacity: 0, y });

    const triggers = ScrollTrigger.batch(items, {
      interval: 0.1,
      start: 'top 90%',
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1, y: 0, duration, stagger,
          ease: 'power3.out', overwrite: true,
        });
      },
    });

    return () => {
      for (const trigger of triggers) trigger.kill();
      gsap.set(items, { clearProps: 'all' });
    };
  }, [containerRef, itemSelector, stagger, duration, y]);
}
