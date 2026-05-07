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
        : 'bg-transparent border-transparent py-6'
    )}>
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-violet-600/20">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <span className={cn(
              "text-xl font-black tracking-tighter transition-colors uppercase italic",
              isActive ? "text-slate-900" : "text-white"
            )}>
              ThePhoneShop<span className="text-violet-500">Express.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-violet-500 italic',
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
                "px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-3 group",
                isActive 
                  ? "bg-slate-900 text-white hover:bg-violet-600 shadow-xl shadow-slate-900/10" 
                  : "bg-white text-slate-900 hover:bg-violet-50 shadow-2xl shadow-white/10"
              )}>
                Contact Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={cn(
                "p-2",
                isActive ? "text-slate-900" : "text-white"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href === '/contact') handleContactClick(e);
                    else setIsOpen(false);
                  }}
                  className="text-lg font-black uppercase italic text-slate-900 p-4 hover:bg-slate-50 rounded-2xl transition-colors flex items-center justify-between group"
                >
                  {item.name}
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
              <Link href="/contact" onClick={handleContactClick}>
                <button className="w-full bg-violet-600 text-white p-6 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">
                  Contact Now
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
