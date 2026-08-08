import Link from 'next/link';
import { Container } from '@/components/ui';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-white/10">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="flex flex-col leading-none">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase italic">
                  THE<span className="text-primary ml-1">PHONE SHOP</span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary -mt-1 ml-1">Express</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs">
              Preston's leading technical studio for mobile, tablet, and computer restoration. 
              Certified repairs with manufacturer-grade components.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Phone Shop Express on Facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-4 h-4 text-white/70" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Phone Shop Express on Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-4 h-4 text-white/70" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-8">Popular Repairs</h4>
            <ul className="space-y-4">
              {[
                { name: 'iPhone Screen Repair', href: '/repairs/iphone-repair' },
                { name: 'Samsung Battery Fix', href: '/repairs/samsung-repair' },
                { name: 'iPad Glass Replacement', href: '/repairs/ipad-tablet-repair' },
                { name: 'MacBook Keyboard Repair', href: '/repairs/laptop-macbook-repair' },
                { name: 'Nintendo Switch HDMI', href: '/repairs/games-console-repair' },
              ].map(item => (
                <li key={item.name}><Link href={item.href} className="text-sm font-bold text-gray-400 hover:text-white transition-colors">{item.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Book a Repair', href: '/#book' },
                { name: 'Business Accounts', href: '/business' },
                { name: 'Repair Blog', href: '/blog' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact Support', href: '/contact' },
              ].map(item => (
                <li key={item.name}><Link href={item.href} className="text-sm font-bold text-gray-400 hover:text-white transition-colors">{item.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-8">Visit Our Studio</h4>
            <div className="space-y-4">
              <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <p className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">
                  {siteConfig.address.street},<br />{siteConfig.address.locality}, {siteConfig.address.city}<br />{siteConfig.address.postalCode}
                </p>
              </a>
              <a href={siteConfig.phoneHref} className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <p className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{siteConfig.phone}</p>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <p className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{siteConfig.email}</p>
              </a>
            </div>
          </div>
        </div>

        {/* SEO Locations Grid */}
        <div className="py-12 border-b border-white/5">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 mb-8 text-center">Areas We Serve</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 text-center">
            {siteConfig.areasServed.map(loc => (
              <Link key={loc} href="/contact" className="text-[10px] font-bold text-gray-500 hover:text-primary uppercase tracking-tighter">{loc}</Link>
            ))}
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="#" className="text-[10px] font-bold text-gray-500 hover:text-white uppercase tracking-widest">Privacy Policy</Link>
            <Link href="#" className="text-[10px] font-bold text-gray-500 hover:text-white uppercase tracking-widest">Terms of Service</Link>
            <Link href="#" className="text-[10px] font-bold text-gray-500 hover:text-white uppercase tracking-widest">Cookie Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
