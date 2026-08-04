import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `Phone, Laptop & Tablet Repair in Preston | ${siteConfig.name}`,
  description:
    'Same-day iPhone, Samsung, laptop and tablet repairs in Preston. Certified technicians, manufacturer-grade parts and a 12-month warranty. Book online today.',
  alternates: { canonical: siteConfig.url },
  openGraph: {
    url: siteConfig.url,
    title: `Phone, Laptop & Tablet Repair in Preston | ${siteConfig.name}`,
    description:
      'Same-day iPhone, Samsung, laptop and tablet repairs in Preston. Certified technicians, manufacturer-grade parts and a 12-month warranty.',
  },
};

export default function Page() {
  return <HomeClient />;
}