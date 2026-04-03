import { useRef, useLayoutEffect } from 'react';
import { Link } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { gsap } from '~/shared/animations/gsap-setup';
import { prefersReducedMotion } from '~/shared/utils/prefersReducedMotion';
import { useSplitText } from '~/shared/animations/useSplitText';
import { useLenis } from '~/shared/animations/useLenis';
import { MagneticButton } from '~/shared/components/MagneticButton';

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const translations = t(locale);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useLenis();
  useSplitText(titleRef, 0.3);
  useSplitText(highlightRef, 0.8);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (prefersReducedMotion()) return;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Hero scale-fade on scroll (parallax exit — Apple uses 0.5s smoothing)
      gsap.to(sectionRef.current, {
        scale: 0.9,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      // Staggered entrance for tag, description, buttons
      gsap.from(tagRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.1,
        ease: 'power3.out',
      });

      gsap.from(descRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 1.1,
        ease: 'power3.out',
      });

      gsap.from(buttonsRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 1.3,
        ease: 'power3.out',
      });

      // Scroll indicator fade in
      gsap.from(scrollIndicatorRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 1.6,
        ease: 'power2.out',
      });

      // Grid parallax on scroll
      if (gridRef.current) {
        gsap.to(gridRef.current, {
          y: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 z-0 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-30"
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
          background: 'radial-gradient(circle, var(--color-orange) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, var(--color-brand-blue) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Tag */}
        <span ref={tagRef} className="section-tag mb-8 inline-flex">
          {translations.hero.tag}
        </span>

        {/* Title */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-[1.1] mt-8 mb-6">
          <span ref={titleRef} className="block">
            {translations.hero.titleLine1}
          </span>
          <span ref={highlightRef} className="gradient-text block mt-2">
            {translations.hero.titleHighlight}
          </span>
        </h1>

        {/* Description */}
        <p
          ref={descRef}
          className="text-lg md:text-xl text-text-tertiary max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {translations.hero.description}
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton strength={0.3}>
            <Link
              to="/$locale/cases"
              params={{ locale }}
              className="px-8 py-3.5 rounded-xl bg-orange text-white font-medium text-sm hover:bg-orange-hover transition-colors shadow-lg shadow-orange/20 inline-block"
            >
              {translations.hero.cta}
            </Link>
          </MagneticButton>
          <MagneticButton strength={0.3}>
            <Link
              to="/$locale/about"
              params={{ locale }}
              className="px-8 py-3.5 rounded-xl border border-border-default text-text-secondary font-medium text-sm hover:bg-bg-surface hover:border-border-subtle transition-colors inline-block"
            >
              {translations.hero.ctaSecondary}
            </Link>
          </MagneticButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-orange to-transparent animate-pulse" />
        <span className="text-[10px] font-mono tracking-[0.3em] text-text-muted rotate-0">
          {translations.hero.scroll}
        </span>
      </div>
    </section>
  );
}
