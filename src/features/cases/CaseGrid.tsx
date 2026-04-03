import { useRef } from 'react';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';
import type { CaseStudy } from './data';
import { CaseCard } from './CaseCard';

interface CaseGridProps {
  cases: CaseStudy[];
  locale: string;
}

export function CaseGrid({ cases, locale }: CaseGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, { childSelector: '.case-card', stagger: 0.12 });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
    >
      {cases.map((study) => (
        <div key={study.slug} className="case-card">
          <CaseCard
            study={study}
            locale={locale}
            featured={study.featured}
          />
        </div>
      ))}
    </div>
  );
}
