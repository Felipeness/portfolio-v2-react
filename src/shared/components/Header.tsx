import { useRef, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
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
  | '/$locale/uses';

const navLinks: { key: keyof ReturnType<typeof t>['nav']; route: NavRoute }[] = [
  { key: 'cases', route: '/$locale/cases' },
  { key: 'blog', route: '/$locale/blog' },
  { key: 'book', route: '/$locale/book' },
  { key: 'about', route: '/$locale/about' },
  { key: 'oss', route: '/$locale/oss' },
  { key: 'uses', route: '/$locale/uses' },
];

export function Header({ locale, onOpenCommandPalette }: HeaderProps) {
  const translations = t(locale);
  const headerRef = useRef<HTMLElement>(null);

  // Hide header on scroll down, show on scroll up
  useEffect(() => {
    if (typeof window === 'undefined' || !headerRef.current) return;

    let lastScrollY = 0;

    function onScroll() {
      const currentY = window.scrollY;
      if (currentY > 100 && currentY > lastScrollY) {
        headerRef.current?.style.setProperty(
          'transform',
          'translateY(-100%)',
        );
      } else {
        headerRef.current?.style.setProperty('transform', 'translateY(0)');
      }
      lastScrollY = currentY;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle backdrop-blur-xl bg-bg-base/80 will-change-transform transition-transform duration-300"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-orange focus:text-black focus:rounded-lg"
      >
        Skip to content
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/$locale"
          params={{ locale }}
          className="flex items-center gap-2"
        >
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
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="font-mono">Cmd+K</span>
          </button>

          <ThemeToggle />
          <LanguageToggle locale={locale} />
        </div>
      </div>
    </header>
  );
}
