import { useRef } from 'react';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';
import type { BlogPost } from './data';
import { PostCard } from './PostCard';

interface PostGridProps {
  posts: BlogPost[];
  locale: string;
}

export function PostGrid({ posts, locale }: PostGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, { childSelector: '.post-card', stagger: 0.1 });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {posts.map((post) => (
        <div key={post.slug} className="post-card">
          <PostCard post={post} locale={locale} />
        </div>
      ))}
    </div>
  );
}
