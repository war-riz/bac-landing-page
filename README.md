# BAC Gateway - Landing Page (Next.js + Tailwind)

Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, next-themes.
Fully modular components - every section is its own file, content lives in
one data file (`lib/data.ts`) so copy/link changes never touch JSX.

## Structure
```
app/
  layout.tsx       fonts, SEO metadata (OpenGraph/Twitter), theme provider
  page.tsx          composes the section components, nothing else
  globals.css       Tailwind layers + CSS-variable design tokens (dark/light)
  robots.ts         robots.txt route
  sitemap.ts        sitemap.xml route
components/
  Navbar.tsx, Hero.tsx, HowItWorks.tsx, AttackGrid.tsx,
  Screenshots.tsx, RunItYourself.tsx, Footer.tsx, ThemeToggle.tsx,
  TerminalFeed.tsx  the hero's animated "live" blocked/allowed log
  ui/               Button, SectionHead, AttackCard - small reusable primitives
lib/
  data.ts           attack types, flow steps, screenshots, links - single source of truth
public/screenshots/ drop your real PNGs here
```

## Run it
```
npm install
npm run dev
```
Opens at `http://localhost:3000`.

## Before you publish - 3 things to fix
1. **Screenshots**: copy `dashboard-dark.png`, `livefeed.png`, `ml-page.png`,
   `attackers-page.png` from your project's `docs/images/` into
   `public/screenshots/` - same filenames, referenced in `lib/data.ts`.
2. **Links**: `lib/data.ts` has `links.github` and `links.dashboard` at the
   top - set both to your real repo and deployed dashboard URL. That
   propagates to the nav, hero, run section, and footer automatically since
   they all read from this one file.
3. **SEO URL + OG image**: `app/layout.tsx` and `app/sitemap.ts` /
   `app/robots.ts` have a `YOUR-DASHBOARD.vercel.app` placeholder - replace
   with this landing page's own deployed URL once you have it. Add a
   `public/screenshots/og-image.png` (1200×630) for social-share previews.

## Deploy (Vercel)
```
npm i -g vercel
vercel
```
Framework is auto-detected - no config needed.

## Notes
- Theme toggle uses `next-themes`, class-based (`darkMode: 'class'` in
  `tailwind.config.ts`), defaults to dark, persists to localStorage automatically.
- `TerminalFeed.tsx` is simulated (`logSamples` in `lib/data.ts`) - swap the
  interval logic for a real WebSocket/events call later if you want this
  page to show live gateway traffic instead of a demo loop.
- All scroll animations respect `prefers-reduced-motion`.
