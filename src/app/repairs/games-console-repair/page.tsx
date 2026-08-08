import type { Metadata } from 'next';
import { Gamepad2 } from 'lucide-react';
import { ServiceLandingClient, type FAQ } from '@/components/repairs/ServiceLandingClient';
import { ServiceStructuredData } from '@/components/repairs/ServiceStructuredData';
import { siteConfig } from '@/lib/site-config';

const description =
  'Games console repair in Preston. HDMI port replacement, thermal management and controller repairs for PS5, Xbox and Nintendo Switch with a 12-month warranty.';

const faqs: FAQ[] = [
  {
    question: 'Which consoles do you repair?',
    answer:
      'We repair PlayStation (PS4/PS5), Xbox (Series X/S, One) and Nintendo Switch consoles, including Switch Lite and OLED models.',
  },
  {
    question: 'Can you fix no HDMI output on my console?',
    answer:
      'Yes — HDMI port replacement is one of our most common console repairs, restoring picture and sound to your TV.',
  },
  {
    question: 'My Nintendo Switch Joy-Cons drift — can you fix that?',
    answer:
      'Yes, we repair Joy-Con drift and replace worn analog stick modules to restore accurate control.',
  },
  {
    question: 'Do you fix consoles that won\'t power on or keep overheating?',
    answer:
      'Yes, we diagnose and repair power faults, fan failures and overheating issues, including thermal paste replacement and deep cleaning.',
  },
  {
    question: 'How much does console repair cost?',
    answer:
      'Pricing depends on the console and the repair needed. Repairs start from £45 — contact us for a free, no-obligation quote.',
  },
];

export const metadata: Metadata = {
  title: 'Games Console Repair in Preston',
  description,
  alternates: { canonical: `${siteConfig.url}/repairs/games-console-repair` },
  openGraph: {
    url: `${siteConfig.url}/repairs/games-console-repair`,
    title: `Games Console Repair in Preston | ${siteConfig.name}`,
    description,
  },
};

export default function Page() {
  return (
    <>
      <ServiceStructuredData
        serviceName="Games Console Repair"
        description={description}
        path="/repairs/games-console-repair"
        faqs={faqs}
      />
      <ServiceLandingClient
        icon={<Gamepad2 className="w-96 h-96" />}
        kicker="Games Console Repair Preston"
        title={<>Games Console Repair <br /><span className="text-primary">in Preston.</span></>}
        intro="HDMI port replacement, thermal management and internal drive upgrades for PS5, Xbox and Nintendo Switch, tested before every return."
        price="From £45"
        commonIssues={[
          'No HDMI signal or picture',
          'Console won\'t power on',
          'Overheating or loud fan noise',
          'Disc drive not reading discs',
          'Joy-Con or controller stick drift',
          'Storage upgrade or replacement',
          'Charging port not working',
          'Software faults and diagnostics',
        ]}
        faqs={faqs}
        relatedServices={[
          { title: 'Laptop & MacBook Repair', href: '/repairs/laptop-macbook-repair' },
          { title: 'Smartwatch Repair', href: '/repairs/smartwatch-repair' },
          { title: 'iPhone Repair', href: '/repairs/iphone-repair' },
          { title: 'All Repair Services', href: '/repairs' },
        ]}
      />
    </>
  );
}
