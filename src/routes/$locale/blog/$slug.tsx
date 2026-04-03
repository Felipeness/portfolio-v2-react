import { createFileRoute, notFound } from '@tanstack/react-router';
import { useRef, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { getPostBySlug } from '~/features/blog/data';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';
import { TechBadge } from '~/shared/components/TechBadge';

export const Route = createFileRoute('/$locale/blog/$slug')({
  head: ({ params }) => {
    const post = getPostBySlug(params.slug);
    return {
      meta: [
        { title: post ? `${post.title} | Felipe Soares` : 'Blog Post | Felipe Soares' },
        {
          name: 'description',
          content: post?.description ?? 'A blog post by Felipe Soares.',
        },
      ],
    };
  },
  component: BlogDetailPage,
});

function renderInline(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Bold: **text**
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    // Inline code: `text`
    const codeMatch = remaining.match(/`(.+?)`/);

    const matches = [
      boldMatch ? { type: 'bold' as const, index: boldMatch.index!, match: boldMatch } : null,
      codeMatch ? { type: 'code' as const, index: codeMatch.index!, match: codeMatch } : null,
    ].filter(Boolean).sort((a, b) => a!.index - b!.index);

    if (matches.length === 0) {
      parts.push(remaining);
      break;
    }

    const first = matches[0]!;
    if (first.index > 0) {
      parts.push(remaining.slice(0, first.index));
    }

    if (first.type === 'bold') {
      parts.push(<strong key={key++}>{first.match[1]}</strong>);
    } else {
      parts.push(<code key={key++}>{first.match[1]}</code>);
    }

    remaining = remaining.slice(first.index + first.match[0].length);
  }

  return parts.length === 1 ? parts[0] : parts;
}

function BlogDetailPage() {
  const { locale, slug } = Route.useParams();
  const validLocale = locale as Locale;
  const translations = t(validLocale);
  const post = getPostBySlug(slug, validLocale);
  const contentRef = useRef<HTMLDivElement>(null);

  useScrollReveal(contentRef, { y: 20 });

  if (!post) {
    throw notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-20 sm:py-24 md:py-32">
      {/* Back link */}
      <Link
        to="/$locale/blog"
        params={{ locale }}
        className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors mb-12"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        {translations.blog.backToList}
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 text-xs text-text-muted font-mono mb-4">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString(
              validLocale === 'pt-br' ? 'pt-BR' : 'en-US',
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              },
            )}
          </time>
          <span className="w-1 h-1 rounded-full bg-text-muted" />
          <span>{post.readingTime}</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
          {post.title}
        </h1>

        <p className="text-lg text-text-tertiary leading-relaxed">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {post.tags.map((tag) => (
            <TechBadge key={tag} variant="secondary">{tag}</TechBadge>
          ))}
        </div>
      </header>

      {/* Content */}
      <div ref={contentRef} className="prose">
        {post.content.split('\n\n').map((block, i) => {
          if (block.startsWith('## ')) {
            return <h2 key={i}>{block.slice(3)}</h2>;
          }

          if (block.startsWith('- ')) {
            const items = block.split('\n').filter(Boolean);
            return (
              <ul key={i}>
                {items.map((item, j) => (
                  <li key={j}>{renderInline(item.replace(/^- /, ''))}</li>
                ))}
              </ul>
            );
          }

          if (/^\d+\.\s/.test(block)) {
            const items = block.split('\n').filter(Boolean);
            return (
              <ol key={i}>
                {items.map((item, j) => (
                  <li key={j}>{renderInline(item.replace(/^\d+\.\s/, ''))}</li>
                ))}
              </ol>
            );
          }

          return <p key={i}>{renderInline(block)}</p>;
        })}
      </div>
    </article>
  );
}
