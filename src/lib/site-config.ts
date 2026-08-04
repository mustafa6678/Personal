const address = {
  street: '592 Blackpool Road',
  locality: 'Ashton-on-Ribble',
  city: 'Preston',
  region: 'Lancashire',
  postalCode: 'PR2 1JA',
  country: 'GB',
};

const phoneDisplay = '+44 7459 763380';
const phoneHref = 'tel:+447459763380';

export const siteConfig = {
  name: 'The Phone Shop Express & Repair Centre',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.thephoneshopexpress.co.uk',
  description:
    'Professional phone, tablet, laptop and console repairs in Preston. Same-day iPhone and Samsung screen repair, battery replacement and more, with a 12-month warranty.',
  phone: phoneDisplay,
  phoneHref,
  email: 'tpshopexpress@gmail.com',
  address,
  addressSingleLine: `${address.street}, ${address.locality}, ${address.city} ${address.postalCode}`,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `The Phone Shop Express & Repair Centre, ${address.street}, ${address.locality}, ${address.city} ${address.postalCode}`
  )}`,
  social: {
    facebook: 'https://www.facebook.com/people/The-Phone-Shop-Express-Repair-Centre-Preston/61576472725808/',
    instagram: 'https://www.instagram.com/thephoneshopexpress/',
  },
  areasServed: [
    'Preston',
    'Leyland',
    'Chorley',
    'Blackburn',
    'Fulwood',
    'Bamber Bridge',
    'Kirkham',
    'Longridge',
    'Garstang',
    'Penwortham',
    'Lostock Hall',
    'Walton-le-Dale',
  ],
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { days: ['Saturday'], opens: '08:00', closes: '15:00' },
  ],
} as const;

export const absoluteUrl = (path: string) => new URL(path, siteConfig.url).toString();