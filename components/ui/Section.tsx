import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  children: ReactNode;
  tone?: 'base' | 'surface';
  className?: string;
};

export default function Section({ id, children, tone = 'base', className = '' }: SectionProps) {
  return (
    <section id={id} className={`${tone === 'surface' ? 'bg-surface' : 'bg-bg'} py-14 md:py-20 ${className}`}>
      <div className="mx-auto max-w-page px-6 sm:px-8 lg:px-10">{children}</div>
    </section>
  );
}