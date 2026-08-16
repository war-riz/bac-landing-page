import Image from 'next/image';

type TextureBackgroundProps = {
  src: string;
  opacity?: number;
  priority?: boolean;
};

export default function TextureBackground({ src, opacity = 0.4, priority = false }: TextureBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Image src={src} alt="" fill priority={priority} className="object-cover" style={{ opacity }} />
      <div className="absolute inset-0 bg-linear-to-b from-[#0A0E14]/0 via-[#0A0E14]/10 to-[#0A0E14]/50" />
    </div>
  );
}