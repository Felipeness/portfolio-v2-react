import { Link } from '@tanstack/react-router';
import type { CaseStudy } from './data';
import { TechBadge } from '~/shared/components/TechBadge';

interface CaseCardProps {
  study: CaseStudy;
  locale: string;
}

export function CaseCard({ study, locale }: CaseCardProps) {
  return (
    <Link
      to="/$locale/cases/$slug"
      params={{ locale, slug: study.slug }}
      className="group relative block rounded-xl bg-bg-surface border border-border-subtle hover:border-orange/30 hover:shadow-[0_0_20px_rgba(229,101,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden h-full flex flex-col"
    >
      {/* Gradient accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange via-orange-hover to-orange-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-5 flex flex-col flex-1">
        {/* Tag */}
        <span className="inline-block text-[10px] font-mono text-orange uppercase tracking-wider mb-2">
          ● {study.tag}
        </span>

        {/* Title */}
        <h3 className="font-heading font-bold text-lg text-text-primary mb-2 line-clamp-2 group-hover:text-orange transition-colors">
          {study.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-tertiary leading-relaxed line-clamp-2 flex-1 mb-4">
          {study.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 max-h-[28px] overflow-hidden">
          {study.techs.slice(0, 4).map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
      </div>
    </Link>
  );
}
