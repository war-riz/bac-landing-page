'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return <div className="h-9 w-9 rounded-md border border-border" aria-hidden />;
  }

  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      aria-label="Toggle color theme"
      className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface text-ink-dim transition-colors hover:text-ink hover:border-ink-faint"
    >
      {isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}