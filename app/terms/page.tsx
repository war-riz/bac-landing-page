import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import LegalDocument from '@/components/sections/LegalDocument';
import { termsCopy } from '@/lib/copy';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing use of BAC Gateway, its demo dashboard, and the open-source project.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <LegalDocument copy={termsCopy} />
      <Footer />
    </>
  );
}