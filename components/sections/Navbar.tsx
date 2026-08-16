'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import ThemeToggle from '@/components/ThemeToggle';
import Button from '@/components/ui/Button';
import { links } from '@/lib';
import type { ReactNode } from 'react';

const NAV_LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#attacks', label: 'Attacks stopped' },
  { href: '#screenshots', label: 'In action' },
  { href: '#faq', label: 'FAQ' },
  { href: '#run', label: 'Run it' },
];

export default function Navbar({ githubStars }: { githubStars?: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between rounded-2xl border border-border bg-surface/55 px-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-1 font-mono text-[15px] font-semibold text-ink">
          BAC<span className="text-block">{'//'}</span>Gateway
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-ink-dim transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          {githubStars}
          <Button href={links.dashboard} variant="primary" external>Live dashboard</Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid h-9 w-9 place-items-center rounded-md border border-border text-ink lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-page rounded-2xl border border-border bg-surface px-5 py-5 shadow-lg lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-ink-dim">
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <ThemeToggle />
              {githubStars}
              <Button href={links.dashboard} variant="primary" external>Live dashboard</Button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}