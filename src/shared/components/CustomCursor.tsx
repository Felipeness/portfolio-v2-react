import { useEffect, useRef } from 'react';
import { gsap } from '~/shared/animations/gsap-setup';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    function onMouseMove(e: MouseEvent) {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power2.out',
      });
    }

    function onMouseEnterInteractive() {
      gsap.to(dot, { scale: 2.5, opacity: 0.5, duration: 0.2 });
    }

    function onMouseLeaveInteractive() {
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.2 });
    }

    window.addEventListener('mousemove', onMouseMove);

    const interactives = document.querySelectorAll('a, button, [role="button"]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 w-3 h-3 rounded-full bg-orange pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  );
}
