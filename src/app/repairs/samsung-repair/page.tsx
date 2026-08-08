import type { Metadata } from 'next';
import { Smartphone } from 'lucide-react';
import { ServiceLandingClient, type FAQ } from '@/components/repairs/ServiceLandingClient';
import { ServiceStructuredData } from '@/components/repairs/ServiceStructuredData';
import { siteConfig } from '@/lib/site-config';

const description =
  'Professional Samsung Galaxy repair in Preston. Screen, battery, charging port and back glass repairs with OEM-grade parts and a 12-month warranty.';

const faqs: FAQ[] = [
  {
    question: 'Which Samsung phones do you repair?',
    answer:
      'We repair the full Galaxy S, Note, A and Z (foldable) series, along with most other Samsung smartphone models.',
  },
  {
    question: 'Can you fix a cracked Samsung Galaxy screen?',
    answer:
      'Yes — screen and digitizer replacement is one of our most common Samsung repairs, typically completed same-day.',
  },
  {
    question: 'Do you repair Samsung foldable phones?',
    answer:
      'We can diagnose and repair many Galaxy Z Fold and Z Flip issues. Foldable screens are more specialist, so contact us with your model for a quote.',
  },
  {
    question: 'How much does Samsung repair cost?',
    answer:
      'Pricing depends on the model and the repair needed. Repairs start from £35 — contact us for a free, no-obligation quote.',
  },
  {
    question: 'Will my S Pen still work after a screen repair?',
    answer:
      'Yes. We test S Pen functionality, touch response and display quality on every Galaxy Note and S Ultra repair before it leaves our studio.',
  },
];

export const metadata: Metadata = {
  title: 'Samsung Repair in Preston',
  description,
  alternates: { canonical: `${siteConfig.url}/repairs/samsung-repair` },
  openGraph: {
    url: `${siteConfig.url}/repairs/samsung-repair`,
    title: `Samsung Repair in Preston | ${siteConfig.name}`,
    description,
  },
};

export default function Page() {
  return (
    <>
      <ServiceStructuredData
        serviceName="Samsung Repair"
        description={description}
        path="/repairs/samsung-repair"
        faqs={faqs}
      />
      <ServiceLandingClient
        icon={<Smartphone className="w-96 h-96" />}
        kicker="Samsung Galaxy Repair Preston"
        title={<>Samsung Repair <br /><span className="text-primary">in Preston.</span></>}
        intro="Screen restoration, battery replacement and technical diagnostics for the full Galaxy S, Note, A and Z series, using manufacturer-grade components."
        price="From £35"
        commonIssues={[
          'Cracked or shattered screen',
          'Battery draining quickly or swelling',
          'Charging port not connecting',
          'Camera not focusing or blurry photos',
          'Water or liquid damage',
          'Back glass cracked or lifting',
          'S Pen not responding',
          'Software faults and diagnostics',
        ]}
        faqs={faqs}
        relatedServices={[
          { title: 'iPhone Repair', href: '/repairs/iphone-repair' },
          { title: 'iPad & Tablet Repair', href: '/repairs/ipad-tablet-repair' },
          { title: 'Smartwatch Repair', href: '/repairs/smartwatch-repair' },
          { title: 'All Repair Services', href: '/repairs' },
        ]}
      />
    </>
  );
}
