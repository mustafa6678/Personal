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
      
      {/* Official Brand Support */}
      <section className="py-12 md:py-24 bg-white border-b border-slate-50">
        <Container>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 px-6">
            {['Apple', 'Samsung', 'Google', 'Sony', 'Microsoft', 'Nintendo'].map((brand) => (
              <span key={brand} className="text-sm md:text-xl font-black italic uppercase tracking-tighter text-slate-900">{brand}</span>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Feature Spotlight */}
      <section className="py-20 md:py-40 bg-[#FAFAFA] overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center px-4">
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative aspect-square rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white bg-white group">
                <Image 
                  src="/technical_repair_workbench_1778173028526.png"
                  alt="Technical Excellence"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 md:p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[1.5rem] md:rounded-[2.5rem]">
                  <p className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-[0.4em] mb-2">Technical Studio</p>
                  <p className="text-base md:text-2xl font-black text-white italic uppercase tracking-tighter leading-tight">Engineered <br /> to perfection.</p>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 md:-top-10 md:-left-10 p-5 md:p-10 bg-violet-600 text-white rounded-[2rem] md:rounded-[3rem] shadow-2xl z-10">
                <p className="text-2xl md:text-4xl font-black tracking-tighter italic">40+</p>
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-80">Point Inspection</p>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6 md:mb-8"
              >
                <div className="w-8 md:w-10 h-[1px] bg-violet-600" />
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-violet-600">The Quality Standard</span>
              </motion.div>
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-slate-950 uppercase italic leading-[0.9] md:leading-[0.85] mb-6 md:mb-12">
                Certified <br />
                <span className="text-violet-500">Restoration.</span>
              </h2>
              <p className="text-base md:text-xl text-slate-500 font-bold leading-relaxed mb-10 md:mb-16 italic">
                We apply manufacturer-grade technical protocols to every repair. 
                Experience the same reliability as a brand-new device.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-16">
                <div className="flex flex-row sm:flex-col gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-slate-100 shrink-0">
                    <Cpu className="w-5 h-5 md:w-6 md:h-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-lg font-black uppercase italic tracking-tighter mb-1">A-Grade Parts</h4>
                    <p className="text-[10px] md:text-xs font-bold text-slate-400 italic">OEM or premium technical components.</p>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-slate-100 shrink-0">
                    <Battery className="w-5 h-5 md:w-6 md:h-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-lg font-black uppercase italic tracking-tighter mb-1">Power Optimized</h4>
                    <p className="text-[10px] md:text-xs font-bold text-slate-400 italic">Advanced battery health restoration.</p>
                  </div>
                </div>
              </div>

              <Link href="/repairs" className="w-full sm:w-auto block">
                <button className="w-full sm:w-auto px-10 py-4 md:px-12 md:py-5 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-violet-600 transition-all shadow-2xl flex items-center justify-center gap-4 group">
                  Explore Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Visual Trust Strips */}
      <section className="py-16 md:py-24 bg-slate-950 text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 px-6">
            {[
              { icon: Shield, title: '12 Month Warranty', sub: 'Studio Assurance' },
              { icon: Clock, title: 'Same-Day Service', sub: 'Express Technical Path' },
              { icon: Award, title: 'No Fix, No Fee', sub: 'Technical Integrity' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 md:gap-6 group">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-violet-600 transition-all duration-500 shrink-0">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-violet-400 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-base md:text-xl font-black italic uppercase tracking-tighter leading-tight">{item.title}</h4>
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Services />

      {/* Shop Reveal Section */}
      <section className="py-20 md:py-40 bg-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center px-4">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-slate-950 uppercase italic leading-[0.9] md:leading-[0.85] mb-8 md:mb-12">
                Certified <br />
                <span className="text-slate-200">Pre-Owned.</span>
              </h2>
              <p className="text-base md:text-xl text-slate-500 font-bold leading-relaxed mb-10 md:mb-16 italic">
                Our shop features the finest selection of restored flagship devices.
              </p>
              <div className="flex gap-6 md:gap-10 mb-10 md:mb-16 justify-center lg:justify-start">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-black text-slate-950 italic">90%+</p>
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">Battery Health</p>
                </div>
                <div className="w-[1px] h-10 md:h-12 bg-slate-100" />
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-black text-slate-950 italic">Zero</p>
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">Defect Tolerance</p>
                </div>
              </div>
              <Link href="/buy-sell" className="block w-full sm:w-auto">
                <button className="w-full sm:w-auto px-10 py-4 md:px-12 md:py-5 bg-violet-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-slate-950 transition-all shadow-2xl">
                  Shop All Models
                </button>
              </Link>
            </div>
            
            <div className="lg:col-span-7 relative mt-12 lg:mt-0">
              <div className="rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-[#FAFAFA]">
                <Image 
                  src="/refurbished_smartphones_showcase_1778173156468.png"
                  alt="Certified Refurbished"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-10 md:-right-10 flex items-center gap-3 md:gap-4 p-5 md:p-8 bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-slate-50 z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <span className="font-black italic uppercase tracking-widest text-[8px] md:text-xs leading-tight">Certified <br /> Authentic</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section - "NEED IMMEDIATE RESTORATION" fix */}
      <section className="py-24 md:py-40 bg-slate-50 overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-slate-950 uppercase italic leading-[0.85] mb-10 md:mb-12">
              Need <br className="md:hidden" /> Immediate <br />
              <span className="text-slate-300">Restoration?</span>
            </h2>
            <p className="text-base md:text-2xl text-slate-500 font-bold italic leading-relaxed mb-12 md:mb-20 max-w-2xl mx-auto">
              Our technical center is ready to handle your most challenging repair needs with precision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-10">
              <Link href="/contact" className="flex items-center gap-3 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-900 hover:text-violet-600 transition-colors italic">
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200 hidden sm:block" />
              <Link href="/repairs" className="flex items-center gap-3 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-900 hover:text-violet-600 transition-colors italic">
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
