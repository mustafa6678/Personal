import type { Metadata } from 'next';
import AboutClient from './AboutClient';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: "About Us | Preston's Trusted Repair Studio",
  description:
    "Meet The Phone Shop Express & Repair Centre — Preston's local, technician-led repair studio committed to precision repairs and honest, expert advice.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    url: `${siteConfig.url}/about`,
    title: `About Us | ${siteConfig.name}`,
    description:
      "Meet The Phone Shop Express & Repair Centre — Preston's local, technician-led repair studio committed to precision repairs and honest, expert advice.",
  },
};

export default function Page() {
  return <AboutClient />;
}