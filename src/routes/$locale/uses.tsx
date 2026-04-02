import { createFileRoute } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { SectionHeader } from '~/shared/components/SectionHeader';
import { UsesGrid } from '~/features/uses/UsesGrid';

export const Route = createFileRoute('/$locale/uses')({
  component: UsesPage,
});

function UsesPage() {
  const { locale } = Route.useParams();
  const translations = t(locale as Locale);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <SectionHeader
        tag={translations.sections.uses.tag}
        title={translations.sections.uses.title}
        description={translations.sections.uses.description}
      />
      <UsesGrid />
    </section>
  );
}
