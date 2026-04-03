import { Link } from '@tanstack/react-router';
import type { BlogPost } from './data';
import { TechBadge } from '~/shared/components/TechBadge';

interface PostCardProps {
  post: BlogPost;
  locale: string;
}

export function PostCard({ post, locale }: PostCardProps) {
  return (
    <Link
      to="/$locale/blog/$slug"
      params={{ locale, slug: post.slug }}
      className="group block rounded-2xl bg-bg-surface border border-border-subtle hover:border-orange/30 hover:shadow-[0_0_20px_rgba(229,101,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
    >
      <div className="p-6">
        {/* Date + Reading Time */}
        <div className="flex items-center gap-3 text-xs text-text-muted font-mono mb-3">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
          <span className="w-1 h-1 rounded-full bg-text-muted" />
          <span>{post.readingTime}</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl font-bold text-text-primary mb-3 group-hover:text-orange transition-colors">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-tertiary leading-relaxed mb-4">
          {post.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <TechBadge key={tag} variant="secondary">{tag}</TechBadge>
          ))}
        </div>
      </div>
    </Link>
  );
}
