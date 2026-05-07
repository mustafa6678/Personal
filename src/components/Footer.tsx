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
    <footer className="bg-white pt-32 pb-16 border-t border-slate-100">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Block */}
          <div className="md:col-span-5 p-16 bg-slate-950 text-white rounded-[3rem] flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 bg-violet-600 rounded-2xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-black tracking-tighter italic uppercase">
                  ThePhoneShop<span className="text-violet-500">Express.</span>
                </span>
              </Link>
              <p className="text-2xl font-black italic uppercase leading-tight mb-12 text-slate-400">
                Preston's leading <br />
                <span className="text-white">Technical studio.</span>
              </p>
            </div>
            
            <div className="flex gap-4">
              <Link href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-violet-600 transition-colors border border-white/10">
                <Facebook className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-violet-600 transition-colors border border-white/10">
                <Instagram className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-violet-600 transition-colors border border-white/10">
                <Twitter className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Contact Block */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-12 border border-slate-100 rounded-[2.5rem] bg-slate-50/50 hover:bg-white hover:border-violet-100 transition-all duration-500">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-10 italic">Inquiry Center</h3>
              <ul className="space-y-8">
                <li className="flex items-center gap-5">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Phone className="w-4 h-4 text-violet-600" />
                  </div>
                  <span className="font-black text-slate-900 uppercase italic text-sm">07459 763380</span>
                </li>
                <li className="flex items-center gap-5">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Mail className="w-4 h-4 text-violet-600" />
                  </div>
                  <span className="font-black text-slate-900 uppercase italic text-[10px] break-all leading-none">contact@thephoneshopexpress.co.uk</span>
                </li>
              </ul>
            </div>

            <div className="p-12 border border-slate-100 rounded-[2.5rem] bg-slate-50/50 hover:bg-white hover:border-violet-100 transition-all duration-500">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-10 italic">Business Hours</h3>
              <ul className="space-y-5">
                <li className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-500 uppercase italic">Mon - Fri</span>
                  <span className="font-black text-slate-900">08:00 - 18:00</span>
                </li>
                <li className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-500 uppercase italic">Sat</span>
                  <span className="font-black text-slate-900">08:00 - 15:00</span>
                </li>
                <li className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-500 uppercase italic">Sun</span>
                  <span className="font-black text-slate-900">Closed</span>
                </li>
              </ul>
            </div>

            {/* Navigation Block */}
            <div className="sm:col-span-2 p-8 border border-slate-100 rounded-[2rem] bg-white flex flex-wrap justify-center gap-12">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 hover:text-violet-600 transition-colors italic"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-slate-50">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            © {new Date().getFullYear()} ThePhoneShopExpress. Technical Excellence.
          </p>
          <div className="flex gap-10">
            <Link href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-slate-950 italic">Privacy Policy</Link>
            <Link href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-slate-950 italic">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
