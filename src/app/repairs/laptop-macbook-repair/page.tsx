import type { Metadata } from 'next';
import { Laptop } from 'lucide-react';
import { ServiceLandingClient, type FAQ } from '@/components/repairs/ServiceLandingClient';
import { ServiceStructuredData } from '@/components/repairs/ServiceStructuredData';
import { siteConfig } from '@/lib/site-config';

const description =
  'Laptop and MacBook repair in Preston. Keyboard replacement, liquid damage recovery, storage upgrades and data recovery with a 12-month warranty.';

const faqs: FAQ[] = [
  {
    question: 'Do you repair MacBooks?',
    answer:
      'Yes — we service MacBook, MacBook Air and MacBook Pro models, including keyboard replacement, battery service and liquid damage recovery.',
  },
  {
    question: 'Can you recover data from a damaged laptop?',
    answer:
      'In most cases, yes. We prioritise data integrity on every repair and can attempt recovery from failing or damaged drives.',
  },
  {
    question: 'Do you upgrade laptop storage or memory?',
    answer:
      'Yes, we fit SSD and RAM upgrades to speed up ageing laptops and Windows or macOS machines.',
  },
  {
    question: 'How much does laptop repair cost?',
    answer:
      'Pricing depends on the model and the repair needed. Repairs start from £65 — contact us for a free, no-obligation quote.',
  },
  {
    question: 'My laptop got wet — can it be saved?',
    answer:
      'Bring it in as soon as possible without powering it on. Many liquid-damaged laptops can be fully recovered if treated quickly.',
  },
];

export const metadata: Metadata = {
  title: 'Laptop & MacBook Repair in Preston',
  description,
  alternates: { canonical: `${siteConfig.url}/repairs/laptop-macbook-repair` },
  openGraph: {
    url: `${siteConfig.url}/repairs/laptop-macbook-repair`,
    title: `Laptop & MacBook Repair in Preston | ${siteConfig.name}`,
    description,
  },
};

export default function Page() {
  return (
    <>
      <ServiceStructuredData
        serviceName="Laptop & MacBook Repair"
        description={description}
        path="/repairs/laptop-macbook-repair"
        faqs={faqs}
      />
      <ServiceLandingClient
        icon={<Laptop className="w-96 h-96" />}
        kicker="Laptop & MacBook Repair Preston"
        title={<>Laptop &amp; MacBook Repair <br /><span className="text-primary">in Preston.</span></>}
        intro="Keyboard replacement, liquid damage recovery and storage upgrades for MacBooks, Windows laptops and professional workstations."
        price="From £65"
        commonIssues={[
          'Cracked or damaged screen',
          'Keyboard keys sticking or not responding',
          'Liquid or water damage',
          'Slow performance or storage upgrade needed',
          'Battery not holding charge',
          'Laptop won\'t power on or boot',
          'Overheating or fan noise',
          'Data recovery from failing drives',
        ]}
        faqs={faqs}
        relatedServices={[
          { title: 'iPad & Tablet Repair', href: '/repairs/ipad-tablet-repair' },
          { title: 'Games Console Repair', href: '/repairs/games-console-repair' },
          { title: 'Business Device Repair', href: '/business' },
          { title: 'All Repair Services', href: '/repairs' },
        ]}
      />
    </>
  );
}
