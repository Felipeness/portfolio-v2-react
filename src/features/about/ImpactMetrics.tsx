import { useRef } from 'react';
import { useCountUp } from '~/shared/animations/useCountUp';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';

interface ImpactMetricsProps {
  locale: Locale;
}

export function ImpactMetrics({ locale }: ImpactMetricsProps) {
  const translations = t(locale);

  return (
    <div className="grid grid-cols-2 gap-6">
      {translations.about.impactMetrics.map((metric) => (
        <MetricCard key={metric.label} metric={metric} />
      ))}
    </div>
  );
}

function MetricCard({ metric }: { metric: { value: number; suffix: string; label: string } }) {
  const valueRef = useRef<HTMLSpanElement>(null);
  useCountUp(valueRef, metric.value, { suffix: metric.suffix });

  return (
    <div className="p-6 rounded-xl bg-bg-surface border border-border-subtle text-center">
      <span
        ref={valueRef}
        className="gradient-text text-3xl font-heading font-bold block mb-2"
      >
        0{metric.suffix}
      </span>
      <span className="text-sm text-text-muted">{metric.label}</span>
    </div>
  );
}
