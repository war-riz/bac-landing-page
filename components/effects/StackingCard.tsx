'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

type StackingCardProps = { index: number; total: number; children: ReactNode };

const ROTATIONS = [-2, 1.5, -1, 2, -1.5];

export default function StackingCard({ index, total, children }: StackingCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 20%'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [ROTATIONS[index % ROTATIONS.length], 0]);

  const isLast = index === total - 1;

  return (
    <div ref={ref} className={isLast ? 'relative' : 'sticky top-32'} style={{ zIndex: index + 1 }}>
      <motion.div style={{ scale, opacity, y, rotate }} className="mx-auto max-w-4xl origin-top">
        {children}
      </motion.div>
    </div>
  );
}