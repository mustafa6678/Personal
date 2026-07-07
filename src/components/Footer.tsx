import Link from 'next/link';
import { Container } from '@/components/ui';
import { Phone, Mail, MapPin, Smartphone } from 'lucide-react';

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
              {/* Social icons placeholders */}
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-white/20 rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-8">Popular Repairs</h4>
            <ul className="space-y-4">
              {['iPhone Screen Repair', 'Samsung Battery Fix', 'iPad Glass Replacement', 'MacBook Keyboard Repair', 'Nintendo Switch HDMI'].map(item => (
                <li key={item}><Link href="#" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Book a Repair', 'Track Your Device', 'Business Accounts', 'About Us', 'Contact Support'].map(item => (
                <li key={item}><Link href="#" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-8">Visit Our Studio</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <p className="text-sm font-bold text-gray-400">592 Blackpool Road,<br />Ashton-on-Ribble, Preston</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <p className="text-sm font-bold text-gray-400">01772 123456</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <p className="text-sm font-bold text-gray-400">hello@thephoneshop.co.uk</p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Locations Grid */}
        <div className="py-12 border-b border-white/5">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 mb-8 text-center">Areas We Serve</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 text-center">
            {['Preston', 'Leyland', 'Chorley', 'Blackburn', 'Fulwood', 'Bamber Bridge', 'Kirkham', 'Longridge', 'Garstang', 'Penwortham', 'Lostock Hall', 'Walton-le-Dale'].map(loc => (
              <Link key={loc} href="#" className="text-[10px] font-bold text-gray-500 hover:text-primary uppercase tracking-tighter">{loc}</Link>
            ))}
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} The Phone Shop Express. All Rights Reserved.
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
