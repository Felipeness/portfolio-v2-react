import { createFileRoute } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { BookHero } from '~/features/book/BookHero';

export const Route = createFileRoute('/$locale/book')({
  head: () => ({
    meta: [
      { title: 'The Whole and the Part | Felipe Soares' },
      {
        name: 'description',
        content:
          'A book about holonomic architecture — seeing software through the lens of living systems. By Felipe Soares.',
      },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const { locale } = Route.useParams();
  return <BookHero locale={locale as Locale} />;
}
