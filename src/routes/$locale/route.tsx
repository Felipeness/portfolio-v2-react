import { useState, useEffect } from 'react';
import { createFileRoute, Outlet, redirect, useLocation, useMatches } from '@tanstack/react-router';
import { isValidLocale } from '~/shared/types/locale';
import type { Locale } from '~/shared/types/locale';
import { Header } from '~/shared/components/Header';
import { Footer } from '~/shared/components/Footer';
import { CommandPalette } from '~/shared/components/CommandPalette';
import { ScrollProgress } from '~/shared/components/ScrollProgress';
import { CustomCursor } from '~/shared/components/CustomCursor';

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
  const pathname = useLocation({ select: (l) => l.pathname });
  const matches = useMatches();
  const routeKey = matches[matches.length - 1]?.id ?? '';

  useEffect(() => {
    document.documentElement.lang = validLocale === 'pt-br' ? 'pt-BR' : 'en';
  }, [validLocale]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById('main-content')?.focus();
  }, [pathname]);

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Header
        locale={validLocale}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />
      <main id="main-content" key={routeKey} tabIndex={-1} className="page-transition outline-none">
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
