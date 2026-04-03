import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { useNavigate } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';

interface CommandPaletteProps {
  locale: Locale;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ locale, open, onOpenChange }: CommandPaletteProps) {
  const navigate = useNavigate();
  const translations = t(locale);
  const [search, setSearch] = useState('');

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === 'Escape' && open) {
        onOpenChange(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  function navigateTo(path: string) {
    navigate({ to: path as '/' });
    onOpenChange(false);
    setSearch('');
  }

  // Easter eggs
  useEffect(() => {
    const lower = search.toLowerCase();
    if (lower === 'holonomic') {
      navigate({ to: `/${locale}/book` as '/' });
      onOpenChange(false);
      setSearch('');
    } else if (lower === 'hire') {
      window.location.href = 'mailto:felipecoelho.ness@gmail.com';
      onOpenChange(false);
      setSearch('');
    }
  }, [search, locale, navigate, onOpenChange]);

  if (!open) return null;

  const pages = [
    { label: translations.nav.home, path: `/${locale}` },
    { label: translations.nav.cases, path: `/${locale}/cases` },
    { label: translations.nav.blog, path: `/${locale}/blog` },
    { label: translations.nav.book, path: `/${locale}/book` },
    { label: translations.nav.about, path: `/${locale}/about` },
    { label: translations.nav.oss, path: `/${locale}/oss` },
    { label: translations.nav.uses, path: `/${locale}/uses` },
  ];

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />

      {/* Command Dialog */}
      <div className="relative max-w-lg mx-auto mt-[20vh]">
        <Command
          className="bg-bg-elevated border border-border-default rounded-xl shadow-2xl overflow-hidden"
          label="Command Palette"
        >
          <Command.Input
            value={search}
            onValueChange={setSearch}
            placeholder={translations.commandPalette.placeholder}
            className="w-full px-6 py-4 text-base bg-transparent text-text-primary placeholder:text-text-muted border-b border-border-subtle outline-none font-body"
          />
          <Command.List className="max-h-72 overflow-y-auto p-2">
            <Command.Empty className="px-4 py-8 text-center text-sm text-text-muted">
              {translations.commandPalette.noResults}
            </Command.Empty>

            <Command.Group
              heading={translations.commandPalette.pages}
              className="px-2 py-1.5 text-xs font-mono text-text-muted uppercase tracking-wider"
            >
              {pages.map(({ label, path }) => (
                <Command.Item
                  key={path}
                  value={label}
                  onSelect={() => navigateTo(path)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-text-secondary cursor-pointer hover:bg-bg-surface data-[selected=true]:bg-bg-surface transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <polyline points="13 2 13 9 20 9" />
                  </svg>
                  {label}
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
