'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Smartphone, ArrowRight } from 'lucide-react';
import { Container, cn } from '@/components/ui';
import { motion, AnimatePresence } from 'framer-motion';

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
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push('/contact');
      }
    }
    setIsOpen(false);
  };

  const isActive = scrolled || !isHomePage;

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b',
      isActive 
        ? 'bg-white/80 backdrop-blur-xl border-slate-200 py-3' 
        : 'bg-transparent border-transparent py-4 md:py-6'
    )}>
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-violet-600 rounded-lg md:rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-violet-600/20">
              <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className={cn(
              "text-base md:text-xl font-black tracking-tighter transition-colors uppercase italic leading-none",
              isActive ? "text-slate-900" : "text-white"
            )}>
              ThePhoneShop<span className="text-violet-500">Express.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-violet-500 italic',
                  pathname === item.href 
                    ? 'text-violet-500' 
                    : isActive ? 'text-slate-600' : 'text-white/80'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" onClick={handleContactClick}>
              <button className={cn(
                "px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 group",
                isActive 
                  ? "bg-slate-900 text-white hover:bg-violet-600 shadow-xl shadow-slate-900/10" 
                  : "bg-white text-slate-900 hover:bg-violet-50 shadow-2xl shadow-white/10"
              )}>
                Contact
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={cn(
                "p-2 rounded-lg transition-colors",
                isActive ? "text-slate-900 hover:bg-slate-50" : "text-white hover:bg-white/10"
              )}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href === '/contact') handleContactClick(e);
                    else setIsOpen(false);
                  }}
                  className={cn(
                    "text-sm font-black uppercase italic p-4 rounded-xl transition-all flex items-center justify-between group",
                    pathname === item.href ? "bg-violet-50 text-violet-600" : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {item.name}
                  <ArrowRight className={cn(
                    "w-4 h-4 transition-all",
                    pathname === item.href ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  )} />
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <Link href="/contact" onClick={handleContactClick}>
                  <button className="w-full bg-violet-600 text-white p-5 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-violet-600/20 active:scale-95 transition-transform">
                    Start Your Inquiry
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
