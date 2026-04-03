import { createFileRoute } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { SectionHeader } from '~/shared/components/SectionHeader';
import { AboutContent } from '~/features/about/AboutContent';

export const Route = createFileRoute('/$locale/about')({
  head: () => ({
    meta: [
      { title: 'About | Felipe Soares' },
      {
        name: 'description',
        content:
          'The journey from curious developer to Staff Engineer & Solution Architect. 10+ years building distributed systems, platforms, and engineering cultures.',
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { locale } = Route.useParams();
  const translations = t(locale as Locale);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-20 sm:py-24 md:py-32">
      <SectionHeader
        tag={translations.sections.about.tag}
        title={translations.sections.about.title}
        description={translations.sections.about.description}
      />
      <AboutContent locale={locale as Locale} />
    </section>
  );
}
