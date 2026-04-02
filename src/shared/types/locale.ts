export type Locale = 'en' | 'pt-br';

export const locales: Locale[] = ['en', 'pt-br'];

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
