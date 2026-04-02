import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';

interface ContactCTAProps {
  locale: Locale;
}

export function ContactCTA({ locale }: ContactCTAProps) {
  const translations = t(locale);
  const sectionRef = useRef<HTMLElement>(null);

  useScrollReveal(sectionRef, { y: 30 });

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-bg-base py-32 md:py-40"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-text-primary mb-10 leading-tight">
          {translations.contactCTA.title}
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/$locale/contact"
            params={{ locale }}
            className="px-8 py-3.5 rounded-xl bg-orange text-white font-medium text-sm hover:bg-orange-hover transition-colors shadow-lg shadow-orange/20"
          >
            {translations.contactCTA.primary} &rarr;
          </Link>
          <Link
            to="/$locale/cases"
            params={{ locale }}
            className="px-8 py-3.5 rounded-xl border border-border-default text-text-secondary font-medium text-sm hover:bg-bg-surface hover:border-border-subtle transition-colors"
          >
            {translations.contactCTA.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
