import { useRef } from 'react';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';

interface WhatIDoProps {
  locale: Locale;
}

export function WhatIDo({ locale }: WhatIDoProps) {
  const translations = t(locale);
  const capabilitiesRef = useRef<HTMLDivElement>(null);

  useScrollReveal(capabilitiesRef, { childSelector: 'p', stagger: 0.12 });

  return (
    <section className="py-24 md:py-32 bg-bg-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="section-tag mb-12 inline-flex">
          {translations.whatIDo.title}
        </span>

        <div ref={capabilitiesRef} className="mt-8 space-y-8">
          {translations.whatIDo.capabilities.map((capability) => (
            <p
              key={capability}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary leading-tight"
            >
              {capability}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
