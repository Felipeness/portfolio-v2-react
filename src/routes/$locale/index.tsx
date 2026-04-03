import { createFileRoute } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { Hero } from '~/features/home/Hero';
import { WhatIDo } from '~/features/home/WhatIDo';
import { FeaturedCases } from '~/features/home/FeaturedCases';
import { ImpactNumbers } from '~/features/home/ImpactNumbers';
import { Philosophy } from '~/features/home/Philosophy';
import { RecentWriting } from '~/features/home/RecentWriting';
import { ContactCTA } from '~/features/home/ContactCTA';

export const Route = createFileRoute('/$locale/')({
  head: () => ({
    meta: [
      { title: 'Felipe Soares | Staff Engineer & Solution Architect' },
      {
        name: 'description',
        content:
          'Portfolio of Felipe Soares — building high-impact distributed systems, developer platforms, and engineering cultures with 10+ years of experience.',
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { locale } = Route.useParams();
  const validLocale = locale as Locale;

  return (
    <>
      <Hero locale={validLocale} />
      <WhatIDo locale={validLocale} />
      <FeaturedCases locale={validLocale} />
      <ImpactNumbers locale={validLocale} />
      <Philosophy locale={validLocale} />
      <RecentWriting locale={validLocale} />
      <ContactCTA locale={validLocale} />
    </>
  );
}
