'use client';

import { motion } from 'framer-motion';
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/ui";
import { Shield, Clock, Award, Smartphone, Phone, CheckCircle2, Zap, Cpu, Battery, Camera, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Official Brand Support - Streamlined for Manufacturer Look */}
      <section className="py-24 bg-white border-b border-slate-50">
        <Container>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['Apple', 'Samsung', 'Google', 'Sony', 'Microsoft', 'Nintendo'].map((brand) => (
              <span key={brand} className="text-xl font-black italic uppercase tracking-tighter text-slate-900">{brand}</span>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Feature Spotlight (Manufacturer Style) */}
      <section className="py-40 bg-[#FAFAFA]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white bg-white group">
                <Image 
                  src="/technical_repair_workbench_1778173028526.png"
                  alt="Technical Excellence"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                <div className="absolute bottom-10 left-10 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem]">
                  <p className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-2">Technical Studio</p>
                  <p className="text-2xl font-black text-white italic uppercase tracking-tighter">Engineered <br /> to perfection.</p>
                </div>
              </div>
              {/* Floating Stat */}
              <div className="absolute -top-10 -left-10 p-10 bg-violet-600 text-white rounded-[3rem] shadow-2xl">
                <p className="text-4xl font-black tracking-tighter italic">40+</p>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Point Inspection</p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-10 h-[1px] bg-violet-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-violet-600">The Quality Standard</span>
              </motion.div>
              <h2 className="text-6xl lg:text-8xl font-black tracking-tighter text-slate-950 uppercase italic leading-[0.85] mb-12">
                Certified <br />
                <span className="text-violet-500">Restoration.</span>
              </h2>
              <p className="text-xl text-slate-500 font-bold leading-relaxed mb-16 italic">
                We apply manufacturer-grade technical protocols to every repair. 
                Experience the same reliability as a brand-new device, guaranteed.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-slate-100">
                    <Cpu className="w-6 h-6 text-violet-600" />
                  </div>
                  <h4 className="text-lg font-black uppercase italic tracking-tighter">A-Grade Components</h4>
                  <p className="text-xs font-bold text-slate-400 italic">Only OEM or premium certified technical parts.</p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-slate-100">
                    <Battery className="w-6 h-6 text-violet-600" />
                  </div>
                  <h4 className="text-lg font-black uppercase italic tracking-tighter">Power Optimized</h4>
                  <p className="text-xs font-bold text-slate-400 italic">Advanced battery health restoration protocols.</p>
                </div>
              </div>

              <Link href="/repairs">
                <button className="px-12 py-5 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-violet-600 transition-all shadow-2xl shadow-slate-900/10 flex items-center gap-4 group">
                  Explore Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Visual Trust Strips - Dark Manufacturer Style */}
      <section className="py-24 bg-slate-950 text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-violet-600 transition-all duration-500">
                <Shield className="w-8 h-8 text-violet-400 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-xl font-black italic uppercase tracking-tighter">12 Month Warranty</h4>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Studio Assurance</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-violet-600 transition-all duration-500">
                <Clock className="w-8 h-8 text-violet-400 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-xl font-black italic uppercase tracking-tighter">Same-Day Service</h4>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Express Technical Path</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-violet-600 transition-all duration-500">
                <Award className="w-8 h-8 text-violet-400 group-hover:text-white" />
              </div>
              <div>
                <h4 className="text-xl font-black italic uppercase tracking-tighter">No Fix, No Fee</h4>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Technical Integrity</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Services />

      {/* Shop Reveal Section (Manufacturer Style) */}
      <section className="py-40 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-6xl lg:text-8xl font-black tracking-tighter text-slate-950 uppercase italic leading-[0.85] mb-12">
                Certified <br />
                <span className="text-slate-200">Pre-Owned.</span>
              </h2>
              <p className="text-xl text-slate-500 font-bold leading-relaxed mb-16 italic">
                Our shop features the finest selection of restored flagship devices in Preston. 
                Each unit is a masterpiece of technical restoration.
              </p>
              <div className="flex gap-10 mb-16">
                <div className="text-center">
                  <p className="text-4xl font-black text-slate-950 italic">90%+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Battery Health</p>
                </div>
                <div className="w-[1px] h-12 bg-slate-100" />
                <div className="text-center">
                  <p className="text-4xl font-black text-slate-950 italic">Zero</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Defect Tolerance</p>
                </div>
              </div>
              <Link href="/buy-sell">
                <button className="px-12 py-5 bg-violet-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-950 transition-all shadow-2xl shadow-violet-600/20">
                  Shop All Models
                </button>
              </Link>
            </div>
            
            <div className="lg:col-span-7 relative">
              <div className="rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-[#FAFAFA]">
                <Image 
                  src="/refurbished_smartphones_showcase_1778173156468.png"
                  alt="Certified Refurbished"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -right-10 hidden lg:flex items-center gap-4 p-8 bg-white rounded-3xl shadow-2xl border border-slate-50">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <span className="font-black italic uppercase tracking-widest text-xs">Certified <br /> Authentic</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section - Minimalist Manufacturer Look */}
      <section className="py-40 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-950 uppercase italic leading-none mb-10">
              Ready for <br />
              <span className="text-slate-300">the next step?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-20">
              <Link href="/contact" className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.4em] text-slate-900 hover:text-violet-600 transition-colors">
                Book Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="w-2 h-2 rounded-full bg-slate-200 hidden sm:block" />
              <Link href="/repairs" className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.4em] text-slate-900 hover:text-violet-600 transition-colors">
                Explore Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
      
      <ContactForm />
    </>
  );
}
