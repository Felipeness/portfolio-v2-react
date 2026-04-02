import { useRef } from 'react';
import { useCountUp } from '~/shared/animations/useCountUp';

interface Metric {
  value: number;
  suffix: string;
  label: string;
}

const metrics: Metric[] = [
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 200, suffix: '+', label: 'Developers Mentored' },
  { value: 50, suffix: 'M+', label: 'Users Impacted' },
  { value: 15, suffix: '+', label: 'Systems Architected' },
];

export function ImpactMetrics() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {metrics.map((metric) => (
        <MetricCard key={metric.label} metric={metric} />
      ))}
    </div>
  );
}

function MetricCard({ metric }: { metric: Metric }) {
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
