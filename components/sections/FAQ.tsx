'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Section from '@/components/ui/Section';
import SectionHead from '@/components/ui/SectionHead';
import AccordionItem from '@/components/ui/Accordion';
import { faqs } from '@/lib/data';
import { faqCopy } from '@/lib/copy';

function FaqRow({ item, index }: { item: (typeof faqs)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <AccordionItem {...item} />
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <Section id="faq" tone="base">
      <SectionHead eyebrow={faqCopy.eyebrow} title={faqCopy.title} body={faqCopy.body} />
      <div>
        {faqs.map((item, i) => (
          <FaqRow key={item.question} item={item} index={i} />
        ))}
      </div>
    </Section>
  );
}