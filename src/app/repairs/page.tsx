import type { Metadata } from 'next';
import RepairsClient from './RepairsClient';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Repair Services & Pricing',
  description:
    'Expert repairs for smartphones, tablets, laptops, consoles and smartwatches in Preston. Transparent pricing, OEM-grade parts and a 12-month warranty.',
  alternates: { canonical: `${siteConfig.url}/repairs` },
  openGraph: {
    url: `${siteConfig.url}/repairs`,
    title: `Repair Services & Pricing | ${siteConfig.name}`,
    description:
      'Expert repairs for smartphones, tablets, laptops, consoles and smartwatches in Preston. Transparent pricing, OEM-grade parts and a 12-month warranty.',
  },
};

export default function Page() {
  return <RepairsClient />;
}