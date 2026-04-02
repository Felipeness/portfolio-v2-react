import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import { gsap } from './gsap-setup';

interface TextRevealOptions {
  splitBy?: 'words' | 'chars';
  scrub?: number;
  start?: string;
  end?: string;
  ghostColor?: string;
  revealColor?: string;
}

export function useTextRevealOnScroll(
  ref: RefObject<HTMLElement | null>,
  options: TextRevealOptions = {},
) {
  const {
    splitBy = 'words',
    scrub = 0.5,
    start = 'top 80%',
    end = 'top 20%',
    ghostColor = 'rgba(255,255,255,0.15)',
    revealColor = 'rgba(255,255,255,1)',
  } = options;

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!ref.current) return;

    const element = ref.current;
    const originalHTML = element.innerHTML;
    const text = element.textContent || '';

    element.setAttribute('aria-label', text);

    const fragments = splitBy === 'chars'
      ? text.split('')
      : text.split(/(\s+)/).filter(Boolean);

    element.innerHTML = '';

    const spans: HTMLSpanElement[] = fragments.map((fragment) => {
      const span = document.createElement('span');
      span.style.color = ghostColor;
      span.style.display = 'inline-block';
      span.textContent = fragment === ' ' ? '\u00A0' : fragment;
      span.setAttribute('aria-hidden', 'true');
      element.appendChild(span);
      return span;
    });

    const ctx = gsap.context(() => {
      gsap.to(spans, {
        color: revealColor,
        stagger: 0.05,
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub,
        },
      });
    }, element);

    return () => {
      ctx.revert();
      // Safe restore: originalHTML is from the same element's own content, not user input
      element.innerHTML = originalHTML;
      element.removeAttribute('aria-label');
    };
  }, [ref, splitBy, scrub, start, end, ghostColor, revealColor]);
}
