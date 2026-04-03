import { useRef } from 'react';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { useCountUp } from '~/shared/animations/useCountUp';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';

interface ImpactNumbersProps {
  locale: Locale;
}

function MetricCard({
  value,
  suffix,
  prefix,
  label,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  index: number;
}) {
  const numberRef = useRef<HTMLSpanElement>(null);
  useCountUp(numberRef, value, {
    suffix,
    prefix: prefix ?? '',
  });

  return (
    <div className="text-center p-4 sm:p-8">
      <span
        ref={numberRef}
        className="gradient-text text-4xl md:text-5xl lg:text-6xl font-heading font-bold block mb-3"
      >
        0
      </span>
      <span className="text-text-tertiary text-sm md:text-base font-mono tracking-wide">
        {label}
      </span>
    </div>
  );
}

export function ImpactNumbers({ locale }: ImpactNumbersProps) {
  const translations = t(locale);
  const gridRef = useRef<HTMLDivElement>(null);

  useScrollReveal(gridRef, { childSelector: ':scope > div', stagger: 0.1 });

  return (
    <section className="bg-bg-base py-20 md:py-32 lg:py-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="section-tag inline-flex">
            {translations.impact.title}
          </span>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12">
          {translations.impact.metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              prefix={metric.prefix}
              label={metric.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
