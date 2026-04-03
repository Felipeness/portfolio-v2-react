import { useState, useEffect } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

interface HeaderProps {
  locale: Locale;
  onOpenCommandPalette: () => void;
}

type NavRoute =
  | '/$locale/cases'
  | '/$locale/blog'
  | '/$locale/book'
  | '/$locale/about'
  | '/$locale/oss'
  | '/$locale/uses'
  | '/$locale/contact';

const navLinks: { key: keyof ReturnType<typeof t>['nav']; route: NavRoute }[] = [
  { key: 'cases', route: '/$locale/cases' },
  { key: 'blog', route: '/$locale/blog' },
  { key: 'book', route: '/$locale/book' },
  { key: 'about', route: '/$locale/about' },
  { key: 'oss', route: '/$locale/oss' },
  { key: 'uses', route: '/$locale/uses' },
  { key: 'contact', route: '/$locale/contact' },
];

export function Header({ locale, onOpenCommandPalette }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const translations = t(locale);
  const locationPath = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setMobileOpen(false);
  }, [locationPath]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle backdrop-blur-xl bg-bg-base/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/$locale" params={{ locale }} className="flex items-center gap-2">
          <span className="font-heading font-bold text-lg gradient-text">
            felipe.dev
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ key, route }) => (
            <Link
              key={key}
              to={route}
              params={{ locale }}
              className="text-sm text-text-muted hover:text-text-primary transition-colors"
              activeProps={{ className: 'text-sm text-text-primary' }}
            >
              {translations.nav[key]}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCommandPalette}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-subtle text-xs text-text-muted hover:border-border-default hover:text-text-secondary transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="font-mono">Cmd+K</span>
          </button>

          <ThemeToggle />
          <LanguageToggle locale={locale} />

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-bg-surface transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border-subtle bg-bg-base/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map(({ key, route }) => (
              <Link
                key={key}
                to={route}
                params={{ locale }}
                className="text-sm text-text-muted hover:text-text-primary transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {translations.nav[key]}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
