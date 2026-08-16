'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

export default function HorizontalScroll({ children }: { children: ReactNode }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [pinHeight, setPinHeight] = useState(0);
  const [distance, setDistance] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current || !viewportRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = viewportRef.current.clientWidth;
      const viewportHeight = viewportRef.current.clientHeight;
      const d = Math.max(trackWidth - viewportWidth, 0);
      setDistance(d);
      setPinHeight(d + viewportHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, -16, 0, 16, 0]);

  if (reduceMotion) {
    return (
      <div className="overflow-x-auto">
        <div ref={trackRef} className="flex gap-5 px-6">{children}</div>
      </div>
    );
  }

  return (
    <div ref={targetRef} className="relative mt-6" style={{ height: pinHeight ? `${pinHeight}px` : '150vh' }}>
      <div
        ref={viewportRef}
        className="sticky top-24 overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      >
        <motion.div ref={trackRef} style={{ x, y }} className="flex items-center gap-5 px-[5vw] py-8">
          {children}
        </motion.div>
      </div>
    </div>
  );
}