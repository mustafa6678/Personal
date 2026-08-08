import type { Metadata } from 'next';
import { Tablet } from 'lucide-react';
import { ServiceLandingClient, type FAQ } from '@/components/repairs/ServiceLandingClient';
import { ServiceStructuredData } from '@/components/repairs/ServiceStructuredData';
import { siteConfig } from '@/lib/site-config';

const description =
  'iPad and tablet repair in Preston. Precision glass and digitizer replacement, battery repair and charging port fixes with a 12-month warranty.';

const faqs: FAQ[] = [
  {
    question: 'Which tablets do you repair?',
    answer:
      'We repair all iPad models (iPad, iPad Air, iPad Mini, iPad Pro), Samsung Galaxy Tab devices, and most other Android tablets.',
  },
  {
    question: 'Can a cracked iPad screen be repaired?',
    answer:
      'Yes — we replace the glass and digitizer as a precision repair, colour-calibrated to match the original display.',
  },
  {
    question: 'How long does a tablet screen repair take?',
    answer:
      'Most iPad and tablet screen repairs are completed same-day in our dust-free studio.',
  },
  {
    question: 'How much does tablet repair cost?',
    answer:
      'Pricing depends on the model and the repair needed. Repairs start from £40 — contact us for a free, no-obligation quote.',
  },
  {
    question: 'Do you replace tablet batteries?',
    answer:
      'Yes, we replace worn or swollen batteries in iPads and Android tablets, restoring full battery life.',
  },
];

export const metadata: Metadata = {
  title: 'iPad & Tablet Repair in Preston',
  description,
  alternates: { canonical: `${siteConfig.url}/repairs/ipad-tablet-repair` },
  openGraph: {
    url: `${siteConfig.url}/repairs/ipad-tablet-repair`,
    title: `iPad & Tablet Repair in Preston | ${siteConfig.name}`,
    description,
  },
};

export default function Page() {
  return (
    <>
      <ServiceStructuredData
        serviceName="iPad & Tablet Repair"
        description={description}
        path="/repairs/ipad-tablet-repair"
        faqs={faqs}
      />
      <ServiceLandingClient
        icon={<Tablet className="w-96 h-96" />}
        kicker="iPad & Tablet Repair Preston"
        title={<>iPad &amp; Tablet Repair <br /><span className="text-primary">in Preston.</span></>}
        intro="Precision glass replacement and digitizer restoration for iPad, Samsung Galaxy Tab and Android tablets, colour-calibrated in our dust-free studio."
        price="From £40"
        commonIssues={[
          'Cracked or shattered glass',
          'Unresponsive touch screen',
          'Battery draining quickly or swelling',
          'Charging port not connecting',
          'Home button or Face ID issues',
          'Speaker or microphone not working',
          'Water or liquid damage',
          'Software faults and diagnostics',
        ]}
        faqs={faqs}
        relatedServices={[
          { title: 'iPhone Repair', href: '/repairs/iphone-repair' },
          { title: 'Samsung Repair', href: '/repairs/samsung-repair' },
          { title: 'Laptop & MacBook Repair', href: '/repairs/laptop-macbook-repair' },
          { title: 'All Repair Services', href: '/repairs' },
        ]}
      />
    </>
  );
}
