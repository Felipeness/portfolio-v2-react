import { useRef } from 'react';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';
import { TechBadge } from '~/shared/components/TechBadge';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';

const projectUrls: Record<string, { url: string; stars?: string }> = {
  'Node.js': { url: 'https://github.com/nodejs/node', stars: '110K+' },
  'Next.js': { url: 'https://github.com/vercel/next.js', stars: '130K+' },
  'React': { url: 'https://github.com/facebook/react', stars: '230K+' },
  'Prisma': { url: 'https://github.com/prisma/prisma', stars: '40K+' },
  'opensource-guide': { url: 'https://github.com/github/opensource.guide', stars: '14K+' },
  'otel-dev': { url: 'https://github.com/felipeness/otel-dev' },
};

interface OssGridProps {
  locale: Locale;
}

export function OssGrid({ locale }: OssGridProps) {
  const translations = t(locale);
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, { childSelector: '.oss-card', stagger: 0.1 });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {translations.oss.projects.map((project) => {
        const meta = projectUrls[project.name];
        return (
          <a
            key={project.name}
            href={meta?.url ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="oss-card group block p-6 rounded-2xl bg-bg-surface border border-border-subtle hover:border-orange/30 hover:shadow-[0_0_20px_rgba(229,101,0,0.08)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-heading font-bold text-text-primary group-hover:text-orange transition-colors">
                {project.name}
              </h3>
              {meta?.stars && (
                <span className="flex items-center gap-1 text-xs text-text-muted font-mono">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                  </svg>
                  {meta.stars}
                </span>
              )}
            </div>
            <p className="text-sm text-text-tertiary leading-relaxed mb-4">
              {project.description}
            </p>
            <TechBadge variant={project.role === 'Author' ? 'primary' : 'secondary'}>
              {project.role}
            </TechBadge>
          </a>
        );
      })}
    </div>
  );
}
