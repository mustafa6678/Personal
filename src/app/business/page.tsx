import type { Metadata } from 'next';
import BusinessClient from './BusinessClient';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Business & Corporate Device Repair in Preston',
  description:
    'Fleet repair and maintenance plans for Preston businesses. Priority turnaround, volume pricing and secure data erasure for company phones, tablets and laptops.',
  alternates: { canonical: `${siteConfig.url}/business` },
  openGraph: {
    url: `${siteConfig.url}/business`,
    title: `Business & Corporate Device Repair in Preston | ${siteConfig.name}`,
    description:
      'Fleet repair and maintenance plans for Preston businesses. Priority turnaround, volume pricing and secure data erasure for company phones, tablets and laptops.',
  },
};

export default function Page() {
  return <BusinessClient />;
}