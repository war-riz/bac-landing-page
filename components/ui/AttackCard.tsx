import type { LucideIcon } from 'lucide-react';
import Card from './Card';
import type { AttackType } from '@/types';

type Props = AttackType & { icon: LucideIcon };

export default function AttackCard({ tag, title, body, icon: Icon }: Props) {
  return (
    <Card>
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-block/10 text-block">
        <Icon size={20} />
      </div>
      <span className="mt-4 block font-mono text-[10.5px] uppercase tracking-wide text-block">{tag}</span>
      <h3 className="mt-2 font-display text-base font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-[13.5px] text-ink-dim">{body}</p>
    </Card>
  );
}