import { useState, useEffect } from 'react';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { isValidLocale } from '~/shared/types/locale';
import type { Locale } from '~/shared/types/locale';
import { Header } from '~/shared/components/Header';
import { Footer } from '~/shared/components/Footer';
import { CommandPalette } from '~/shared/components/CommandPalette';

export const Route = createFileRoute('/$locale')({
  beforeLoad: ({ params }) => {
    if (!isValidLocale(params.locale)) {
      throw redirect({ to: '/$locale', params: { locale: 'en' } });
    }
  },
  component: LocaleLayout,
});

function LocaleLayout() {
  const { locale } = Route.useParams();
  const validLocale = locale as Locale;
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = validLocale === 'pt-br' ? 'pt-BR' : 'en';
  }, [validLocale]);

  return (
    <>
      <Header
        locale={validLocale}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />
      <main>
        <Outlet />
      </main>
      <Footer locale={validLocale} />
      <CommandPalette
        locale={validLocale}
        open={commandPaletteOpen}
        onOpenChange={setCommandPaletteOpen}
      />
    </>
  );
}
