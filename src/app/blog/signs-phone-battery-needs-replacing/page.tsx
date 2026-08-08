import type { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { BlogStructuredData } from '@/components/blog/BlogStructuredData';
import { blogPosts } from '@/lib/blog-posts';
import { siteConfig } from '@/lib/site-config';

const meta = blogPosts.find((p) => p.slug === 'signs-phone-battery-needs-replacing')!;

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
          Every phone battery degrades over time — it's simple lithium-ion chemistry, not a fault.
          But knowing the warning signs means you can replace it before it becomes a real problem,
          rather than after your phone has already started letting you down.
        </p>

        <h2>1. Your battery drains much faster than it used to</h2>
        <p>
          If you're charging significantly more often than you used to, for the same kind of usage,
          that's the clearest sign of a degrading battery. This is different from a temporary drain
          caused by a rogue app — if it's been gradual and consistent over months, it's almost always
          the battery itself.
        </p>

        <h2>2. Your phone shuts off before it reaches 0%</h2>
        <p>
          A phone that suddenly powers off at 20%, 30%, or even higher, and then shows a different
          percentage (or 0%) when you turn it back on, is a classic sign the battery can no longer
          deliver consistent power under load.
        </p>

        <h2>3. Unexpected restarts or shutdowns</h2>
        <p>
          Random restarts, especially during demanding tasks like the camera or a game, often point
          to a battery that can't supply enough current, causing the phone to protect itself by
          shutting down.
        </p>

        <h2>4. The battery percentage jumps around</h2>
        <p>
          Jumping from 40% to 15% in a matter of minutes — with no heavy use in between — usually
          means the battery's ability to hold and report an accurate charge has deteriorated.
        </p>

        <h2>5. Your phone runs hot during normal use or charging</h2>
        <p>
          Some warmth during charging or heavy use is normal. A phone that consistently runs hot
          during light, everyday use is worth having checked.
        </p>

        <h2>6. Battery health tools show reduced capacity</h2>
        <p>
          On iPhone, check <strong>Settings → Battery → Battery Health &amp; Charging</strong> — this
          shows your battery's maximum capacity as a percentage of when it was new. Once this drops
          meaningfully, you'll usually notice some of the symptoms above. Android battery diagnostics
          vary by manufacturer, but most phones have an equivalent screen under battery settings.
        </p>

        <h2>7. Visible swelling</h2>
        <p>
          If the back of your phone looks like it's lifting, bulging, or the screen appears to be
          pushing outward, stop using the device immediately and have it looked at. A swollen battery
          is a genuine safety issue, not just a performance one.
        </p>

        <h2>Should you replace it yourself?</h2>
        <p>
          Phone batteries need to be removed and disposed of carefully, and getting the reassembly
          wrong can damage waterproofing seals or other components. Professional replacement — with
          the old battery disposed of safely and the repair backed by a warranty — is almost always
          the better choice over a DIY kit, particularly for anything showing signs of swelling.
        </p>
        <p>
          We replace batteries in{' '}
          <Link href="/repairs/iphone-repair">iPhones</Link>,{' '}
          <Link href="/repairs/samsung-repair">Samsung phones</Link>,{' '}
          <Link href="/repairs/ipad-tablet-repair">tablets</Link> and{' '}
          <Link href="/repairs/smartwatch-repair">smartwatches</Link>, all backed by our 12-month
          warranty. If you're not sure whether your battery is the problem, bring it in for a free
          diagnosis and we'll tell you honestly what's going on.
        </p>
      </BlogPostLayout>
    </>
  );
}
