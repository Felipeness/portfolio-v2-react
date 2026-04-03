import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap } from './gsap-setup';
import { prefersReducedMotion } from '~/shared/utils/prefersReducedMotion';

interface CountUpOptions {
  duration?: number;
  suffix?: string;
  prefix?: string;
  start?: string;
}

export function useCountUp(
  ref: RefObject<HTMLElement | null>,
  value: number,
  options: CountUpOptions = {},
) {
  const {
    duration = 2,
    suffix = '',
    prefix = '',
    start = 'top 85%',
  } = options;

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (prefersReducedMotion()) {
      if (ref.current) {
        ref.current.textContent = `${prefix}${value}${suffix}`;
      }
      return;
    }
    if (!ref.current) return;

    const element = ref.current;
    const counter = { value: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        value,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start,
          once: true,
        },
        onUpdate: () => {
          element.textContent = `${prefix}${Math.round(counter.value)}${suffix}`;
        },
        onComplete: () => {
          element.textContent = `${prefix}${value}${suffix}`;
        },
      });
    }, element);

    return () => {
      ctx.revert();
    };
  }, [ref, value, duration, suffix, prefix, start]);
}
