import { useEffect } from 'react';

export function useScrollAnimations() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // If user prefers reduced motion, don't animate at all — keep everything visible
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 },
    );

    function setupElements() {
      document.querySelectorAll('.scroll-animate:not(.visible)').forEach((el) => {
        // Only hide elements that are below the fold (not already visible)
        const rect = el.getBoundingClientRect();
        if (rect.top > window.innerHeight * 0.8) {
          el.classList.add('scroll-ready');
        } else {
          // Element is already in view — show immediately
          el.classList.add('visible');
        }
        observer.observe(el);
      });
    }

    // Small delay to let React finish rendering
    const timer = setTimeout(setupElements, 50);

    // Watch for new elements added dynamically
    const mutation = new MutationObserver(() => {
      setupElements();
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);
}
