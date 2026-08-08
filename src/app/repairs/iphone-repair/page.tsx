import type { Metadata } from 'next';
import { Smartphone } from 'lucide-react';
import { ServiceLandingClient, type FAQ } from '@/components/repairs/ServiceLandingClient';
import { ServiceStructuredData } from '@/components/repairs/ServiceStructuredData';
import { siteConfig } from '@/lib/site-config';

const description =
  'Fast, reliable iPhone repair in Preston. Screen, battery, charging port and water damage repairs with OEM-grade parts and a 12-month warranty.';

const faqs: FAQ[] = [
  {
    question: 'How long does an iPhone screen repair take?',
    answer:
      'Most iPhone screen repairs are completed same-day, often within an hour while you wait in our Preston studio.',
  },
  {
    question: 'Do you use genuine Apple parts?',
    answer:
      'We use manufacturer-grade, OEM-quality parts for every repair, and every repair is backed by a 12-month warranty.',
  },
  {
    question: 'Which iPhone models do you repair?',
    answer:
      'We repair all iPhone models, from older SE and 8 series devices through to the latest iPhone Pro Max releases.',
  },
  {
    question: 'How much does it cost to repair an iPhone?',
    answer:
      'Pricing depends on the model and the repair needed. Repairs start from £35 — contact us for a free, no-obligation quote.',
  },
  {
    question: 'Do I need to book an appointment?',
    answer:
      'Walk-ins are welcome, but booking online guarantees your slot and lets us have the right parts ready when you arrive.',
  },
];

export const metadata: Metadata = {
  title: 'iPhone Repair in Preston',
  description,
  alternates: { canonical: `${siteConfig.url}/repairs/iphone-repair` },
  openGraph: {
    url: `${siteConfig.url}/repairs/iphone-repair`,
    title: `iPhone Repair in Preston | ${siteConfig.name}`,
    description,
  },
};

export default function Page() {
  return (
    <>
      <ServiceStructuredData
        serviceName="iPhone Repair"
        description={description}
        path="/repairs/iphone-repair"
        faqs={faqs}
      />
      <ServiceLandingClient
        icon={<Smartphone className="w-96 h-96" />}
        kicker="iPhone Repair Preston"
        title={<>iPhone Repair <br /><span className="text-primary">in Preston.</span></>}
        intro="Expert screen restoration, battery replacement and technical diagnostics for every iPhone model, using manufacturer-grade components and same-day turnaround."
        price="From £35"
        commonIssues={[
          'Cracked or shattered screen',
          'Battery draining quickly or swelling',
          'Charging port not connecting',
          'Camera not focusing or blurry photos',
          'Water or liquid damage',
          'Speaker or microphone not working',
          'Face ID or Touch ID issues',
          'Software faults and diagnostics',
        ]}
        faqs={faqs}
        relatedServices={[
          { title: 'Samsung Repair', href: '/repairs/samsung-repair' },
          { title: 'iPad & Tablet Repair', href: '/repairs/ipad-tablet-repair' },
          { title: 'Smartwatch Repair', href: '/repairs/smartwatch-repair' },
          { title: 'All Repair Services', href: '/repairs' },
        ]}
      />
    </>
  );
}
