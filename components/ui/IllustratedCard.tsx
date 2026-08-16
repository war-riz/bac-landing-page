import Image from 'next/image';

type IllustratedCardProps = {
    image: string;
    imageAlt: string;
    eyebrow?: string;
    eyebrowColor?: 'block' | 'info';
    title: string;
    body: string;
};

export default function IllustratedCard({ image, imageAlt, eyebrow, eyebrowColor = 'info', title, body }: IllustratedCardProps) {
    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-info/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
            <div className="relative h-40 w-full overflow-hidden bg-surface2">
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-contain p-7 transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-1 flex-col p-6">
                {eyebrow && (
                    <span className={`font-mono text-[10.5px] uppercase tracking-wide ${eyebrowColor === 'block' ? 'text-block' : 'text-info'}`}>
                        {eyebrow}
                    </span>
                )}
                <h3 className="mt-2 font-display text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-[13.5px] text-ink-dim">{body}</p>
            </div>
        </div>
    );
}