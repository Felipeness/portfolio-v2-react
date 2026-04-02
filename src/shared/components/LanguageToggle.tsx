import { useRouter, useNavigate } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { getAlternateLocale } from '~/shared/i18n/utils';

interface LanguageToggleProps {
  locale: Locale;
}

export function LanguageToggle({ locale }: LanguageToggleProps) {
  const router = useRouter();
  const navigate = useNavigate();
  const alternateLocale = getAlternateLocale(locale);

  function handleSwitch() {
    const currentPath = router.state.location.pathname;
    const newPath = currentPath.replace(/^\/(en|pt-br)/, `/${alternateLocale}`);
    navigate({ to: newPath as '/' });
  }

  return (
    <button
      onClick={handleSwitch}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-mono text-text-muted hover:text-text-secondary hover:bg-bg-surface transition-colors"
      aria-label={`Switch to ${alternateLocale === 'en' ? 'English' : 'Portuguese'}`}
    >
      <span className="text-xs uppercase tracking-wider">
        {alternateLocale === 'en' ? 'EN' : 'PT'}
      </span>
    </button>
  );
}
