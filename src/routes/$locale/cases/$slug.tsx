import { createFileRoute, notFound } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { getCaseBySlug } from '~/features/cases/data';
import { CaseDetail } from '~/features/cases/CaseDetail';

export const Route = createFileRoute('/$locale/cases/$slug')({
  component: CaseDetailPage,
});

function CaseDetailPage() {
  const { locale, slug } = Route.useParams();
  const validLocale = locale as Locale;
  const study = getCaseBySlug(slug, validLocale);

  if (!study) {
    throw notFound();
  }

  return <CaseDetail study={study} locale={validLocale} />;
}
