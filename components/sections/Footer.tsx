import { ArrowUp } from 'lucide-react';
import { links, footerCopy } from '@/lib';
import Button from '@/components/ui/Button';
import TextureBackground from '@/components/ui/TextureBackground';

const FOOTER_COLUMNS = [
  {
    heading: 'Project',
    items: [
      { label: 'How it works', href: '#how' },
      { label: 'Attacks stopped', href: '#attacks' },
      { label: 'In action', href: '#screenshots' },
    ],
  },
  {
    heading: 'Resources',
    items: [
      { label: 'Run it locally', href: '#run' },
      { label: 'FAQ', href: '#faq' },
      { label: 'GitHub', href: links.github },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative flex min-h-dvh flex-col justify-between overflow-hidden bg-[#0A0E14] text-[#E7ECF3]">
      <TextureBackground src="/images/texture-server.jpg" opacity={0.18} />

      <div className="relative mx-auto w-full max-w-page px-6 pt-20 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-14 sm:flex-row sm:items-center">
          <h2 className="max-w-md font-display text-3xl font-semibold leading-tight">{footerCopy.ctaTitle}</h2>
          <Button href={links.dashboard} variant="primary" external>{footerCopy.ctaButton}</Button>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 py-16 sm:grid-cols-3">
          <div>
            <span className="font-mono text-sm font-semibold">BAC//Gateway</span>
            <p className="mt-3 max-w-55 text-xs leading-relaxed text-white/50">{footerCopy.tagline}</p>
            <p className="mt-3 max-w-55 text-xs leading-relaxed text-white/40">{footerCopy.credit}</p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <span className="text-xs font-semibold uppercase tracking-wide text-white/40">{col.heading}</span>
              <ul className="mt-4 flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm text-white/70 hover:text-white">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="mx-auto flex w-full max-w-page flex-col items-start gap-3 border-t border-white/10 px-6 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <span>{footerCopy.copyright}</span>
          <a href="#top" className="inline-flex items-center gap-1.5 hover:text-white">
            Back to top <ArrowUp size={13} />
          </a>
        </div>
        <div className="overflow-hidden pb-4">
          <span
            aria-hidden
            className="block select-none whitespace-nowrap text-center font-display text-[clamp(2rem,13vw,11rem)] font-bold leading-[0.85] tracking-tight text-white/6"
          >
            BAC GATEWAY
          </span>
        </div>
      </div>
    </footer>
  );
}