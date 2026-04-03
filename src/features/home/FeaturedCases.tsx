import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { caseStudies } from '~/features/cases/data';
import { TechBadge } from '~/shared/components/TechBadge';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';

interface FeaturedCasesProps {
  locale: Locale;
}

export function FeaturedCases({ locale }: FeaturedCasesProps) {
  const translations = t(locale);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useScrollReveal(headerRef);
  useScrollReveal(gridRef, { childSelector: 'a', stagger: 0.1 });

  const topCases = caseStudies
    .filter((c) => c.locale === locale)
    .slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="text-center mb-16">
          <span className="section-tag mb-4 inline-flex">
            {translations.sections.cases.tag}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-text-primary mt-4">
            {translations.sections.cases.title}
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topCases.map((study) => (
            <Link
              key={study.slug}
              to="/$locale/cases/$slug"
              params={{ locale, slug: study.slug }}
              className="group rounded-2xl bg-bg-surface border border-border-subtle p-6 flex flex-col justify-between min-h-[320px] hover:border-orange/30 hover:shadow-[0_0_20px_rgba(229,101,0,0.08)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div>
                <span className="section-tag mb-4 inline-flex">
                  {study.tag}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-primary mt-3 mb-3 group-hover:text-orange transition-colors">
                  {study.title}
                </h3>
                <p className="text-text-tertiary text-sm leading-relaxed mb-6 line-clamp-3">
                  {study.description}
                </p>
              </div>

              <div>
                {study.metrics && study.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                    {study.metrics.slice(0, 3).map((metric) => (
                      <span key={metric.label} className="text-xs text-text-muted">
                        <span className="font-semibold text-orange">{metric.value}</span>{' '}
                        {metric.label}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {study.techs.slice(0, 5).map((tech) => (
                    <TechBadge key={tech}>{tech}</TechBadge>
                  ))}
                </div>

                <span className="text-sm font-medium text-orange group-hover:underline">
                  {translations.cases.viewCase}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
