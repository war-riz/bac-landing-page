'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

export default function RevealOnScroll({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div ref={ref}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92, y: 16 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}