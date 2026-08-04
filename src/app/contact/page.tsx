import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact Us | Book a Repair in Preston',
  description: `Get in touch with ${siteConfig.name} — call, email or visit our studio at ${siteConfig.addressSingleLine} to book your repair.`,
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    url: `${siteConfig.url}/contact`,
    title: `Contact Us | ${siteConfig.name}`,
    description: `Get in touch with ${siteConfig.name} — call, email or visit our studio at ${siteConfig.addressSingleLine} to book your repair.`,
  },
};

export default function Page() {
  return <ContactClient />;
}