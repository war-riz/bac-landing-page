import Section from '@/components/ui/Section';
import SectionHead from '@/components/ui/SectionHead';
import IllustratedCard from '@/components/ui/IllustratedCard';
import HorizontalScroll from '@/components/effects/HorizontalScroll';
import { attackTypes, attackGridCopy } from '@/lib';

export default function AttackGrid() {
  return (
    <Section id="attacks" tone="surface" className="py-14! md:py-16!">
      <SectionHead
        eyebrow={attackGridCopy.eyebrow}
        title={attackGridCopy.title}
        body={attackGridCopy.body}
      />

      <HorizontalScroll>
        {attackTypes.map((attack) => (
          <div key={attack.tag} className="w-[72vw] shrink-0 sm:w-75">
            <IllustratedCard image={attack.image} imageAlt={attack.title} eyebrow={attack.tag} eyebrowColor="block" title={attack.title} body={attack.body} />
          </div>
        ))}
      </HorizontalScroll>
    </Section>
  );
}