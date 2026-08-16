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
  );
}