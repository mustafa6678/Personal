import { siteConfig, absoluteUrl } from '@/lib/site-config';

export function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ElectronicsStore',
    '@id': `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    image: absoluteUrl('/technical_repair_workbench_1778173028526.png'),
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    hasMap: siteConfig.mapsUrl,
    openingHoursSpecification: siteConfig.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: siteConfig.areasServed.map((name) => ({
      '@type': 'City',
      name,
    })),
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
  };

  const json = JSON.stringify(localBusiness).replace(/</g, '\\u003c');

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}