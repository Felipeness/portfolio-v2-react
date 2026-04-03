import { useLayoutEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '~/shared/animations/gsap-setup';

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !barRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px]">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-orange-hover via-orange to-brand-red origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
