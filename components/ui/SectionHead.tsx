import type { SectionHeadProps } from '@/types';

export default function SectionHead({ eyebrow, title, body }: SectionHeadProps) {
  return (
    <div className="mb-8 max-w-xl">
      <span className="font-mono text-xs uppercase tracking-[0.12em] text-info">{eyebrow}</span>
      <h2 className="mt-2.5 font-display text-[clamp(26px,3.5vw,34px)] font-semibold leading-tight">{title}</h2>
      {body && <p className="mt-3 text-base text-ink-dim">{body}</p>}
    </div>
  );
}