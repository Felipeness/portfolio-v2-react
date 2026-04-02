import { useRef, useLayoutEffect } from 'react';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';
import { gsap, ScrollTrigger } from '~/shared/animations/gsap-setup';

interface WhatIDoProps {
  locale: Locale;
}

export function WhatIDo({ locale }: WhatIDoProps) {
  const translations = t(locale);
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const items = sectionRef.current!.querySelectorAll('.capability-item');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: 'top top',
          end: () => `+=${items.length * 400}`,
          scrub: 0.5,
          anticipatePin: 1,
        },
      });

      items.forEach((item, i) => {
        // Fade in with Apple-subtle 30px entrance
        tl.fromTo(
          item,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
          i * 2,
        );

        // Hold, then fade to 30% if not last
        if (i < items.length - 1) {
          tl.to(item, { opacity: 0.3, duration: 0.5 }, i * 2 + 1.5);
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-bg-base rounded-t-3xl min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="section-tag mb-12 inline-flex">
          {translations.whatIDo.title}
        </span>

        <div className="mt-8 space-y-6">
          {translations.whatIDo.capabilities.map((capability) => (
            <p
              key={capability}
              className="capability-item text-4xl md:text-5xl font-heading font-bold text-text-primary leading-tight opacity-0"
            >
              {capability}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
