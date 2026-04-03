import { useState, useEffect } from 'react';
import {
  createFileRoute,
  Outlet,
  redirect,
  useLocation,
  useMatches,
} from '@tanstack/react-router';
import { isValidLocale } from '~/shared/types/locale';
import type { Locale } from '~/shared/types/locale';
import { Header } from '~/shared/components/Header';
import { Footer } from '~/shared/components/Footer';
import { BottomNav } from '~/shared/components/BottomNav';
import { CommandPalette } from '~/shared/components/CommandPalette';
import { ScrollProgress } from '~/shared/components/ScrollProgress';

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
      <Header
        locale={validLocale}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />
      <main
        id="main-content"
        key={routeKey}
        tabIndex={-1}
        className="page-transition outline-none pb-20 md:pb-0"
      >
        <Outlet />
      </main>
      <Footer locale={validLocale} />
      <BottomNav locale={validLocale} />
      <CommandPalette
        locale={validLocale}
        open={commandPaletteOpen}
        onOpenChange={setCommandPaletteOpen}
      />
    </>
  );
}
