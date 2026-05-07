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
    <section className="relative h-screen min-h-[850px] flex items-center overflow-hidden bg-slate-950">
      {/* Background Layer with more "Repair" focus */}
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

      <Container className="relative z-10 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-8 bg-violet-600 px-4 py-2 rounded-full w-fit"
            >
              <Zap className="w-4 h-4 text-white fill-white" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Preston's Leading Repair Center</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl lg:text-[11rem] font-black tracking-tighter text-white mb-10 leading-[0.8] uppercase italic"
            >
              Fix Your <br />
              <span className="text-violet-500">Device.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-3xl text-slate-300 mb-16 max-w-2xl font-bold leading-tight italic"
            >
              Expert screen restoration, battery replacement, and technical diagnostics for all major flagship brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-8"
            >
              <button 
                onClick={scrollToContact}
                className="px-12 py-6 bg-violet-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-violet-600/20 flex items-center gap-3 group"
              >
                Book Your Repair
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex gap-10">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-violet-400 uppercase tracking-[0.3em] mb-1">Warranty</span>
                  <span className="text-xl font-black italic text-white">12 Months</span>
                </div>
                <div className="w-[1px] h-10 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-violet-400 uppercase tracking-[0.3em] mb-1">Turnaround</span>
                  <span className="text-xl font-black italic text-white">1-Hour*</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Category Icons on Hero for "Repair Shop" feel */}
          <div className="lg:col-span-4 hidden lg:grid grid-cols-1 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 flex items-center gap-6"
            >
              <div className="w-14 h-14 bg-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-600/40">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase italic text-white">Mobile Phones</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Screens & Batteries</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="p-8 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 flex items-center gap-6"
            >
              <div className="w-14 h-14 bg-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-600/40">
                <Gamepad2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase italic text-white">Consoles</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">HDMI & Thermal</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="p-8 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 flex items-center gap-6"
            >
              <div className="w-14 h-14 bg-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-600/40">
                <Laptop className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase italic text-white">Laptops</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Software & Hardware</p>
              </div>
            </motion.div>
          </div>

        </div>
      </Container>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-12 right-12 flex flex-col items-center gap-4">
        <div className="w-[1px] h-24 bg-gradient-to-t from-violet-600 to-transparent opacity-50" />
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 [writing-mode:vertical-lr]">Discover</span>
      </div>
    </section>
  );
}
