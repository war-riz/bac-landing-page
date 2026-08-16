'use client';

import { motion } from 'motion/react';
import type { ButtonProps } from '@/types';

export default function Button({ href, children, variant = 'primary', external = false }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors';
  const styles =
    variant === 'primary'
      ? 'bg-ink text-bg hover:opacity-90'
      : 'border border-border text-ink hover:border-ink-faint';

  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      className={`${base} ${styles}`}
    >
      {children}
    </motion.a>
  );
}