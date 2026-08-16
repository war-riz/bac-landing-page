'use client';

import { useRef, useState, type ReactNode, Children } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel({ children }: { children: ReactNode[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [index, setIndex] = useState(0);
  const items = Children.toArray(children);

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(i, items.length - 1));
    setIndex(clamped);
    const el = itemRefs.current[clamped];
    const track = trackRef.current;
    if (el && track) {
      track.scrollTo({ left: el.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {items.map((child, i) => (
          <div
            key={i}
            ref={(el) => { itemRefs.current[i] = el; }}
            data-carousel-item
            className="snap-start"
          >
            {child}
          </div>
        ))}
      </div>

      <button
        onClick={() => goTo(index - 1)}
        disabled={index === 0}
        aria-label="Previous"
        className="absolute left-1 top-1/2 grid -translate-y-1/2 rounded-full border border-border bg-surface p-2 shadow-md transition-opacity disabled:opacity-0 place-items-center hover:bg-surface2 sm:left-0 sm:-translate-x-4 sm:p-2.5"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => goTo(index + 1)}
        disabled={index === items.length - 1}
        aria-label="Next"
        className="absolute right-1 top-1/2 grid -translate-y-1/2 rounded-full border border-border bg-surface p-2 shadow-md transition-opacity disabled:opacity-0 place-items-center hover:bg-surface2 sm:right-0 sm:translate-x-4 sm:p-2.5"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}