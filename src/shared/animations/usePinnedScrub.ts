import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap, ScrollTrigger } from './gsap-setup';

interface PinnedScrubOptions {
  scrubDistance?: number;
  scrub?: number | boolean;
}

export function usePinnedScrub(
  containerRef: RefObject<HTMLElement | null>,
  buildTimeline: (tl: gsap.core.Timeline) => void,
  options: PinnedScrubOptions = {},
) {
  const { scrubDistance = 2000, scrub = 1 } = options;

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          start: 'top top',
          end: `+=${scrubDistance}`,
          scrub,
          anticipatePin: 1,
        },
      });
      buildTimeline(tl);
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, scrubDistance, scrub]);
}
