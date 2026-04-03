import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';
import type { CaseStudy } from './data';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';

interface CaseDetailProps {
  study: CaseStudy;
  locale: Locale;
}

export function CaseDetail({ study, locale }: CaseDetailProps) {
  const translations = t(locale);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useScrollReveal(headerRef);
  useScrollReveal(contentRef, { y: 30, stagger: 0.15, childSelector: '.content-section' });

  return (
    <article className="max-w-4xl mx-auto px-6 py-24">
      {/* Back link */}
      <Link
        to="/$locale/cases"
        params={{ locale }}
        className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors mb-12"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        {translations.cases.backToList}
      </Link>

      {/* Header */}
      <div ref={headerRef}>
        <span className="section-tag mb-4">{study.tag}</span>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mt-4 mb-4">
          {study.title}
        </h1>
        <p className="text-lg text-text-tertiary leading-relaxed mb-8">
          {study.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {study.techs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-md text-xs font-mono bg-bg-surface border border-border-subtle text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics */}
        {study.metrics && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-xl bg-bg-surface border border-border-subtle mb-16">
            {study.metrics.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="gradient-text text-2xl font-heading font-bold">
                  {value}
                </div>
                <div className="text-xs text-text-muted mt-1">{label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div ref={contentRef} className="prose">
        <div className="content-section">
          <h2>{translations.cases.context}</h2>
          <p>{study.content.context}</p>
        </div>
        <div className="content-section">
          <h2>{translations.cases.challenge}</h2>
          <p>{study.content.challenge}</p>
        </div>
        <div className="content-section">
          <h2>{translations.cases.approach}</h2>
          <p>{study.content.approach}</p>
        </div>
        <div className="content-section">
          <h2>{translations.cases.results}</h2>
          <p>{study.content.results}</p>
        </div>
      </div>
    </article>
  );
}
