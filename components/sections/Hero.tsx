'use client';

import { motion } from 'motion/react';
import Button from '@/components/ui/Button';
import TerminalFeed from '@/components/TerminalFeed';
import DotGrid from '@/components/ui/DotGrid';
import TextureBackground from '@/components/ui/TextureBackground';
import { heroCopy } from '@/lib/copy';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } } };

export default function Hero() {
  return (
    <header id="top" className="relative flex min-h-dvh flex-col overflow-hidden bg-bg">
      <TextureBackground src="/images/texture-circuit.jpg" opacity={0.4} priority />
      <DotGrid className="opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-bg/75 via-bg/25 to-transparent lg:to-bg/0" />

      <div className="h-24 shrink-0 lg:h-28" aria-hidden />

      <div className="relative flex flex-1 items-center">
        <div className="mx-auto grid w-full max-w-page grid-cols-1 items-center gap-14 px-6 pb-10 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:px-10">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span variants={item} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 backdrop-blur-md px-3 py-1 font-mono text-[11px] tracking-wide text-ink-dim">
              <span className="h-1.5 w-1.5 animate-pulse-ring rounded-full bg-allow" />
              {heroCopy.badge}
            </motion.span>

            <motion.h1 variants={item} className="mt-4 font-display text-[clamp(34px,5vw,52px)] font-semibold leading-[1.08] text-ink">
              {heroCopy.titleBefore}<span className="text-block">{heroCopy.titleHighlight}</span>{heroCopy.titleAfter}
            </motion.h1>

            <motion.p variants={item} className="mt-5 max-w-md text-[17px] text-ink-dim">
              {heroCopy.body}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <Button href="#run" variant="primary">{heroCopy.primaryCta}</Button>
              <Button href="#how" variant="ghost">{heroCopy.secondaryCta}</Button>
            </motion.div>

            <motion.p variants={item} className="mt-5 font-mono text-[13px] text-ink-dim">
              {heroCopy.note}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <TerminalFeed />
          </motion.div>
        </div>
      </div>
    </header>
  );
}