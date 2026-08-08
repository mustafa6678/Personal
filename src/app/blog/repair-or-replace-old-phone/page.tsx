import type { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { BlogStructuredData } from '@/components/blog/BlogStructuredData';
import { blogPosts } from '@/lib/blog-posts';
import { siteConfig } from '@/lib/site-config';

const meta = blogPosts.find((p) => p.slug === 'repair-or-replace-old-phone')!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `${siteConfig.url}/blog/${meta.slug}` },
  openGraph: {
    url: `${siteConfig.url}/blog/${meta.slug}`,
    title: `${meta.title} | ${siteConfig.name}`,
    description: meta.description,
    type: 'article',
    publishedTime: meta.date,
  },
};

export default function Page() {
  const related = blogPosts.filter((p) => p.slug !== meta.slug);

  return (
    <>
      <BlogStructuredData meta={meta} />
      <BlogPostLayout meta={meta} relatedPosts={related}>
        <p>
          It's the question we get asked in our Preston studio more than almost any other: is it
          worth repairing this phone, or should I just replace it? There's no single right answer —
          but there is a reliable way to think it through.
        </p>

        <h2>Start with the cost comparison</h2>
        <p>
          The simplest test: compare the repair cost to what a replacement or upgrade would actually
          cost you. As a rough rule of thumb, if a repair comes to less than around a third of the
          price of replacing the device, repairing is almost always the better financial decision —
          especially for a screen or battery repair, which addresses the most common failure points
          without touching anything else that's still working fine.
        </p>
        <p>
          If your device is a recent flagship, this is rarely a close call — a{' '}
          <Link href="/repairs/iphone-repair">cracked iPhone screen</Link> or a swollen Samsung
          battery is almost always cheaper to fix than to replace the whole phone.
        </p>

        <h2>Check your battery health first</h2>
        <p>
          Before deciding anything, check how degraded your battery actually is — it's often the
          real culprit behind a phone that "feels old." On iPhone, go to{' '}
          <strong>Settings → Battery → Battery Health &amp; Charging</strong> to see your maximum
          capacity as a percentage of original. On Android, this varies by manufacturer, but most
          have a battery diagnostics screen under <strong>Settings → Battery</strong>. A phone that
          seems sluggish or dies quickly is very often a battery problem, not a "needs a new phone"
          problem.
        </p>

        <h2>How old is too old?</h2>
        <p>
          Age alone isn't the deciding factor — software support is. Both Apple and major Android
          manufacturers support their flagship devices with security and OS updates for several years
          after release. As long as your phone is still receiving updates, there's no inherent reason
          it can't keep going with a repair or two. Once a device stops receiving security updates,
          that's a more meaningful signal that replacement is worth considering — independent of
          whether the hardware itself is repairable.
        </p>

        <h2>What repairs can (and can't) realistically fix</h2>
        <p>
          Screens, batteries, charging ports, cameras and speakers are all straightforward,
          cost-effective repairs on almost any device. Where it gets less clear-cut is significant
          logic board damage, usually from severe water damage or a very hard impact — those repairs
          are more involved, and at that point it's worth getting a proper diagnosis rather than
          guessing. We offer a free diagnosis specifically so you're deciding based on the real
          problem, not assuming the worst.
        </p>

        <h2>There's an environmental case for repairing, too</h2>
        <p>
          Electronic waste is a genuine problem, and every phone kept in use for an extra year or two
          is one less device in landfill and one less set of raw materials mined to replace it.
          Repairing is very often the more sustainable choice, not just the cheaper one.
        </p>

        <h2>When replacing (or trading in) makes more sense</h2>
        <p>
          If your phone is genuinely several generations behind, no longer receives updates, or the
          repair needed is a significant structural one, it can make more sense to put that money
          toward an upgrade instead. If that's the direction you're leaning, it's worth getting a
          trade-in valuation before you assume your old device is worthless — we buy and sell{' '}
          <Link href="/buy-sell">certified refurbished phones</Link> and can often offer more for your
          old device than you'd expect.
        </p>

        <h2>Not sure which applies to you?</h2>
        <p>
          Bring your device in for a free diagnosis and we'll give you an honest answer — including
          telling you when we think replacing is genuinely the better option. Every repair we do
          comes with a 12-month warranty and manufacturer-grade parts, so if repair is the right call,
          it's a decision you can make with confidence.
        </p>
      </BlogPostLayout>
    </>
  );
}
