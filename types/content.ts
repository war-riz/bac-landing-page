export type LinkSet = {
  github: string;
  dashboard: string;
};

export type FlowStep = {
  n: string;
  title: string;
  body: string;
  image: string;
};

export type AttackType = {
  tag: string;
  title: string;
  body: string;
  image: string;
};

export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
};

export type LogEntry = {
  tag: 'block' | 'allow';
  msg: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
