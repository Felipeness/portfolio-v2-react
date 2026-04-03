import { createFileRoute, notFound } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { getCaseBySlug } from '~/features/cases/data';
import { CaseDetail } from '~/features/cases/CaseDetail';

export const Route = createFileRoute('/$locale/cases/$slug')({
  head: ({ params }) => {
    const study = getCaseBySlug(params.slug);
    return {
      meta: [
        { title: study ? `${study.title} | Felipe Soares` : 'Case Study | Felipe Soares' },
        {
          name: 'description',
          content: study?.description ?? 'A technical case study by Felipe Soares.',
        },
      ],
    };
  },
  component: CaseDetailPage,
});

function CaseDetailPage() {
  const { locale, slug } = Route.useParams();
  const study = getCaseBySlug(slug);

  if (!study) {
    throw notFound();
  }

  return <CaseDetail study={study} locale={locale as Locale} />;
}
