import type { Metadata } from 'next';
import { Watch } from 'lucide-react';
import { ServiceLandingClient, type FAQ } from '@/components/repairs/ServiceLandingClient';
import { ServiceStructuredData } from '@/components/repairs/ServiceStructuredData';
import { siteConfig } from '@/lib/site-config';

const description =
  'Smartwatch and Apple Watch repair in Preston. Screen replacement, battery service and waterproof seal restoration with a 12-month warranty.';

const faqs: FAQ[] = [
  {
    question: 'Do you repair Apple Watch screens?',
    answer:
      'Yes — we replace cracked or shattered Apple Watch screens across all series, including seal restoration for water resistance.',
  },
  {
    question: 'Can you replace a smartwatch battery?',
    answer:
      'Yes, we replace worn batteries in Apple Watch and other flagship smartwatches to restore full charge life.',
  },
  {
    question: 'Will my watch still be water resistant after repair?',
    answer:
      'We restore the waterproof seal on every screen and battery repair and test water resistance before your watch is returned.',
  },
  {
    question: 'How much does smartwatch repair cost?',
    answer:
      'Pricing depends on the model and the repair needed. Repairs start from £30 — contact us for a free, no-obligation quote.',
  },
  {
    question: 'How long does a smartwatch repair take?',
    answer:
      'Most smartwatch screen and battery repairs are completed same-day in our Preston studio.',
  },
];

export const metadata: Metadata = {
  title: 'Smartwatch & Apple Watch Repair in Preston',
  description,
  alternates: { canonical: `${siteConfig.url}/repairs/smartwatch-repair` },
  openGraph: {
    url: `${siteConfig.url}/repairs/smartwatch-repair`,
    title: `Smartwatch & Apple Watch Repair in Preston | ${siteConfig.name}`,
    description,
  },
};

export default function Page() {
  return (
    <>
      <ServiceStructuredData
        serviceName="Smartwatch & Apple Watch Repair"
        description={description}
        path="/repairs/smartwatch-repair"
        faqs={faqs}
      />
      <ServiceLandingClient
        icon={<Watch className="w-96 h-96" />}
        kicker="Smartwatch Repair Preston"
        title={<>Smartwatch Repair <br /><span className="text-primary">in Preston.</span></>}
        intro="Technical battery replacement and screen restoration for Apple Watch and flagship smartwatches, with waterproof seal testing on every repair."
        price="From £30"
        commonIssues={[
          'Cracked or shattered screen',
          'Battery not holding charge',
          'Unresponsive touch screen',
          'Water resistance seal failure',
          'Strap connector or button issues',
          'Won\'t power on or charge',
          'Cracked back glass or sensor housing',
          'Software faults and diagnostics',
        ]}
        faqs={faqs}
        relatedServices={[
          { title: 'iPhone Repair', href: '/repairs/iphone-repair' },
          { title: 'Games Console Repair', href: '/repairs/games-console-repair' },
          { title: 'iPad & Tablet Repair', href: '/repairs/ipad-tablet-repair' },
          { title: 'All Repair Services', href: '/repairs' },
        ]}
      />
    </>
  );
}
