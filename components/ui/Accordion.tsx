'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/types';

export default function AccordionItem({ question, answer }: FaqItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-semibold text-ink">{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-ink-faint"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pt-3 pr-8 text-sm text-ink-dim">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}