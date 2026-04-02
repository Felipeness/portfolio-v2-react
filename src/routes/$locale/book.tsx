import { createFileRoute } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { BookHero } from '~/features/book/BookHero';

export const Route = createFileRoute('/$locale/book')({
  component: BookPage,
});

function BookPage() {
  const { locale } = Route.useParams();
  return <BookHero locale={locale as Locale} />;
}
