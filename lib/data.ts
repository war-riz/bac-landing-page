import type { LinkSet, FlowStep, AttackType, Screenshot, LogEntry, FaqItem } from '@/types';

export const links: LinkSet = {
  github: 'https://github.com/war-riz/bac-gateway',
  dashboard: 'https://YOUR-DASHBOARD.vercel.app',
};

export const flowSteps: FlowStep[] = [
  { n: '01', title: 'Request arrives', body: 'Traffic bound for your app hits the gateway first, as a reverse proxy.', image: '/illustrations/online-security.svg' },
  { n: '02', title: 'Session probe', body: "Gateway calls your app's /auth/me-style endpoint: is this request authenticated, and as whom?", image: '/illustrations/authentication.svg' },
  { n: '03', title: 'Resource check', body: 'A second call confirms ownership: does this user actually have rights to what they\u2019re requesting?', image: '/illustrations/private-files.svg' },
  { n: '04', title: 'Allow or block', body: 'Five rule-based detectors plus a TabNet model score the request; violations are blocked and logged.', image: '/illustrations/security-on.svg' },
];

export const attackTypes: AttackType[] = [
  { tag: 'IDOR', title: 'Insecure Direct Object Reference', body: "A user swaps an ID in the URL or payload and reaches another user's data, with no ownership check in the way.", image: '/illustrations/data-thief.svg' },
  { tag: 'Forceful browsing', title: 'Unlinked page access', body: 'A user reaches an admin or internal route directly by URL, skipping the navigation that was meant to gate it.', image: '/illustrations/unlock.svg' },
  { tag: 'Param tampering', title: 'Parameter tampering', body: "Hidden fields, prices, or role values are edited client-side and submitted as if they came from the server.", image: '/illustrations/hacker-mind.svg' },
  { tag: 'Priv. escalation', title: 'Privilege escalation', body: 'A standard user account performs an action or reaches a resource reserved for a higher-privileged role.', image: '/illustrations/firewall.svg' },
  { tag: 'Inadequate auth', title: 'Inadequate authentication', body: 'Expired, reused, or otherwise weak session state is accepted by the app when it should have been rejected.', image: '/illustrations/enter-password.svg' },
];

export const screenshots: Screenshot[] = [
  { src: '/screenshots/dashboard-dark.png', alt: 'Gateway dashboard, dark theme, showing live event stats', caption: 'Dashboard overview - dark theme' },
  { src: '/screenshots/livefeed.png', alt: 'Live feed of incoming requests and their allow/block outcome', caption: 'Live feed of gateway decisions' },
  { src: '/screenshots/ml-page.png', alt: 'ML detection page showing TabNet model scoring', caption: 'ML layer - TabNet risk scoring' },
  { src: '/screenshots/attackers-page.png', alt: 'Attacker profiles page grouping events by source', caption: 'Attacker profiling' },
];

export const logSamples: LogEntry[] = [
  { tag: 'block', msg: 'IDOR - user 214 requested resource owned by 88' },
  { tag: 'allow', msg: 'GET /api/submissions - session verified' },
  { tag: 'block', msg: 'Forceful browsing - /admin/dashboard, no session' },
  { tag: 'block', msg: 'Param tampering - role: user -> admin rejected' },
  { tag: 'allow', msg: 'GET /api/profile/142 - owner match confirmed' },
  { tag: 'block', msg: 'Privilege escalation - student token on /admin/*' },
  { tag: 'allow', msg: 'POST /api/checkout - resource check passed' },
  { tag: 'block', msg: 'Inadequate auth - expired session reused' },
  { tag: 'allow', msg: 'GET /api/notifications - session verified' },
  { tag: 'block', msg: 'IDOR - /api/download/93 requested by user 41' },
];

export const faqs: FaqItem[] = [
  {
    question: 'Does BAC Gateway work with any backend, out of the box?',
    answer: "It's stack-agnostic, not zero-touch. Your app exposes two small endpoints: a session probe and a resource-ownership check, roughly a 10-line integration contract. No changes to your app's business logic.",
  },
  {
    question: 'What attacks does it actually stop?',
    answer: 'Five Broken Access Control patterns: IDOR, forceful browsing, parameter tampering, privilege escalation, and inadequate authentication each backed by a dedicated detection module plus a TabNet ML layer for anomaly scoring.',
  },
  {
    question: 'Is this production-ready, or a proof of concept?',
    answer: "It's a working proof of concept built for a final year research project, with a full detection pipeline, real-time dashboard, and a Docker Compose setup you can run locally. Production hardening: rate limiting, high availability, secrets management is a next step, not something already solved.",
  },
  {
    question: 'Can I run it without deploying anything publicly?',
    answer: 'Yes; docker compose --profile local up -d starts the gateway, dashboard, and a deliberately vulnerable demo app together on your machine. Nothing needs to be public to see it working.',
  },
  {
    question: 'Where do I see it catch something live?',
    answer: "The dashboard's live feed shows every request the gateway scores, in real time, tagged allowed or blocked with the reason; that's the fastest way to see the detection modules working.",
  },
  {
    question: 'Does the dashboard have an AI assistant?',
    answer: "Yes; a built-in assistant (DeepSeek R1, with Gemini as fallback) that can explain flagged events, walk through what a detection module caught, and navigate the dashboard on your behalf. It's for admins using the dashboard, not a public chatbot on this page.",
  },
];