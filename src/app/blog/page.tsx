import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '@/lib/blog-posts';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Repair Guides & Tips Blog',
  description:
    'Practical phone, tablet and laptop repair advice from The Phone Shop Express in Preston — cost guides, maintenance tips and buying advice.',
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    url: `${siteConfig.url}/blog`,
    title: `Repair Guides & Tips Blog | ${siteConfig.name}`,
    description:
      'Practical phone, tablet and laptop repair advice from The Phone Shop Express in Preston — cost guides, maintenance tips and buying advice.',
  },
};

export default function BlogPage() {
  return (
    <main className="pt-24 bg-white">
      <section className="py-20 md:py-28 bg-secondary text-white">
        <Container>
          <div className="max-w-3xl px-4">
            <p className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-6">
              The Repair Journal
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9] mb-8">
              Guides &amp; <span className="text-primary">Tips.</span>
            </h1>
            <p className="text-base md:text-xl text-gray-400 font-bold italic leading-relaxed">
              Practical, honest advice on repairing, maintaining and buying phones, tablets and laptops — from our technicians in Preston.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group p-8 bg-gray-50 border border-gray-100 rounded-[2rem] hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-500 flex flex-col"
              >
                <span className="inline-block w-fit px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
                  {post.category}
                </span>
                <h2 className="text-2xl font-black text-secondary uppercase italic tracking-tighter mb-4 leading-tight">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8 flex-1">
                  {post.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.dateDisplay}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
