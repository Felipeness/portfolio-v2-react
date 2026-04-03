import { useRef } from 'react';
import { useScrollReveal } from '~/shared/animations/useScrollReveal';

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
}

export function SectionHeader({ tag, title, description }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref);

  return (
    <div ref={ref} className="mb-16 max-w-2xl">
      <span className="section-tag mb-4">{tag}</span>
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mt-4 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-text-tertiary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
