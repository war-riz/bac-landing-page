import type { ReactNode } from 'react';

export type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  external?: boolean;
};

export type SectionHeadProps = {
  eyebrow: string;
  title: string;
  body?: string;
};
