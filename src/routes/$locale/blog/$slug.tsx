import { createFileRoute, notFound } from '@tanstack/react-router';
import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { getPostBySlug } from '~/features/blog/data';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';

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

function BlogDetailPage() {
  const { locale, slug } = Route.useParams();
  const post = getPostBySlug(slug);
  const contentRef = useRef<HTMLDivElement>(null);

  useScrollReveal(contentRef, { y: 20 });

  if (!post) {
    throw notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-24">
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
        Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 text-xs text-text-muted font-mono mb-4">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="w-1 h-1 rounded-full bg-text-muted" />
          <span>{post.readingTime}</span>
        </div>

        <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">
          {post.title}
        </h1>

        <p className="text-lg text-text-tertiary leading-relaxed">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-md text-xs font-mono bg-bg-surface border border-border-subtle text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Content */}
      <div ref={contentRef} className="prose">
        {post.content.split('\n\n').map((paragraph, i) => {
          if (paragraph.startsWith('## ')) {
            return (
              <h2 key={i}>{paragraph.replace('## ', '')}</h2>
            );
          }
          if (paragraph.startsWith('**')) {
            return (
              <p key={i}>
                <strong>{paragraph.replace(/\*\*/g, '')}</strong>
              </p>
            );
          }
          if (paragraph.startsWith('- ')) {
            const items = paragraph.split('\n').filter(Boolean);
            return (
              <ul key={i}>
                {items.map((item, j) => (
                  <li key={j}>{item.replace('- ', '')}</li>
                ))}
              </ul>
            );
          }
          if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ')) {
            const items = paragraph.split('\n').filter(Boolean);
            return (
              <ol key={i}>
                {items.map((item, j) => (
                  <li key={j}>{item.replace(/^\d+\.\s/, '')}</li>
                ))}
              </ol>
            );
          }
          return <p key={i}>{paragraph}</p>;
        })}
      </div>
    </article>
  );
}
