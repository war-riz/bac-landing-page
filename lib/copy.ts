export const heroCopy = {
  badge: 'Detection engine, live in this demo',
  titleBefore: 'Broken Access Control, caught ',
  titleHighlight: 'before',
  titleAfter: ' it reaches your app.',
  body: "BAC Gateway sits in front of your backend and asks two questions on every request: who is this, and do they own what they're asking for. Five detection modules and a TabNet ML layer flag IDOR, forceful browsing, parameter tampering, privilege escalation, and inadequate auth in real time.",
  primaryCta: 'Run it locally',
  secondaryCta: 'See how it works',
  note: "Stack-agnostic, not zero-touch: a ~10-line integration contract, no changes to your app's business logic.",
};

export const statsCopy = [
  { value: '5', label: 'Attack types detected' },
  { value: '100%', label: 'Detection rate across test scenarios' },
  { value: '~10', label: 'Lines to integrate a new app' },
  { value: '<50ms', label: 'Target added latency per request' },
];

export const howItWorksCopy = {
  eyebrow: 'Pipeline',
  title: 'Every request answers to the gateway first.',
  body: 'A fixed sequence, on every request, before it ever touches your application code.',
};

export const attackGridCopy = {
  eyebrow: 'Coverage',
  title: 'Five ways access control breaks: all detected.',
  body: 'Scroll to move through each one - the section stays pinned while you do.',
};

export const inActionCopy = {
  eyebrow: 'In action',
  title: 'Watch it catch an attack, live.',
  body: 'Real-time events, ML scoring, and attacker profiling - drop your own captures into /public/screenshots.',
};

export const runItCopy = {
  eyebrow: 'Try it',
  title: 'One command, full stack, local.',
  steps: [
    'Gateway, dashboard, and the deliberately vulnerable demo app (ScholarPortal) all start together.',
    'Attack it from the demo app and watch the dashboard flag and block each attempt live.',
    'No public deployment needed - everything runs on your machine.',
  ],
  cta: 'Full setup guide',
};

export const faqCopy = {
  eyebrow: 'FAQ',
  title: 'Questions worth answering upfront.',
  body: 'The things a panel or a security lead evaluating this for real would actually ask.',
};

export const footerCopy = {
  ctaTitle: 'Ready to see Broken Access Control get caught, live?',
  ctaButton: 'Open the live dashboard',
  tagline: 'A stack-agnostic reverse proxy built to prove Broken Access Control can be caught before it reaches your app - not just described in a paper.',
  credit: 'Final year project · Abiola Ajimobi First Technical University, Ibadan',
  copyright: '© 2026 BAC Gateway. Built as a research project.',
};