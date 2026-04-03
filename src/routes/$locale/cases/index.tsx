import { createFileRoute } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { SectionHeader } from '~/shared/components/SectionHeader';
import { CaseGrid } from '~/features/cases/CaseGrid';
import { caseStudies } from '~/features/cases/data';

export const Route = createFileRoute('/$locale/cases/')({
  head: () => ({
    meta: [
      { title: 'Case Studies | Felipe Soares' },
      {
        name: 'description',
        content:
          'Technical case studies on distributed systems, platform engineering, and architecture. Real-world problems, trade-offs, and measurable outcomes.',
      },
    ],
  }),
  component: CasesPage,
});

function CasesPage() {
  const { locale } = Route.useParams();
  const validLocale = locale as Locale;
  const translations = t(validLocale);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <SectionHeader
        tag={translations.sections.cases.tag}
        title={translations.sections.cases.title}
        description={translations.sections.cases.description}
      />
      <CaseGrid cases={caseStudies} locale={validLocale} />
    </section>
  );
}
