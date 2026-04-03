import { useRef, useLayoutEffect } from 'react';
import { Link } from '@tanstack/react-router';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { gsap } from '~/shared/animations/gsap-setup';
import { prefersReducedMotion } from '~/shared/utils/prefersReducedMotion';
import { caseStudies } from '~/features/cases/data';
import { TechBadge } from '~/shared/components/TechBadge';

interface FeaturedCasesProps {
  locale: Locale;
}

const cardGradients = [
  'from-[#E56500]/20 to-[#E61100]/20',
  'from-[#0119E5]/20 to-[#6676FE]/20',
  'from-[#059669]/20 to-[#34D399]/20',
];

export function FeaturedCases({ locale }: FeaturedCasesProps) {
  const translations = t(locale);
  const sectionRef = useRef<HTMLElement>(null);

  const topCases = caseStudies
    .filter((c) => c.locale === locale)
    .slice(0, 3);

  useLayoutEffect(() => {
    if (!sectionRef.current || typeof window === 'undefined') return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const track = sectionRef.current!.querySelector(
        '.h-scroll-track',
      ) as HTMLElement;
      if (!track) return;

      const getScrollWidth = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -getScrollWidth(),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: 'top top',
          end: () => `+=${getScrollWidth()}`,
          scrub: 0.8,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / topCases.length,
            duration: { min: 0.2, max: 0.4 },
            ease: 'power1.inOut',
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [topCases.length]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-bg-base overflow-hidden min-h-screen"
    >
      <div className="h-scroll-track flex items-center gap-8 px-8 will-change-transform h-screen">
        {/* Leading spacer with title */}
        <div className="flex-shrink-0 w-[80vw] md:w-[40vw] flex items-center justify-center px-8">
          <div>
            <span className="section-tag mb-4 inline-flex">
              {translations.sections.cases.tag}
            </span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-text-primary mt-4">
              {translations.sections.cases.title}
            </h2>
          </div>
        </div>

        {/* Case cards */}
        {topCases.map((study, i) => (
          <Link
            key={study.slug}
            to="/$locale/cases/$slug"
            params={{ locale, slug: study.slug }}
            className={`group flex-shrink-0 w-[80vw] md:w-[45vw] rounded-3xl bg-gradient-to-br ${cardGradients[i]} border border-border-subtle p-8 md:p-12 flex flex-col justify-between max-h-[70vh] hover:border-orange/30 hover:shadow-[0_0_20px_rgba(229,101,0,0.08)] transition-all duration-300`}
          >
            <div>
              <span className="section-tag mb-6 inline-flex">{study.tag}</span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mt-4 mb-4 group-hover:text-orange transition-colors">
                {study.title}
              </h3>
              <p className="text-text-tertiary leading-relaxed mb-8 line-clamp-3">
                {study.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {study.techs.slice(0, 5).map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </div>
              <span className="text-sm font-medium text-orange group-hover:underline">
                {translations.cases.viewCase}
              </span>
            </div>
          </Link>
        ))}

        {/* Trailing spacer */}
        <div className="flex-shrink-0 w-[10vw]" />
      </div>
    </section>
  );
}
