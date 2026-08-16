export default function DotGrid({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)] ${className}`}
      style={{
        backgroundImage:
          'radial-gradient(circle, rgb(var(--color-ink-faint) / 0.35) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    />
  );
}