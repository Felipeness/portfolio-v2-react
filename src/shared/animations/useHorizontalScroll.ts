import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap, ScrollTrigger } from './gsap-setup';

interface HorizontalScrollOptions {
  trackSelector?: string;
  scrub?: number | boolean;
}

export function useHorizontalScroll(
  containerRef: RefObject<HTMLElement | null>,
  options: HorizontalScrollOptions = {},
) {
  const { trackSelector = '.h-scroll-track', scrub = 1 } = options;

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const track = containerRef.current!.querySelector(trackSelector) as HTMLElement;
      if (!track) return;

      const scrollWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          scrub,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, trackSelector, scrub]);
}
