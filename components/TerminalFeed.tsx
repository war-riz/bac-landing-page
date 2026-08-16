'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { logSamples } from '@/lib/data';
import type { LogEntry } from '@/types';

type Line = LogEntry & { id: number; time: string };

function timestamp() {
  const d = new Date();
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

const MAX_LINES = 8;

export default function TerminalFeed() {
  const [lines, setLines] = useState<Line[]>([]);
  const idRef = useRef(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const seed = Array.from({ length: 5 }).map(() => {
      const entry = logSamples[Math.floor(Math.random() * logSamples.length)];
      idRef.current += 1;
      return { ...entry, id: idRef.current, time: timestamp() };
    });
    setLines(seed);

    if (reduceMotion) return;

    const interval = setInterval(() => {
      const entry = logSamples[Math.floor(Math.random() * logSamples.length)];
      idRef.current += 1;
      setLines((prev) => [...prev.slice(-(MAX_LINES - 1)), { ...entry, id: idRef.current, time: timestamp() }]);
    }, 1800);

    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface/70 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.03)_inset,0_8px_24px_rgba(0,0,0,0.35)]">
  <div className="flex items-center gap-2 border-b border-border bg-surface2/60 backdrop-blur-md px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-2 font-mono text-xs text-ink-faint">gateway - live feed</span>
      </div>

      <div className="flex h-75 flex-col justify-end gap-2 overflow-hidden px-5 py-4 font-mono text-[12.5px]">
        <AnimatePresence initial={false}>
          {lines.map((line) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-baseline gap-2.5 whitespace-nowrap"
            >
              <span className="shrink-0 text-ink-faint">{line.time}</span>
              <span
                className={`shrink-0 rounded px-1.5 py-0.5 font-semibold ${line.tag === 'block' ? 'bg-block/15 text-block' : 'bg-allow/15 text-allow'
                  }`}
              >
                {line.tag === 'block' ? 'BLOCKED' : 'ALLOWED'}
              </span>
              <span className="overflow-hidden text-ellipsis text-ink-dim">{line.msg}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
