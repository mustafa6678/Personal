'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui';
import {
  Smartphone,
  Gamepad2,
  Laptop,
  Watch,
  Tablet,
  Speaker,
  CheckCircle2,
  ArrowRight,
  Clock,
  Shield,
  Zap
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Smartphone,
    title: 'Flagship Smartphones',
    desc: 'Expert screen restoration, battery optimization, and logic board diagnostics for iPhone and Samsung.',
    price: 'From £35',
    features: ['OEM Grade Parts', '1-Hour Express', '12mo Warranty']
  },
  {
    icon: Gamepad2,
    title: 'Gaming Consoles',
    desc: 'HDMI port replacement, thermal management, and internal drive upgrades for PS5, Xbox, and Switch.',
    price: 'From £45',
    features: ['Deep Cleaning', 'Technical Diagnostics', 'Fast Return']
  },
  {
    icon: Laptop,
    title: 'Laptops & MacBooks',
    desc: 'Keyboard replacement, liquid damage recovery, and storage upgrades for professional workstations.',
    price: 'From £65',
    features: ['Data Integrity', 'Certified Components', 'Free Quote']
  },
  {
    icon: Tablet,
    title: 'Tablets & iPads',
    desc: 'Precision glass replacement and digitizer restoration for all professional tablet ecosystems.',
    price: 'From £40',
    features: ['Dust-Free Studio', 'Color Calibrated', 'Same-Day']
  },
  {
    icon: Watch,
    title: 'Smartwatches',
    desc: 'Technical battery replacement and screen restoration for Apple Watch and flagship wearables.',
    price: 'From £30',
    features: ['Waterproof Testing', 'Seal Restoration', 'Technical Fix']
  },
  {
    icon: Speaker,
    title: 'Audio Systems',
    desc: 'Charging port and driver restoration for premium headphones and high-fidelity audio equipment.',
    price: 'From £25',
    features: ['Original Drivers', 'Micro-Soldering', 'Tested Integrity']
  }
];

export default function RepairsClient() {
  return (
    <main className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
          <Smartphone className="w-96 h-96" />
        </div>
        <Container>
          <div className="max-w-4xl px-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-6"
            >
              Technical Repair Studio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase italic leading-[0.9] mb-8 md:mb-10"
            >
              Expert <br />
              <span className="text-primary">Diagnostics.</span>
            </motion.h1>
            <p className="text-base md:text-xl text-gray-400 font-bold italic mb-10 md:mb-12 leading-relaxed">
              We specialize in the restoration of flagship technology.
              Our studio uses high-precision engineering to revive your digital life.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid - Fixed for Mobile Aspect Ratio */}
      <section className="py-24 md:py-40">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4">
            {services.map((service, index) => (
                <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 md:p-10 bg-gray-50 border border-gray-100 rounded-[2rem] md:rounded-[3rem] hover:bg-white hover:shadow-2xl hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors mb-8 md:mb-10">
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-secondary uppercase italic tracking-tighter mb-4 leading-tight">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-500 font-bold italic mb-8 leading-relaxed line-clamp-3">{service.desc}</p>

                <div className="space-y-3 mb-10">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-xl md:text-2xl font-black text-secondary italic">{service.price}</span>
                  <Link href="/contact">
                    <button className="px-6 py-2.5 md:px-8 md:py-3 bg-secondary text-white rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all">
                      Book Now
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust Banner - Compact for Mobile */}
      <section className="py-16 md:py-24 bg-primary text-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 px-6">
            <div className="flex items-center gap-5">
              <Clock className="w-8 h-8 md:w-10 md:h-10 text-white/80" />
              <div>
                <h4 className="text-lg md:text-xl font-black italic uppercase">1-Hour Fix</h4>
                <p className="text-[8px] md:text-[10px] font-black uppercase opacity-60">Express Turnaround</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-white/80" />
              <div>
                <h4 className="text-lg md:text-xl font-black italic uppercase">12mo Warranty</h4>
                <p className="text-[8px] md:text-[10px] font-black uppercase opacity-60">Certified Parts</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Zap className="w-8 h-8 md:w-10 md:h-10 text-white/80" />
              <div>
                <h4 className="text-lg md:text-xl font-black italic uppercase">No Fix, No Fee</h4>
                <p className="text-[8px] md:text-[10px] font-black uppercase opacity-60">Technical Integrity</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-40 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-secondary uppercase italic leading-[0.9] mb-10 md:mb-12">
              Start Your <br />
              <span className="text-gray-200">Restoration.</span>
            </h2>
            <Link href="/contact" className="block w-full sm:w-auto">
              <button className="w-full sm:w-auto px-12 py-5 md:py-6 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-primary transition-all shadow-2xl flex items-center justify-center gap-4 mx-auto group">
                Request Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}