'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui';
import { 
  Smartphone, 
  Gamepad2, 
  Tablet, 
  Monitor, 
  Tv, 
  Watch,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const detailedServices = [
  {
    title: 'Smartphone Restoration',
    description: 'Bespoke repair solutions for iPhone 13-16 Pro Max, Samsung S21-S24 Ultra, and Pixel flagship models. We specialize in panel replacement, logic board diagnostics, and certified power-cell restoration.',
    icon: Smartphone,
    color: 'bg-violet-50 text-violet-600',
    features: ['OEM Quality Panels', 'Same-Day Turnaround', 'Certified Waterproofing']
  },
  {
    title: 'Gaming Console Servicing',
    description: 'Precision mechanical and thermal maintenance for PlayStation 5, Xbox Series X/S, and Nintendo Switch. Expert handling of HDMI port restoration and high-performance thermal paste re-application.',
    icon: Gamepad2,
    color: 'bg-indigo-50 text-indigo-600',
    features: ['Thermal Overhaul', 'HDMI Port Repair', 'Controller Calibration']
  },
  {
    title: 'Professional Workstations',
    description: 'High-tier support for MacBook Pro/Air (M1-M3), high-end Windows laptops, and custom workstation towers. Services include liquid damage mitigation, keyboard restoration, and data recovery.',
    icon: Monitor,
    color: 'bg-blue-50 text-blue-600',
    features: ['Liquid Damage Recovery', 'SSD Upgrades', 'Display Calibration']
  },
  {
    title: 'Tablet Engineering',
    description: 'Specialized panel and battery restoration for iPad Pro, Air, and Mini lineups. We ensure full Apple Pencil compatibility and professional lamination for every display repair.',
    icon: Tablet,
    color: 'bg-emerald-50 text-emerald-600',
    features: ['Precision Lamination', 'Battery Optimization', 'Digitizer Repair']
  },
  {
    title: 'Panel Restoration (TV)',
    description: 'Expert diagnostics for 4K/8K OLED and QLED panels. We handle power-board failures, backlight restoration, and panel calibration for Sony, Samsung, and LG premium units.',
    icon: Tv,
    color: 'bg-rose-50 text-rose-600',
    features: ['Panel Calibration', 'Power Board Repair', 'Backlight Restoration']
  },
  {
    title: 'Wearable Precision',
    description: 'Micro-component repair for Apple Watch and Galaxy Watch series. Dedicated clean-room environment for display replacement and sensor calibration.',
    icon: Watch,
    color: 'bg-amber-50 text-amber-600',
    features: ['Clean-Room Environment', 'Sensor Calibration', 'Gasket Replacement']
  },
];

export default function RepairsPage() {
  return (
    <main className="pt-40">
      {/* Header Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-[1px] bg-violet-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-violet-600">Technical Solutions</span>
            </motion.div>
            <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter text-slate-950 uppercase italic leading-[0.8] mb-12">
              Bespoke <br />
              <span className="text-slate-200">Engineering.</span>
            </h1>
            <p className="text-2xl text-slate-500 font-bold leading-relaxed italic max-w-2xl">
              From micro-soldering to full ecosystem restoration, we provide the most advanced technical repairs in Preston.
            </p>
          </div>
        </Container>
      </section>

      {/* Trust Grid */}
      <section className="py-24 bg-slate-950 text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-violet-600 transition-colors duration-500">
                <Cpu className="w-7 h-7 text-violet-400 group-hover:text-white" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Methodology</p>
                <p className="text-lg font-black italic uppercase">OEM Components</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-violet-600 transition-colors duration-500">
                <ShieldCheck className="w-7 h-7 text-violet-400 group-hover:text-white" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Assurance</p>
                <p className="text-lg font-black italic uppercase">Lifetime Support</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-violet-600 transition-colors duration-500">
                <Zap className="w-7 h-7 text-violet-400 group-hover:text-white" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Efficiency</p>
                <p className="text-lg font-black italic uppercase">Express Delivery</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-40 bg-[#FAFAFA]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-16 bg-white border border-slate-100 rounded-[3.5rem] hover:border-violet-100 transition-all duration-500 flex flex-col"
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-12 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500 ${service.color}`}>
                  <service.icon className="w-10 h-10" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-slate-950 mb-8 tracking-tighter uppercase italic leading-none">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-500 font-bold leading-relaxed italic mb-12">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-12 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-slate-400 italic">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="w-full bg-slate-950 text-white p-8 rounded-[2rem] font-black uppercase tracking-[0.3em] text-[10px] hover:bg-violet-600 transition-all flex items-center justify-center gap-4 shadow-xl shadow-slate-950/10 group/btn"
                >
                  Start Inquiry
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white">
        <Container>
          <div className="p-20 bg-violet-600 text-white rounded-[4rem] text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-slate-950 opacity-0 group-hover:opacity-10 transition-opacity" />
            <h2 className="text-5xl lg:text-7xl font-black mb-10 tracking-tighter uppercase italic leading-none">
              Need immediate <br /> restoration?
            </h2>
            <p className="text-xl font-bold italic mb-12 opacity-80 max-w-xl mx-auto">
              Our technical center is ready to handle your most challenging repair needs with precision.
            </p>
            <Link href="/contact">
              <button className="px-16 py-6 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-950 hover:text-white transition-all shadow-2xl shadow-black/10">
                Book Appointment
              </button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
