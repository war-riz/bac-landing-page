'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';

export default function SparkleButton({ href, stars }: { href: string; stars?: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className="relative flex h-9 items-center justify-center gap-2.5 rounded-full border border-border bg-surface px-4 text-sm font-medium text-ink transition-colors hover:bg-surface2"
    >
      <div className="relative flex h-4 w-4 shrink-0 items-center justify-center">
        <AnimatePresence mode="popLayout" initial={false}>
          {!isHovered ? (
            <motion.div
              key="icon1"
              initial={{ y: -15, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -15, opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 600, damping: 25 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <SiGithub size={16} />
            </motion.div>
          ) : (
            <motion.div
              key="icon2"
              initial={{ y: 15, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 15, opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 600, damping: 25 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Star size={16} className="text-yellow-400" />
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -45, y: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0, rotate: 45, y: 10 }}
                transition={{ type: 'spring', stiffness: 600, damping: 25, delay: 0.05 }}
                className="absolute -top-3 -right-2"
              >
                <svg className="h-2.5 w-2.5 text-yellow-200" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6-6.2-4.5-6.2 4.5 2.4-7.6L2 9.6h7.6z" />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <span>{isHovered ? 'Star on GitHub' : 'GitHub'}</span>
      {typeof stars === 'number' && (
        <span className="rounded-full bg-surface2 px-1.5 py-0.5 font-mono text-[11px] text-ink-dim">
          {stars.toLocaleString()}
        </span>
      )}
    </motion.a>
  );
}