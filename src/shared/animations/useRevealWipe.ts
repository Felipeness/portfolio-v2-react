import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap } from './gsap-setup';

type WipeDirection = 'left' | 'right' | 'top' | 'bottom' | 'center';

interface RevealWipeOptions {
  direction?: WipeDirection;
  scrub?: number | boolean;
  start?: string;
  end?: string;
}

function getClipPaths(direction: WipeDirection) {
  const map: Record<WipeDirection, { from: string; to: string }> = {
    left:   { from: 'inset(0 100% 0 0)', to: 'inset(0 0% 0 0)' },
    right:  { from: 'inset(0 0 0 100%)', to: 'inset(0 0 0 0%)' },
    top:    { from: 'inset(0 0 100% 0)', to: 'inset(0 0 0% 0)' },
    bottom: { from: 'inset(100% 0 0 0)', to: 'inset(0% 0 0 0)' },
    center: { from: 'inset(50% 50% 50% 50%)', to: 'inset(0% 0% 0% 0%)' },
  };
  return map[direction];
}

export function useRevealWipe(
  ref: RefObject<HTMLElement | null>,
  options: RevealWipeOptions = {},
) {
  const { direction = 'left', scrub = 0.5, start = 'top 80%', end = 'top 30%' } = options;

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!ref.current) return;

    const clips = getClipPaths(direction);

    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { clipPath: clips.from },
        {
          clipPath: clips.to,
          ease: scrub ? 'none' : 'power2.inOut',
          scrollTrigger: { trigger: ref.current, start, end, scrub },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref, direction, scrub, start, end]);
}
