import { Link } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';

interface BottomNavProps {
  locale: Locale;
}

function NavIcon({ name }: { name: string }) {
  const props = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (name) {
    case 'home':
      return (
        <svg {...props}>
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
          <polyline points="9 21 9 14 15 14 15 21" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg {...props}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
      );
    case 'edit':
      return (
        <svg {...props}>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      );
    case 'user':
      return (
        <svg {...props}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case 'book':
      return (
        <svg {...props}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z" />
        </svg>
      );
    default:
      return null;
  }
}

type NavKey = 'home' | 'cases' | 'blog' | 'about' | 'book';

type NavRoute =
  | '/$locale'
  | '/$locale/cases'
  | '/$locale/blog'
  | '/$locale/about'
  | '/$locale/book';

const navItems: { key: NavKey; route: NavRoute; icon: string }[] = [
  { key: 'home', route: '/$locale', icon: 'home' },
  { key: 'cases', route: '/$locale/cases', icon: 'briefcase' },
  { key: 'blog', route: '/$locale/blog', icon: 'edit' },
  { key: 'about', route: '/$locale/about', icon: 'user' },
  { key: 'book', route: '/$locale/book', icon: 'book' },
];

export function BottomNav({ locale }: BottomNavProps) {
  const translations = t(locale);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-bg-base/90 backdrop-blur-xl border-t border-border-subtle pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => (
          <Link
            key={item.key}
            to={item.route}
            params={{ locale } as any}
            className="flex flex-col items-center gap-1 px-3 py-2 text-text-muted transition-colors"
            activeProps={{
              className:
                'flex flex-col items-center gap-1 px-3 py-2 text-orange transition-colors',
            }}
            activeOptions={item.key === 'home' ? { exact: true } : undefined}
          >
            <NavIcon name={item.icon} />
            <span className="text-[10px] font-mono">
              {translations.nav[item.key]}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
