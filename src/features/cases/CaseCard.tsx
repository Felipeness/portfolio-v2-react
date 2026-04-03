import { Link } from '@tanstack/react-router';
import type { CaseStudy } from './data';
import { TechBadge } from '~/shared/components/TechBadge';

interface CaseCardProps {
  study: CaseStudy;
  locale: string;
  featured?: boolean;
}

export function CaseCard({ study, locale, featured = false }: CaseCardProps) {
  return (
    <Link
      to="/$locale/cases/$slug"
      params={{ locale, slug: study.slug }}
      className={`
        group relative block rounded-2xl bg-bg-surface border border-border-subtle
        hover:border-orange/30 hover:shadow-[0_0_20px_rgba(229,101,0,0.08)]
        hover:-translate-y-0.5 transition-all duration-300
        overflow-hidden
        ${featured ? 'lg:col-span-2 lg:row-span-2' : ''}
      `}
    >
      {/* Gradient accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange via-orange-hover to-orange-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className={`p-6 ${featured ? 'lg:p-8' : ''}`}>
        {/* Tag */}
        <span className="inline-block text-xs font-mono text-text-muted uppercase tracking-wider mb-3">
          {study.tag}
        </span>

        {/* Title */}
        <h3
          className={`font-heading font-bold text-text-primary mb-3 group-hover:text-orange transition-colors ${
            featured ? 'text-2xl lg:text-3xl' : 'text-xl'
          }`}
        >
          {study.title}
        </h3>

        {/* Description */}
        <p className={`text-text-tertiary leading-relaxed mb-6 ${featured ? 'text-base' : 'text-sm'}`}>
          {study.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {study.techs.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>

        {/* Metrics row */}
        {study.metrics && (
          <div className={`grid gap-4 pt-4 border-t border-border-subtle ${featured ? 'grid-cols-4' : 'grid-cols-2'}`}>
            {study.metrics.map(({ value, label }) => (
              <div key={label}>
                <div className="gradient-text text-lg font-heading font-bold">
                  {value}
                </div>
                <div className="text-xs text-text-muted">{label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
