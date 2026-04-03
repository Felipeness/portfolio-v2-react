import { createFileRoute } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { SectionHeader } from '~/shared/components/SectionHeader';
import { OssGrid } from '~/features/oss/OssGrid';

export const Route = createFileRoute('/$locale/oss')({
  head: () => ({
    meta: [
      { title: 'Open Source Contributions | Felipe Soares' },
      {
        name: 'description',
        content:
          'Open source contributions to Node.js, React, and the broader ecosystem. Contributing to the tools we all depend on.',
      },
    ],
  }),
  component: OssPage,
});

function OssPage() {
  const { locale } = Route.useParams();
  const translations = t(locale as Locale);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <SectionHeader
        tag={translations.sections.oss.tag}
        title={translations.sections.oss.title}
        description={translations.sections.oss.description}
      />
      <OssGrid />
    </section>
  );
}
