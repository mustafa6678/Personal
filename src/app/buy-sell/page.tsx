import type { Metadata } from 'next';
import BuySellClient from './BuySellClient';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Buy & Sell Refurbished Phones in Preston',
  description:
    'Buy certified refurbished iPhones and Samsung phones, or trade in your old device for an instant quote at The Phone Shop Express in Preston. 12-month warranty on every unit.',
  alternates: { canonical: `${siteConfig.url}/buy-sell` },
  openGraph: {
    url: `${siteConfig.url}/buy-sell`,
    title: `Buy & Sell Refurbished Phones in Preston | ${siteConfig.name}`,
    description:
      'Buy certified refurbished iPhones and Samsung phones, or trade in your old device for an instant quote. 12-month warranty on every unit.',
  },
};

export default function Page() {
  return <BuySellClient />;
}