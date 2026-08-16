import type { ReactNode } from 'react';

export default function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-info/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] ${className}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-info/0 blur-3xl transition-colors duration-300 group-hover:bg-info/10" />
      <div className="relative">{children}</div>
    </div>
  );
}