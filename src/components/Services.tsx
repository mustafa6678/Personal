'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui';
import { 
  Smartphone, 
  Gamepad2, 
  Tablet, 
  Monitor, 
  Tv, 
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Screen & Battery',
    description: 'Cracked screen? Battery draining? We offer express replacement for all iPhone and Samsung models.',
    icon: Smartphone,
    color: 'bg-violet-50 text-violet-600',
    price: 'From £35'
  },
  {
    title: 'Console Repair',
    description: 'HDMI port repair, thermal cleaning, and disk drive servicing for PS5, Xbox, and Nintendo Switch.',
    icon: Gamepad2,
    color: 'bg-indigo-50 text-indigo-600',
    price: 'From £45'
  },
  {
    title: 'iPad & Tablets',
    description: 'Digitizer replacement and internal servicing for all iPad generations and Android tablets.',
    icon: Tablet,
    color: 'bg-emerald-50 text-emerald-600',
    price: 'From £40'
  },
  {
    title: 'Laptop Services',
    description: 'Liquid damage recovery, keyboard replacement, and Windows/MacOS software restoration.',
    icon: Monitor,
    color: 'bg-blue-50 text-blue-600',
    price: 'From £50'
  },
  {
    title: 'TV Board Repair',
    description: 'Component-level repair for power boards and main boards on OLED/LED smart televisions.',
    icon: Tv,
    color: 'bg-rose-50 text-rose-600',
    price: 'Free Quote'
  },
  {
    title: 'Buy & Sell',
    description: 'Turn your old or broken device into cash. Instant valuations and technical trade-in credit.',
    icon: RotateCcw,
    color: 'bg-amber-50 text-amber-600',
    price: 'Cash Paid'
  },
];

export function Services() {
  return (
    <section className="py-40 bg-white" id="repairs">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-violet-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-violet-600">Specialist Repairs</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl lg:text-8xl font-black tracking-tighter text-slate-950 uppercase italic leading-[0.9]"
            >
              Expert <br />
              <span className="text-slate-200">Solutions.</span>
            </motion.h2>
          </div>
          <p className="text-xl text-slate-500 font-bold leading-relaxed max-w-sm italic">
            Fast, reliable, and guaranteed repairs for all your personal electronics. No appointment needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-12 border border-slate-100 rounded-[2.5rem] bg-white hover:border-violet-200 hover:shadow-2xl hover:shadow-violet-600/5 transition-all duration-500 flex flex-col h-full"
            >
              <div className="mb-10">
                <div className="flex justify-between items-start mb-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500 ${service.color}`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className="px-4 py-2 bg-slate-50 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                    {service.price}
                  </div>
                </div>
                <h3 className="text-3xl font-black text-slate-950 mb-6 tracking-tighter uppercase italic leading-tight">
                  {service.title}
                </h3>
                <p className="text-slate-500 font-bold leading-relaxed italic">
                  {service.description}
                </p>
              </div>
              
              <div className="mt-auto pt-10 flex items-center justify-between border-t border-slate-50">
                <Link
                  href="/contact"
                  className="text-xs font-black uppercase tracking-[0.3em] text-violet-600 flex items-center gap-2 group/link"
                >
                  Book Repair
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </Link>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-black text-slate-400">{(index + 1).toString().padStart(2, '0')}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
