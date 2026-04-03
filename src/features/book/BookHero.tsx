import { useRef } from 'react';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';

interface BookHeroProps {
  locale: Locale;
}

export function BookHero({ locale }: BookHeroProps) {
  const translations = t(locale);
  const textRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);

  useScrollReveal(textRef);
  useScrollReveal(bookRef);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-20 sm:py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 md:gap-16 items-center">
        {/* Book cover */}
        <div
          ref={bookRef}
          className="w-full max-w-[280px] mx-auto md:max-w-none md:mx-0 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="h-full bg-gradient-to-br from-orange via-brand-red to-brand-blue rounded-2xl flex items-center justify-center p-8">
            <div className="text-center">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                {translations.book.coverTitle}
              </h3>
              <div className="w-16 h-[2px] bg-white/40 mx-auto mb-4" />
              <p className="text-white/80 text-sm font-body">
                {translations.book.coverAuthor}
              </p>
              <p className="text-white/60 text-xs font-mono mt-2">
                {translations.book.coverSubtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div ref={textRef} className="min-w-0">
          <span className="section-tag mb-4">{translations.sections.book.tag}</span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mt-4 mb-6">
            {translations.sections.book.title}
          </h2>
          <p className="text-base md:text-lg text-text-tertiary leading-relaxed mb-8">
            {translations.sections.book.description}
          </p>

          <div className="space-y-4 mb-8">
            {translations.book.bulletPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange mt-2 shrink-0" />
                <p className="text-sm md:text-base text-text-secondary">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <a
            href="https://github.com/Felipeness/the-whole-and-the-part"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange text-white font-medium text-sm hover:bg-orange-hover transition-colors"
          >
            {translations.book.readMore}
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
