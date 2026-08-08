export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date, e.g. '2026-08-05'
  dateDisplay: string; // e.g. '5 August 2026'
  category: string;
  readTime: string;
}

// Newest first. Keep this in sync with each post's own page.tsx metadata —
// this registry only drives the /blog listing, sitemap, and related-post links.
export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'repair-or-replace-old-phone',
    title: 'Repair or Replace? How to Decide What to Do With an Old Phone',
    description:
      'A simple framework for deciding whether to repair, replace or trade in an ageing phone — covering cost, battery health, age and long-term value.',
    date: '2026-08-05',
    dateDisplay: '5 August 2026',
    category: 'Buying Advice',
    readTime: '5 min read',
  },
  {
    slug: 'screen-repair-cost-guide',
    title: 'How Much Does a Cracked Screen Repair Really Cost?',
    description:
      'What actually drives the price of a phone screen repair, why quotes vary so much between shops, and how to avoid overpaying.',
    date: '2026-08-05',
    dateDisplay: '5 August 2026',
    category: 'Cost Guides',
    readTime: '4 min read',
  },
  {
    slug: 'signs-phone-battery-needs-replacing',
    title: '7 Signs Your Phone Battery Needs Replacing',
    description:
      'The warning signs of a failing phone battery — from rapid drain to sudden shutdowns and swelling — and what to do about each one.',
    date: '2026-08-05',
    dateDisplay: '5 August 2026',
    category: 'Maintenance Tips',
    readTime: '4 min read',
  },
];
