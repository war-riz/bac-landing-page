import { links } from '@/lib/data';
import SparkleButton from '@/components/effects/SparkleButton';

function parseRepo(url: string) {
  const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
  return match ? { owner: match[1], repo: match[2] } : null;
}

export default async function GithubStars() {
  const parsed = parseRepo(links.github);
  let stars: number | undefined;

  if (parsed) {
    try {
      const res = await fetch(`https://api.github.com/repos/${parsed.owner}/${parsed.repo}`, {
        next: { revalidate: 3600 },
        headers: { Accept: 'application/vnd.github+json' },
      });
      if (res.ok) {
        const data = await res.json();
        if (typeof data.stargazers_count === 'number') stars = data.stargazers_count;
      }
    } catch {
      // silently falls back to no star count - doesn't break the page
    }
  }

  return <SparkleButton href={links.github} stars={stars} />;
}