import { useRef } from 'react';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';
import type { Locale } from '~/shared/types/locale';
import { t } from '~/shared/i18n/utils';

interface UsesGridProps {
  locale: Locale;
}

export function UsesGrid({ locale }: UsesGridProps) {
  const translations = t(locale);
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, { childSelector: '.uses-category', stagger: 0.15 });

  return (
    <div ref={ref} className="space-y-16">
      {translations.uses.categories.map((category) => (
        <div key={category.name} className="uses-category">
          <h3 className="font-heading text-xl font-bold text-text-primary mb-6">
            {category.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="p-4 rounded-xl bg-bg-surface border border-border-subtle hover:border-border-default transition-colors"
              >
                <h4 className="font-medium text-text-primary mb-1">{item.name}</h4>
                <p className="text-sm text-text-tertiary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
