'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Smartphone, ArrowRight, ChevronRight } from 'lucide-react';
import { Container, cn, Button } from '@/components/ui';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/lib/site-config';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Technical Repairs', href: '/repairs' },
  { name: 'Shop Units', href: '/buy-sell' },
  { name: 'Consultation', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const section = document.getElementById('booking-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    } else {
      router.push('/#booking-section');
    }
  };

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
      scrolled 
        ? 'bg-white border-gray-100 py-4 shadow-sm' 
        : 'bg-white/90 backdrop-blur-md border-transparent py-5'
    )}>
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="flex flex-col leading-none">
              <span className="text-xl md:text-2xl font-black tracking-tighter text-secondary uppercase italic">
                THE<span className="text-primary ml-1">PHONE SHOP</span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary -mt-1 ml-1">Express</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="relative group/menu">
              <button className="flex items-center gap-1 text-xs font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors cursor-pointer">
                We Repair <ChevronRight className="w-3 h-3 rotate-90" />
              </button>
              {/* Mega Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-4 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:translate-y-0 group-hover/menu:pointer-events-auto transition-all duration-300 z-50">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 w-[700px] grid grid-cols-3 gap-10">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-6">Mobile Phones</h4>
                    <ul className="space-y-4">
                      {['iPhone', 'Samsung', 'Google Pixel', 'Huawei', 'OnePlus'].map(item => (
                        <li key={item}><button onClick={() => scrollToBooking()} className="text-xs font-bold text-gray-500 hover:text-primary transition-colors">{item}</button></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-6">Tablets & More</h4>
                    <ul className="space-y-4">
                      {['iPad', 'Samsung Tab', 'Surface Pro', 'Apple Watch', 'Nintendo Switch'].map(item => (
                        <li key={item}><button onClick={() => scrollToBooking()} className="text-xs font-bold text-gray-500 hover:text-primary transition-colors">{item}</button></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-6">Computers</h4>
                    <ul className="space-y-4">
                      {['MacBook', 'iMac', 'Windows Laptop', 'PC Build', 'Data Recovery'].map(item => (
                        <li key={item}><button onClick={() => scrollToBooking()} className="text-xs font-bold text-gray-500 hover:text-primary transition-colors">{item}</button></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            { [
              { name: 'Buy & Sell', href: '/buy-sell' },
              { name: 'Business', href: '/business' },
              { name: 'Blog', href: '/blog' },
              { name: 'About', href: '/about' },
              { name: 'Contact', href: '/contact' }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 border-l border-gray-100 pl-8">
              <a href={siteConfig.phoneHref} className="text-right">
                <p className="text-[8px] font-black uppercase tracking-widest text-gray-400">Call Us</p>
                <p className="text-xs font-black text-secondary">{siteConfig.phone}</p>
              </a>

              <Button onClick={() => scrollToBooking()} size="sm" className="px-6 rounded-full text-[10px] font-black uppercase tracking-widest active:scale-95 transition-transform">
                Book Repair
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-secondary active:scale-90 transition-transform">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'We Repair', href: '/#booking-section' },
                { name: 'Buy & Sell', href: '/buy-sell' },
                { name: 'Business', href: '/business' },
                { name: 'Blog', href: '/blog' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)} 
                  className="text-left text-sm font-black uppercase tracking-widest text-secondary p-4 hover:bg-gray-50 rounded-2xl transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button onClick={() => scrollToBooking()} className="w-full py-5 mt-4 rounded-2xl font-black uppercase tracking-widest text-xs">
                Book Repair Now
              </Button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


