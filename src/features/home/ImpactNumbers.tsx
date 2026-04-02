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
}) {
  const numberRef = useRef<HTMLSpanElement>(null);
  useCountUp(numberRef, value, {
    suffix,
    prefix: prefix ?? '',
  });

  return (
    <div className="metric-card text-center p-8">
      <span
        ref={numberRef}
        className="gradient-text text-6xl md:text-7xl font-heading font-bold block mb-3"
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

  useScrollReveal(gridRef, {
    childSelector: '.metric-card',
    stagger: 0.15,
    y: 40,
  });

  return (
    <section className="relative z-10 bg-bg-base py-32 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-tag inline-flex">
            {translations.impact.title}
          </span>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {translations.impact.metrics.map((metric) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              prefix={metric.prefix}
              label={metric.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
