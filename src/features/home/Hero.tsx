import { Link } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const translations = t(locale);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-border-subtle) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border-subtle) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial glows */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.07]"
        style={{
          background:
            'radial-gradient(circle, var(--color-orange) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.04]"
        style={{
          background:
            'radial-gradient(circle, var(--color-brand-blue) 0%, transparent 70%)',
        }}
      />

      {/* Content with CSS animations */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="section-tag mb-8 inline-flex animate-[fadeInUp_0.6s_ease_0.2s_both]">
          {translations.hero.tag}
        </span>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] mt-8 mb-6">
          <span className="block animate-[fadeInUp_0.8s_ease_0.4s_both]">
            {translations.hero.titleLine1}
          </span>
          <span className="gradient-text block mt-2 animate-[fadeInUp_0.8s_ease_0.7s_both]">
            {translations.hero.titleHighlight}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-text-tertiary max-w-2xl mx-auto leading-relaxed mb-10 animate-[fadeInUp_0.6s_ease_1s_both]">
          {translations.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_0.6s_ease_1.2s_both]">
          <Link
            to="/$locale/cases"
            params={{ locale }}
            className="px-8 py-3.5 rounded-xl bg-orange text-white font-medium text-sm hover:bg-orange-hover transition-colors shadow-lg shadow-orange/20 inline-block"
          >
            {translations.hero.cta}
          </Link>
          <Link
            to="/$locale/about"
            params={{ locale }}
            className="px-8 py-3.5 rounded-xl border border-border-default text-text-secondary font-medium text-sm hover:bg-bg-surface hover:border-border-subtle transition-colors inline-block"
          >
            {translations.hero.ctaSecondary}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-[fadeIn_1s_ease_1.5s_both]"
        aria-hidden="true"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-orange to-transparent animate-pulse" />
        <span className="text-[10px] font-mono tracking-[0.3em] text-text-muted">
          {translations.hero.scroll}
        </span>
      </div>
    </section>
  );
}
