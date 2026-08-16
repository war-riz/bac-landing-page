'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

export default function ScrollScale({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 60%', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.92, 1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.5, 1, 0.5]);

  if (reduceMotion) return <div ref={ref}>{children}</div>;

  return (
    <motion.div ref={ref} style={{ scale, opacity }}>
      {children}
    </motion.div>
  );
}