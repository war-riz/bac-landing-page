import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Script from 'next/script';
import ThemeProvider from '@/components/ThemeProvider';
import './globals.css';

const siteUrl = 'https://YOUR-DASHBOARD.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'BAC Gateway - Stop Broken Access Control before it reaches your app',
    template: '%s · BAC Gateway',
  },
  description:
    'A stack-agnostic reverse proxy that detects and blocks Broken Access Control attacks in real time - IDOR, forceful browsing, parameter tampering, privilege escalation, and inadequate auth.',
  keywords: [
    'broken access control',
    'IDOR detection',
    'API security gateway',
    'reverse proxy security',
    'OWASP access control',
    'privilege escalation detection',
  ],
  authors: [{ name: 'BAC Gateway' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'BAC Gateway - Stop Broken Access Control before it reaches your app',
    description:
      'Real-time detection for IDOR, forceful browsing, parameter tampering, privilege escalation, and inadequate auth.',
    siteName: 'BAC Gateway',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'BAC Gateway' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BAC Gateway - Stop Broken Access Control before it reaches your app',
    description:
      'Real-time detection for IDOR, forceful browsing, parameter tampering, privilege escalation, and inadequate auth.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
    <body className="font-body antialiased">
      <ThemeProvider>{children}</ThemeProvider>
      <Script
        src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        strategy="afterInteractive"
      />
    </body>
  </html>
  );
}
