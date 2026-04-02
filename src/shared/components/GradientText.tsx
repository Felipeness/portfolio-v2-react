interface GradientTextProps {
  children: React.ReactNode;
  variant?: 'warm' | 'cool';
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
}

export function GradientText({
  children,
  variant = 'warm',
  as: Tag = 'span',
  className = '',
}: GradientTextProps) {
  const gradientClass = variant === 'warm' ? 'gradient-text' : 'gradient-text-cool';

  return (
    <Tag className={`${gradientClass} ${className}`}>
      {children}
    </Tag>
  );
}
