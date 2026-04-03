import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';

interface WhatIDoProps {
  locale: Locale;
}

export function WhatIDo({ locale }: WhatIDoProps) {
  const translations = t(locale);

  return (
    <section className="py-24 md:py-32 bg-bg-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="section-tag mb-12 inline-flex scroll-animate">
          {translations.whatIDo.title}
        </span>

        <div className="mt-8 space-y-8">
          {translations.whatIDo.capabilities.map((capability, i) => (
            <p
              key={capability}
              className="scroll-animate text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary leading-tight"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {capability}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
