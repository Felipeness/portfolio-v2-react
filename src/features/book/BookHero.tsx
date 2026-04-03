import { useRef, useLayoutEffect } from 'react';
import { gsap } from '~/shared/animations/gsap-setup';
import { prefersReducedMotion } from '~/shared/utils/prefersReducedMotion';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';

interface BookHeroProps {
  locale: Locale;
}

export function BookHero({ locale }: BookHeroProps) {
  const translations = t(locale);
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);

  useScrollReveal(textRef);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (prefersReducedMotion()) return;
    if (!bookRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(bookRef.current, {
        scale: 0.9,
        rotateY: 8,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Book cover */}
        <div
          ref={bookRef}
          className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl"
          style={{ perspective: '1000px' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange via-brand-red to-brand-blue rounded-2xl flex items-center justify-center p-8">
            <div className="text-center">
              <h3 className="font-heading text-3xl font-bold text-white mb-4">
                The Whole and the Part
              </h3>
              <div className="w-16 h-[2px] bg-white/40 mx-auto mb-4" />
              <p className="text-white/80 text-sm font-body">
                Felipe Soares
              </p>
              <p className="text-white/60 text-xs font-mono mt-2">
                Holonomic Architecture
              </p>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div ref={textRef}>
          <span className="section-tag mb-4">{translations.sections.book.tag}</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-4 mb-6">
            {translations.sections.book.title}
          </h2>
          <p className="text-lg text-text-tertiary leading-relaxed mb-8">
            {translations.sections.book.description}
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-orange mt-2 shrink-0" />
              <p className="text-text-secondary">
                How Arthur Koestler's holon theory applies to software systems
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-orange mt-2 shrink-0" />
              <p className="text-text-secondary">
                Self-Contained Systems as the natural unit of software delivery
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-orange mt-2 shrink-0" />
              <p className="text-text-secondary">
                Practical patterns for teams building platforms that evolve
              </p>
            </div>
          </div>

          <a
            href="https://felipeness.dev/book"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange text-white font-medium text-sm hover:bg-orange-hover transition-colors"
          >
            Read More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
