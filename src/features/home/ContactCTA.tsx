import { Link } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';

interface ContactCTAProps {
  locale: Locale;
}

export function ContactCTA({ locale }: ContactCTAProps) {
  const translations = t(locale);

  return (
    <section className="bg-bg-base py-20 md:py-32 lg:py-40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center scroll-animate">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-10 leading-tight">
          {translations.contactCTA.title}
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/$locale/contact"
            params={{ locale }}
            className="px-8 py-3.5 rounded-xl bg-orange text-white font-medium text-sm hover:bg-orange-hover transition-colors shadow-lg shadow-orange/20 inline-block"
          >
            {translations.contactCTA.primary} &rarr;
          </Link>
          <Link
            to="/$locale/cases"
            params={{ locale }}
            className="px-8 py-3.5 rounded-xl border border-border-default text-text-secondary font-medium text-sm hover:bg-bg-surface hover:border-border-subtle transition-colors inline-block"
          >
            {translations.contactCTA.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
