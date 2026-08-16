import Section from '@/components/ui/Section';
import SectionHead from '@/components/ui/SectionHead';
import StackingCard from '@/components/effects/StackingCard';
import { screenshots, inActionCopy } from '@/lib';

export default function Screenshots() {
  return (
    <Section id="screenshots" tone="base">
      <SectionHead eyebrow={inActionCopy.eyebrow} title={inActionCopy.title} body={inActionCopy.body} />

      <div className="flex flex-col gap-16 pb-2">
        {screenshots.map((shot, i) => (
          <StackingCard key={shot.src} index={i} total={screenshots.length}>
            <figure className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <div className="relative aspect-video w-full bg-surface2">
                <img src={shot.src} alt={shot.alt} className="h-full w-full object-cover" />
              </div>
              <figcaption className="border-t border-border px-5 py-4 text-sm text-ink-dim">{shot.caption}</figcaption>
            </figure>
          </StackingCard>
        ))}
      </div>
    </Section>
  );
}