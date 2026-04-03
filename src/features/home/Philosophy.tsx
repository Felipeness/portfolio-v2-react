import type { Locale } from '~/shared/types/locale';
import type { ReactNode } from 'react';
import { t } from '~/shared/i18n/utils';

const HIGHLIGHTED_PHRASES: Record<string, true> = {
  'TypeScript and Go': true,
  'TypeScript e Go': true,
  'good architecture': true,
  'boa arquitetura': true,
};

function highlightPhrases(text: string): ReactNode[] {
  const phrases = Object.keys(HIGHLIGHTED_PHRASES);
  const regex = new RegExp(`(${phrases.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');

  const parts = text.split(regex);

  return parts.map((part, i) =>
    part in HIGHLIGHTED_PHRASES ? (
      <span key={i} className="text-text-primary">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

interface PhilosophyProps {
  locale: Locale;
}

export function Philosophy({ locale }: PhilosophyProps) {
  const translations = t(locale);

  return (
    <section className="py-24 md:py-40 bg-bg-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-medium text-text-tertiary leading-relaxed scroll-animate">
          {highlightPhrases(translations.philosophy.text)}
        </p>
      </div>
    </section>
  );
}
