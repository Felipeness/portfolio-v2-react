import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';
import { blogPosts } from '~/features/blog/data';
import { TechBadge } from '~/shared/components/TechBadge';

interface RecentWritingProps {
  locale: Locale;
}

export function RecentWriting({ locale }: RecentWritingProps) {
  const translations = t(locale);
  const gridRef = useRef<HTMLDivElement>(null);

  useScrollReveal(gridRef, {
    childSelector: '.post-card',
    stagger: 0.12,
    y: 30,
  });

  const recentPosts = [...blogPosts]
    .filter((p) => p.locale === locale || p.locale === 'en')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <section className="relative z-10 bg-bg-base py-32 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <span className="section-tag inline-flex">
            {translations.recentWriting.title}
          </span>
          <Link
            to="/$locale/blog"
            params={{ locale }}
            className="text-sm text-text-muted hover:text-orange transition-colors font-mono"
          >
            {translations.recentWriting.viewAll} &rarr;
          </Link>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              to="/$locale/blog/$slug"
              params={{ locale, slug: post.slug }}
              className="post-card group block rounded-2xl bg-bg-surface border border-border-subtle hover:border-orange/30 hover:shadow-[0_0_20px_rgba(229,101,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-3 text-xs text-text-muted font-mono mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(
                    locale === 'pt-br' ? 'pt-BR' : 'en-US',
                    { year: 'numeric', month: 'short', day: 'numeric' },
                  )}
                </time>
                <span className="w-1 h-1 rounded-full bg-text-muted" />
                <span>{post.readingTime}</span>
              </div>

              <h3 className="font-heading text-lg font-bold text-text-primary mb-3 group-hover:text-orange transition-colors">
                {post.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <TechBadge key={tag} variant="secondary">{tag}</TechBadge>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
