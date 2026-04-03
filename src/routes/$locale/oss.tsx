import { createFileRoute } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { SectionHeader } from '~/shared/components/SectionHeader';
import { OssGrid } from '~/features/oss/OssGrid';

export const Route = createFileRoute('/$locale/oss')({
  component: OssPage,
});

function OssPage() {
  const { locale } = Route.useParams();
  const translations = t(locale as Locale);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <SectionHeader
        tag={translations.sections.oss.tag}
        title={translations.sections.oss.title}
        description={translations.sections.oss.description}
      />
      <OssGrid />
    </section>
  );
}
