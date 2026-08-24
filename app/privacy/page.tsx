import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import LegalDocument from '@/components/sections/LegalDocument';
import { privacyCopy } from '@/lib/copy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How BAC Gateway collects, uses, and stores data across the landing page and reference deployment.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <LegalDocument copy={privacyCopy} />
      <Footer />
    </>
  );
}