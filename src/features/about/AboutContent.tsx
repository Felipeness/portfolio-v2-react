import { useRef } from 'react';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';
import { ImpactMetrics } from './ImpactMetrics';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';

interface AboutContentProps {
  locale: Locale;
}

export function AboutContent({ locale }: AboutContentProps) {
  const translations = t(locale);
  const bioRef = useRef<HTMLDivElement>(null);
  useScrollReveal(bioRef);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
      <div ref={bioRef}>
        <div className="prose">
          {translations.about.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div>
        <ImpactMetrics locale={locale} />
      </div>
    </div>
  );
}
