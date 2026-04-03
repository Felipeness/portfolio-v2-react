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
    <div ref={ref} className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {translations.uses.categories.map((category) => (
          <div key={category.name} className="uses-category">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
              <h3 className="font-heading text-lg font-bold text-text-primary">
                {category.name}
              </h3>
            </div>
            <div className="space-y-3">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="group/item flex items-start gap-4 p-4 rounded-xl bg-bg-surface border border-border-subtle hover:border-orange/30 hover:shadow-[0_0_20px_rgba(229,101,0,0.08)] transition-all duration-300"
                >
                  <div className="min-w-0">
                    <h4 className="font-medium text-text-primary group-hover/item:text-orange transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-sm text-text-tertiary mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
