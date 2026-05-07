'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui';
import { ArrowRight, ShieldCheck, Zap, Star, Smartphone, Gamepad2, Laptop } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 py-20 lg:py-0">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.png" 
          alt="Mobile Technical Repair"
          fill
          className="object-cover opacity-40 grayscale-[0.3]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />
      </div>

      <Container className="relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-6 md:mb-8 bg-violet-600 px-4 py-2 rounded-full w-fit mx-auto lg:mx-0"
            >
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-white fill-white" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white">Preston's Technical Studio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-[11rem] font-black tracking-tighter text-white mb-6 md:mb-10 leading-[0.9] md:leading-[0.8] uppercase italic"
            >
              Fix Your <br className="hidden md:block" />
              <span className="text-violet-500">Device.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-3xl text-slate-300 mb-10 md:mb-16 max-w-2xl font-bold leading-tight italic mx-auto lg:mx-0"
            >
              Expert screen restoration and technical diagnostics for all flagship mobile and console ecosystems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8"
            >
              <button 
                onClick={scrollToContact}
                className="w-full sm:w-auto px-10 py-5 md:px-12 md:py-6 bg-violet-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-violet-600/20 flex items-center justify-center gap-3 group"
              >
                Book Your Repair
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex gap-8 md:gap-10">
                <div className="flex flex-col text-left">
                  <span className="text-[8px] md:text-[10px] font-black text-violet-400 uppercase tracking-[0.3em] mb-1">Warranty</span>
                  <span className="text-lg md:text-xl font-black italic text-white">12 Months</span>
                </div>
                <div className="w-[1px] h-10 bg-white/10" />
                <div className="flex flex-col text-left">
                  <span className="text-[8px] md:text-[10px] font-black text-violet-400 uppercase tracking-[0.3em] mb-1">Turnaround</span>
                  <span className="text-lg md:text-xl font-black italic text-white">1-Hour*</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Category Icons - Optimized for Mobile (Now visible on tablet/mobile as a grid) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-6 mt-12 lg:mt-0">
            {[
              { icon: Smartphone, title: 'Mobile', sub: 'Screens', delay: 0.4 },
              { icon: Gamepad2, title: 'Consoles', sub: 'HDMI/Thermal', delay: 0.5 },
              { icon: Laptop, title: 'Laptops', sub: 'Hardware', delay: 0.6 }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay }}
                className="p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 flex flex-row sm:flex-col lg:flex-row items-center lg:items-center gap-4 md:gap-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-600/40 shrink-0">
                  <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div className="text-left sm:text-center lg:text-left">
                  <h3 className="text-xs md:text-sm font-black uppercase italic text-white leading-none mb-1">{item.title}</h3>
                  <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>

      {/* Mobile Scroll Indicator - Hidden on very small screens */}
      <div className="absolute bottom-12 right-12 hidden sm:flex flex-col items-center gap-4">
        <div className="w-[1px] h-16 md:h-24 bg-gradient-to-t from-violet-600 to-transparent opacity-50" />
        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] text-white/40 [writing-mode:vertical-lr]">Discover</span>
      </div>
    </section>
  );
}
