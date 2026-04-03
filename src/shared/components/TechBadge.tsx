interface TechBadgeProps {
  children: string;
  variant?: 'primary' | 'secondary';
}

export function TechBadge({ children, variant = 'primary' }: TechBadgeProps) {
  return (
    <span
      className={`font-mono text-[11px] px-2.5 py-1 rounded-md border ${
        variant === 'primary'
          ? 'bg-[var(--orange-bg)] text-orange border-orange/15'
          : 'bg-[var(--blue-bg)] text-blue-text border-[#0119E5]/15'
      }`}
    >
      {children}
    </span>
  );
}
