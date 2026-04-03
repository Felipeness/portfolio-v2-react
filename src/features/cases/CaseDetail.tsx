import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';
import type { CaseStudy } from './data';
import { TechBadge } from '~/shared/components/TechBadge';
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
    <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-20 sm:py-24 md:py-32">
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
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mt-4 mb-4">
          {study.title}
        </h1>
        <p className="text-lg text-text-tertiary leading-relaxed mb-8">
          {study.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {study.techs.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>

        {/* Links */}
        {(study.githubUrl || study.liveUrl) && (
          <div className="flex flex-wrap gap-3 mb-8">
            {study.githubUrl && (
              <a
                href={study.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border-default text-sm text-text-secondary hover:border-orange/50 hover:text-orange transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
            )}
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange text-white text-sm font-medium hover:bg-orange-hover transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Live Demo
              </a>
            )}
          </div>
        )}

        {/* Metrics */}
        {study.metrics && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl bg-bg-surface border border-border-subtle mb-12 sm:mb-16">
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
