import { LegalPageCopy } from '@/types'

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
  body: 'Real-time events, ML scoring, and attacker profiling',
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
  credit: 'Final year project · Abiola Ajimobi Technical University, Ibadan',
  copyright: '© 2026 BAC Gateway. Built as a research project.',
};

export const privacyCopy: LegalPageCopy = {
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  lastUpdated: 'Last updated August 24, 2026',
  intro:
    "BAC Gateway is an open-source final year research project. This policy covers the landing page you're on now and the reference dashboard/gateway deployment. If you self-host the gateway, most of the data below lives on your own infrastructure - we don't operate a central server collecting it on your behalf.",
  sections: [
    {
      id: 'data-we-collect',
      heading: 'Data we collect',
      body: [
        'Account data: username, email, company name, a hashed password, and an optional avatar image for admin accounts on a gateway deployment.',
        'Authentication & security data: session cookies, one-time sign-in codes, and login metadata (IP address, approximate location, timestamp) used to detect suspicious or new-location logins.',
        'Security event data: when the gateway sits in front of your app, it logs request metadata (source IP, endpoint, HTTP method, attack classification) needed to detect and report Broken Access Control attempts.',
      ],
    },
    {
      id: 'third-parties',
      heading: 'Third-party services',
      body: [
        'Gmail API (Google): sends transactional email - account verification, sign-in codes, password resets, security alerts.',
        'Cloudinary: stores uploaded avatar images.',
        'MaxMind GeoLite2: a local database bundled with the gateway; IP-to-location lookups happen on your own server and are not sent to a third party.',
        'AbuseIPDB (optional): only contacted if you add your own API key, to check blocked IPs against known-malicious lists.',
        'AI assistant (DeepSeek, Gemini, OpenAI, or Anthropic - whichever key you configure): sending a message to the in-dashboard assistant shares that conversation, and any live security data currently in view, with that provider under their own terms.',
      ],
    },
    {
      id: 'analytics',
      heading: 'Analytics on this site',
      body: [
        'This landing page uses Umami, a privacy-focused analytics tool that does not use cookies or track individuals across sites.',
      ],
    },
    {
      id: 'retention',
      heading: 'Data retention & deletion',
      body: [
        'For self-hosted deployments, data persists for as long as your own database retains it - you control deletion directly.',
      ],
    },
    {
      id: 'contact',
      heading: 'Contact',
      body: ['Questions about this policy: bacgateway.mail@gmail.com'],
    },
  ],
};

export const termsCopy: LegalPageCopy = {
  eyebrow: 'Legal',
  title: 'Terms of Service',
  lastUpdated: 'Last updated August 24, 2026',
  intro:
    'BAC Gateway is a proof-of-concept built for a final year research project. These terms cover the demo dashboard and the open-source project as a whole.',
  sections: [
    {
      id: 'about',
      heading: 'About this project',
      body: [
        "BAC Gateway is a working proof of concept, not a production-hardened product. It's provided to demonstrate real-time Broken Access Control detection, not as a commercial security service.",
      ],
    },
    {
      id: 'license',
      heading: 'License',
      body: ['The project is open source. See the LICENSE file in the GitHub repository for full terms.'],
    },
    {
      id: 'acceptable-use',
      heading: 'Acceptable use',
      body: [
        "Only use BAC Gateway, or its bundled vulnerable demo app, against systems you own or have explicit permission to test. Don't use it to attack third-party systems.",
      ],
    },
    {
      id: 'warranty',
      heading: 'No warranty',
      body: [
        'The software is provided "as is," without warranty of any kind. The maintainers are not liable for damages arising from its use.',
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to these terms',
      body: ['These terms may be updated as the project evolves. Continued use after changes means you accept them.'],
    },
    {
      id: 'contact',
      heading: 'Contact',
      body: ['Questions about these terms: bacgateway.mail@gmail.com'],
    },
  ],
};