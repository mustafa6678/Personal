import { siteConfig, absoluteUrl } from '@/lib/site-config';
import type { FAQ } from './ServiceLandingClient';

interface ServiceStructuredDataProps {
  serviceName: string;
  description: string;
  path: string;
  faqs: FAQ[];
}

export function ServiceStructuredData({ serviceName, description, path, faqs }: ServiceStructuredDataProps) {
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    name: `${serviceName} | ${siteConfig.name}`,
    description,
    url: absoluteUrl(path),
    provider: {
      '@type': 'ElectronicsStore',
      '@id': `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
    },
    areaServed: siteConfig.areasServed.map((name) => ({ '@type': 'City', name })),
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage).replace(/</g, '\\u003c') }}
      />
    </>
  );
}
