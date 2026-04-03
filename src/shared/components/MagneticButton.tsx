import { useRef, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
}

export function MagneticButton({ children, className = '', href, onClick, strength = 0.3 }: Props) {
  const ref = useRef<HTMLElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }

  function handleMouseLeave() {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0, 0)';
    ref.current.style.transition = 'transform 0.3s ease';
    setTimeout(() => {
      if (ref.current) ref.current.style.transition = '';
    }, 300);
  }

  const Tag = href ? 'a' : 'button';
  const props = href ? { href } : { onClick };

  return (
    <Tag
      ref={ref as any}
      {...props}
      className={`inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Tag>
  );
}
