import type { Locale } from '~/shared/types/locale';
import translations from './translations';

export function t(locale: Locale) {
  return translations[locale];
}

export function getLocalizedPath(locale: Locale, path: string): string {
  const cleanPath = path.replace(/^\/(en|pt-br)/, '');
  return `/${locale}${cleanPath || ''}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'pt-br' : 'en';
}
