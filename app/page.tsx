import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import HowItWorks from '@/components/sections/HowItWorks';
import AttackGrid from '@/components/sections/AttackGrid';
import Screenshots from '@/components/sections/Screenshots';
import RunItYourself from '@/components/sections/RunItYourself';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';
import GithubStars from '@/components/GithubStars';

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'BAC Gateway',
            applicationCategory: 'SecurityApplication',
            operatingSystem: 'Cross-platform',
            description:
              'A stack-agnostic reverse proxy that detects and blocks Broken Access Control attacks in real time.',
            url: 'https://bac-landing-page.vercel.app',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          }),
        }}
      />
      <main>
        <Navbar githubStars={<GithubStars />} />
        <Hero />
        <Stats />
        <HowItWorks />
        <AttackGrid />
        <Screenshots />
        <RunItYourself />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}