import { createFileRoute } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { Hero } from '~/features/home/Hero';

export const Route = createFileRoute('/$locale/')({
  component: HomePage,
});

function HomePage() {
  const { locale } = Route.useParams();
  return <Hero locale={locale as Locale} />;
}
