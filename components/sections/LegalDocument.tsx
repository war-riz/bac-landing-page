'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import DotGrid from '@/components/ui/DotGrid';
import type { LegalPageCopy } from '@/types';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } } };

export default function LegalDocument({ copy }: { copy: LegalPageCopy }) {
    const router = useRouter();

    const handleBack = () => {
        if (typeof window !== 'undefined' && window.history.length > 1) {
            router.back();
        } else {
            router.push('/');
        }
    };

    return (
        <main className="relative flex flex-col bg-bg">
            <DotGrid className="opacity-10" />

            <div className="mx-auto w-full max-w-page px-6 pb-24 pt-28 sm:px-8 lg:px-10 lg:pt-32">
                <motion.div variants={container} initial="hidden" animate="show">
                    <motion.div variants={item}>
                        <button
                            onClick={handleBack}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface2"
                        >
                            <ArrowLeft size={15} /> Back
                        </button>
                    </motion.div>

                    <motion.div variants={item} className="mt-5">
                        <span className="font-mono text-[11px] tracking-wide text-ink-dim">{copy.eyebrow}</span>
                    </motion.div>

                    <motion.h1 variants={item} className="mt-2 font-display text-[clamp(28px,4vw,42px)] font-semibold leading-tight text-ink">
                        {copy.title}
                    </motion.h1>

                    <motion.p variants={item} className="mt-2 font-mono text-[13px] text-ink-faint">
                        {copy.lastUpdated}
                    </motion.p>

                    <motion.p variants={item} className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-dim">
                        {copy.intro}
                    </motion.p>
                </motion.div>

                <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
                    <nav aria-label="Table of contents" className="hidden lg:block">
                        <div className="sticky top-32 flex flex-col gap-3 border-l border-border pl-5">
                            {copy.sections.map((s, i) => (
                                <a
                                    key={s.id}
                                    href={`#${s.id}`}
                                    className="group flex items-start gap-2 text-sm text-ink-dim transition-colors hover:text-ink"
                                >
                                    <span className="font-mono text-xs text-ink-faint group-hover:text-info">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    {s.heading}
                                </a>
                            ))}
                        </div>
                    </nav>

                    <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
                        <div className="flex flex-col gap-10">
                            {copy.sections.map((s, i) => (
                                <section key={s.id} id={s.id} className="scroll-mt-28">
                                    <div className="flex items-baseline gap-3">
                                        <span className="font-mono text-xs text-ink-faint lg:hidden">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <h2 className="font-display text-lg font-semibold text-ink">{s.heading}</h2>
                                    </div>
                                    <div className="mt-3 flex flex-col gap-3">
                                        {s.body.map((p, pi) => (
                                            <p key={pi} className="text-sm leading-relaxed text-ink-dim">
                                                {p}
                                            </p>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}