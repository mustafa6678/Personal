import Link from 'next/link';
import { Container } from '@/components/ui';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Smartphone } from 'lucide-react';

const quickLinks = [
  { name: 'Index', href: '/' },
  { name: 'Repairs', href: '/repairs' },
  { name: 'Shop', href: '/buy-sell' },
  { name: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-white pt-20 md:pt-32 pb-12 md:pb-16 border-t border-slate-100">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          
          {/* Brand Block - Fixed for Mobile */}
          <div className="md:col-span-5 p-8 md:p-16 bg-slate-950 text-white rounded-[2rem] md:rounded-[3rem] flex flex-col justify-between overflow-hidden">
            <div>
              <Link href="/" className="flex items-center gap-2 md:gap-3 mb-8 md:mb-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-violet-600 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-sm md:text-xl font-black tracking-tighter italic uppercase leading-none truncate">
                  ThePhoneShop<span className="text-violet-500">Express.</span>
                </span>
              </Link>
              <p className="text-lg md:text-2xl font-black italic uppercase leading-tight mb-10 md:mb-12 text-slate-400">
                Preston's leading <br />
                <span className="text-white">Technical studio.</span>
              </p>
            </div>
            
            <div className="flex gap-4">
              <Link href="#" className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-violet-600 transition-colors border border-white/10">
                <Facebook className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-violet-600 transition-colors border border-white/10">
                <Instagram className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-violet-600 transition-colors border border-white/10">
                <Twitter className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Contact Block */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="p-8 md:p-12 border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] bg-slate-50/50 hover:bg-white hover:border-violet-100 transition-all duration-500">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 md:mb-10 italic">Inquiry Center</h3>
              <ul className="space-y-6 md:space-y-8">
                <li className="flex items-center gap-4 md:gap-5">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg md:rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-violet-600" />
                  </div>
                  <span className="font-black text-slate-900 uppercase italic text-xs md:text-sm">07459 763380</span>
                </li>
                <li className="flex items-center gap-4 md:gap-5">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg md:rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-violet-600" />
                  </div>
                  <span className="font-black text-slate-900 uppercase italic text-[8px] md:text-[10px] break-all leading-tight">contact@thephoneshopexpress.co.uk</span>
                </li>
              </ul>
            </div>

            <div className="p-8 md:p-12 border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] bg-slate-50/50 hover:bg-white hover:border-violet-100 transition-all duration-500">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 md:mb-10 italic">Business Hours</h3>
              <ul className="space-y-4 md:space-y-5">
                <li className="flex justify-between items-center text-[10px] md:text-xs">
                  <span className="font-bold text-slate-500 uppercase italic">Mon - Fri</span>
                  <span className="font-black text-slate-900">08:00 - 18:00</span>
                </li>
                <li className="flex justify-between items-center text-[10px] md:text-xs">
                  <span className="font-bold text-slate-500 uppercase italic">Sat</span>
                  <span className="font-black text-slate-900">08:00 - 15:00</span>
                </li>
                <li className="flex justify-between items-center text-[10px] md:text-xs">
                  <span className="font-bold text-slate-500 uppercase italic">Sun</span>
                  <span className="font-black text-slate-900 text-red-500">Closed</span>
                </li>
              </ul>
            </div>

            {/* Navigation Block */}
            <div className="sm:col-span-2 p-6 md:p-8 border border-slate-100 rounded-[1.5rem] md:rounded-[2rem] bg-white flex flex-wrap justify-center gap-8 md:gap-12">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-slate-400 hover:text-violet-600 transition-colors italic"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 pt-10 md:pt-12 border-t border-slate-50 text-center md:text-left">
          <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            © {new Date().getFullYear()} ThePhoneShopExpress.
          </p>
          <div className="flex gap-6 md:gap-10">
            <Link href="#" className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-slate-950 italic">Privacy</Link>
            <Link href="#" className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-slate-950 italic">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
