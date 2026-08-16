'use client';

import Button from '@/components/ui/Button';
import ScrollScale from '@/components/effects/ScrollScale';
import Section from '@/components/ui/Section';
import SectionHead from '@/components/ui/SectionHead';
import { links, runItCopy } from '@/lib';

export default function RunItYourself() {
  return (
    <Section id="run" tone="base">
      <SectionHead eyebrow={runItCopy.eyebrow} title={runItCopy.title} />

      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <ScrollScale>
          <div>
            <ul className="flex flex-col gap-3">
              {runItCopy.steps.map((step) => (
                <li key={step} className="flex gap-2.5 text-sm text-ink-dim">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-info" />
                  {step}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href={`${links.landingithub}#readme`} variant="primary" external>
                {runItCopy.cta}
              </Button>
            </div>
          </div>
        </ScrollScale>

        <ScrollScale>
          <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
            <div className="flex items-center gap-2 border-b border-border bg-surface2 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-2 font-mono text-xs text-ink-faint">terminal</span>
            </div>
            <div className="p-6 font-mono text-[13.5px]">
              <div className="text-ink-faint"># clone and start everything</div>
              <div><span className="text-allow">git</span> clone {links.github}.git</div>
              <div><span className="text-allow">cd</span> bac-gateway</div>
              <div><span className="text-allow">docker</span> compose --profile local up -d</div>
              <div className="mt-3 text-ink-faint"># dashboard → http://localhost:3000</div>
              <div className="text-ink-faint"># gateway   → http://localhost:8000</div>
            </div>
          </div>
        </ScrollScale>
      </div>
    </Section>
  );
}