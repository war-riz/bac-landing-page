import Section from '@/components/ui/Section';
import ScrollScale from '@/components/effects/ScrollScale';
import { statsCopy } from '@/lib/copy';

export default function Stats() {
  return (
    <Section id="stats" tone="surface" className="py-10!">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {statsCopy.map((stat) => (
          <ScrollScale key={stat.label}>
            <div className="text-center sm:text-left">
              <div className="font-display text-3xl font-semibold text-ink sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-xs text-ink-dim sm:text-sm">{stat.label}</div>
            </div>
          </ScrollScale>
        ))}
      </div>
    </Section>
  );
}