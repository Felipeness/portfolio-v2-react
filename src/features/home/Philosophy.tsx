import { useRef, useLayoutEffect } from 'react';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { gsap, ScrollTrigger } from '~/shared/animations/gsap-setup';

interface PhilosophyProps {
  locale: Locale;
}

export function Philosophy({ locale }: PhilosophyProps) {
  const translations = t(locale);
  const textRef = useRef<HTMLParagraphElement>(null);
  const originalTextRef = useRef<string>('');

  useLayoutEffect(() => {
    if (!textRef.current || typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const element = textRef.current;
    const text = element.textContent || '';
    originalTextRef.current = text;
    element.setAttribute('aria-label', text);

    const words = text.split(/(\s+)/).filter(Boolean);

    // Clear using DOM API
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }

    const spans = words.map((word) => {
      const span = document.createElement('span');
      span.style.color = 'rgba(255,255,255,0.15)';
      span.style.display = 'inline';
      span.textContent = word === ' ' ? '\u00A0' : word;
      span.setAttribute('aria-hidden', 'true');
      element.appendChild(span);
      return span;
    });

    const ctx = gsap.context(() => {
      gsap.to(spans, {
        color: 'rgba(255,255,255,0.95)',
        stagger: 0.03,
        scrollTrigger: {
          trigger: element,
          start: 'top 75%',
          end: 'top 25%',
          scrub: 0.3,
        },
      });
    }, element);

    return () => {
      ctx.revert();
      // Restore original text content safely
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      element.textContent = originalTextRef.current;
      element.removeAttribute('aria-label');
    };
  }, [locale]);

  return (
    <section className="relative z-10 bg-bg-base min-h-screen flex items-center justify-center py-32">
      <div className="max-w-4xl mx-auto px-6">
        <p
          ref={textRef}
          className="text-3xl md:text-5xl font-heading font-bold leading-tight"
        >
          {translations.philosophy.text}
        </p>
      </div>
    </section>
  );
}
