import Section from '@/components/ui/Section';
import SectionHead from '@/components/ui/SectionHead';
import IllustratedCard from '@/components/ui/IllustratedCard';
import ScrollScale from '@/components/effects/ScrollScale';
import Carousel from '@/components/ui/Carousel';
import { flowSteps } from '@/lib/data';
import { howItWorksCopy } from '@/lib/copy';

export default function HowItWorks() {
  return (
    <Section id="how" tone="base">
      <SectionHead eyebrow={howItWorksCopy.eyebrow} title={howItWorksCopy.title} body={howItWorksCopy.body} />

      <Carousel>
        {flowSteps.map((step) => (
          <div key={step.n} className="w-[75vw] shrink-0 sm:w-70">
            <ScrollScale>
              <IllustratedCard image={step.image} imageAlt={step.title} eyebrow={step.n} title={step.title} body={step.body} />
            </ScrollScale>
          </div>
        ))}
      </Carousel>
    </Section>
  );
}