import { createFileRoute } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { SectionHeader } from '~/shared/components/SectionHeader';
import { PostGrid } from '~/features/blog/PostGrid';
import { blogPosts } from '~/features/blog/data';

export const Route = createFileRoute('/$locale/blog/')({
  head: () => ({
    meta: [
      { title: 'Blog | Felipe Soares' },
      {
        name: 'description',
        content:
          'Articles on software architecture, distributed systems, TypeScript, Go, and engineering culture by Felipe Soares.',
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const { locale } = Route.useParams();
  const validLocale = locale as Locale;
  const translations = t(validLocale);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <SectionHeader
        tag={translations.sections.blog.tag}
        title={translations.sections.blog.title}
        description={translations.sections.blog.description}
      />
      <PostGrid posts={blogPosts} locale={validLocale} />
    </section>
  );
}
