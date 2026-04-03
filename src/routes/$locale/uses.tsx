import { createFileRoute } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { SectionHeader } from '~/shared/components/SectionHeader';
import { UsesGrid } from '~/features/uses/UsesGrid';

export const Route = createFileRoute('/$locale/uses')({
  head: () => ({
    meta: [
      { title: 'Uses | Felipe Soares' },
      {
        name: 'description',
        content:
          'Tools, hardware, and software I use daily for development, architecture, and productivity.',
      },
    ],
  }),
  component: UsesPage,
});

function UsesPage() {
  const { locale } = Route.useParams();
  const translations = t(locale as Locale);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <SectionHeader
        tag={translations.sections.uses.tag}
        title={translations.sections.uses.title}
        description={translations.sections.uses.description}
      />
      <UsesGrid />
    </section>
  );
}
