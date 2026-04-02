import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap } from './gsap-setup';

export function useSplitText(
  ref: RefObject<HTMLElement | null>,
  delay: number = 0,
) {
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!ref.current) return;

    const element = ref.current;
    const text = element.textContent || '';

    // Set aria-label for accessibility
    element.setAttribute('aria-label', text);

    // Split into char spans using DOM APIs (safe — source is own textContent)
    element.textContent = '';
    const chars: HTMLSpanElement[] = [];

    for (const char of text.split('')) {
      const span = document.createElement('span');
      span.className = 'inline-block opacity-0 translate-y-[20px]';
      span.textContent = char === ' ' ? '\u00A0' : char;
      element.appendChild(span);
      chars.push(span);
    }

    const ctx = gsap.context(() => {
      gsap.to(chars, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.02,
        delay,
        ease: 'power3.out',
      });
    }, element);

    return () => {
      ctx.revert();
      element.textContent = text;
    };
  }, [ref, delay]);
}
