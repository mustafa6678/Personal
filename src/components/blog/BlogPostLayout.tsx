import Link from 'next/link';
import { Container, Button } from '@/components/ui';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/blog-posts';

interface BlogPostLayoutProps {
  meta: BlogPostMeta;
  children: React.ReactNode;
  relatedPosts: BlogPostMeta[];
}

export function BlogPostLayout({ meta, children, relatedPosts }: BlogPostLayoutProps) {
  return (
    <main className="pt-24 bg-white">
      <article>
        <section className="py-16 md:py-24 bg-white border-b border-gray-100">
          <Container>
            <div className="max-w-3xl mx-auto px-4">
              <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-primary transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
                {meta.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-secondary uppercase italic leading-[0.95] mb-8">
                {meta.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed mb-8">
                {meta.description}
              </p>
              <div className="flex items-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {meta.dateDisplay}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {meta.readTime}</span>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto px-4 prose-content">
              {children}
            </div>
          </Container>
        </section>
      </article>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-secondary uppercase italic leading-[0.95] mb-8">
              Got a device that needs fixing?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/#book" size="lg" className="rounded-full px-10">Book Your Repair</Button>
              <Button href="/contact" variant="outline" size="lg" className="rounded-full px-10">Ask a Question</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto px-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8">More From the Blog</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:border-primary/30 hover:bg-white hover:shadow-lg transition-all"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">{post.category}</span>
                    <h4 className="text-lg font-black text-secondary uppercase italic tracking-tight mt-2 mb-3 leading-tight">
                      {post.title}
                    </h4>
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-primary transition-colors flex items-center gap-1">
                      Read More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}
