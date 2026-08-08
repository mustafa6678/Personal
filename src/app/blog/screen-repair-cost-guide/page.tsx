import type { Metadata } from 'next';
import Link from 'next/link';
import { BlogPostLayout } from '@/components/blog/BlogPostLayout';
import { BlogStructuredData } from '@/components/blog/BlogStructuredData';
import { blogPosts } from '@/lib/blog-posts';
import { siteConfig } from '@/lib/site-config';

const meta = blogPosts.find((p) => p.slug === 'screen-repair-cost-guide')!;

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
          Ask three repair shops for a screen repair quote and you'll often get three different
          prices. That's not necessarily a red flag — but it does mean it's worth understanding what
          actually drives the cost, so you know whether a quote is fair.
        </p>

        <h2>What determines the price</h2>
        <p>
          Four things mostly explain the variation between quotes:
        </p>
        <ul>
          <li><strong>The device and model.</strong> Newer, larger-screen flagship devices with more advanced displays cost more to source parts for than older or budget models.</li>
          <li><strong>Screen technology.</strong> OLED and AMOLED displays (common on newer iPhones and Samsung flagships) are more expensive than the LCD screens found on older or entry-level devices.</li>
          <li><strong>Part quality.</strong> Genuine and manufacturer-grade parts cost more than unbranded aftermarket parts — but the difference usually shows up in touch accuracy, colour reproduction and how long the repair lasts.</li>
          <li><strong>Labour and diagnostics.</strong> Some repairs are more involved than others depending on how the device is built — some models require significantly more disassembly than others.</li>
        </ul>

        <h2>Why the cheapest quote isn't always the best value</h2>
        <p>
          A very low quote is usually a sign of a low-quality aftermarket part rather than a great
          deal. Cheap screens can have noticeably worse touch sensitivity, dimmer or less accurate
          colour, and a shorter lifespan — sometimes failing again within months. It's worth asking
          any shop directly what grade of part they're fitting before you decide based on price alone.
        </p>

        <h2>Typical starting prices</h2>
        <p>
          As a general guide, here's what screen and general repairs tend to start from across device
          categories at our Preston studio:
        </p>
        <ul>
          <li><Link href="/repairs/iphone-repair">iPhone repair</Link> — from £35</li>
          <li><Link href="/repairs/samsung-repair">Samsung repair</Link> — from £35</li>
          <li><Link href="/repairs/ipad-tablet-repair">iPad &amp; tablet repair</Link> — from £40</li>
          <li><Link href="/repairs/smartwatch-repair">Smartwatch repair</Link> — from £30</li>
          <li><Link href="/repairs/laptop-macbook-repair">Laptop &amp; MacBook repair</Link> — from £65</li>
          <li><Link href="/repairs/games-console-repair">Games console repair</Link> — from £45</li>
        </ul>
        <p>
          These are starting prices — the exact cost depends on your specific model and the repair
          needed, which is why we always give a free, no-obligation quote before any work begins.
        </p>

        <h2>Red flags when comparing quotes</h2>
        <ul>
          <li>No warranty offered on the repair.</li>
          <li>A price that's dramatically lower than every other quote, with no explanation for the difference.</li>
          <li>No proper diagnosis before quoting — a fair quote should be based on your specific device and fault, not a guess.</li>
          <li>Reluctance to say what quality of part they're using.</li>
        </ul>

        <h2>What a fair quote should include</h2>
        <p>
          A trustworthy repair quote should be based on a proper diagnosis, use manufacturer-grade
          parts, and be backed by a genuine warranty. Every repair we carry out comes with a 12-month
          warranty and our no fix, no fee guarantee — if we can't fix it, you don't pay for the
          attempt.
        </p>
      </BlogPostLayout>
    </>
  );
}
