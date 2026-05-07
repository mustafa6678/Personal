'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui';
import { 
  Smartphone, 
  ArrowRight, 
  RotateCcw, 
  ShieldCheck, 
  CheckCircle2,
  Cpu,
  Battery,
  Shield
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const featuredProducts = [
  {
    name: 'iPhone 15 Pro',
    tag: 'Pristine Condition',
    description: 'A17 Pro chip. 48MP Main camera. Titanium design.',
    price: 'From £649',
    image: '/refurbished_smartphones_showcase_1778173156468.png',
    specs: ['Battery Health 100%', '12-Month Studio Warranty']
  },
  {
    name: 'Samsung S24 Ultra',
    tag: 'Like New',
    description: 'Galaxy AI is here. 200MP camera. S Pen integrated.',
    price: 'From £729',
    image: '/refurbished_smartphones_showcase_1778173156468.png',
    specs: ['Snapdragon 8 Gen 3', 'Titanium Frame']
  }
];

export default function BuySellPage() {
  return (
    <main className="pt-20 bg-white">
      {/* Official-Style Hero */}
      <section className="py-32 bg-[#FAFAFA] border-b border-slate-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-violet-600 font-black uppercase tracking-[0.4em] text-[10px] mb-6"
            >
              ThePhoneShopExpress Trade In
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl lg:text-9xl font-black tracking-tighter text-slate-950 uppercase italic leading-none mb-10"
            >
              Upgrade to <br />
              <span className="text-slate-300 text-6xl lg:text-8xl">something better.</span>
            </motion.h1>
            <p className="text-xl text-slate-500 font-bold italic mb-12">
              Get an instant technical valuation for your current device and 
              apply it towards a certified refurbished flagship.
            </p>
            <button className="px-12 py-5 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-violet-600 transition-all shadow-2xl shadow-slate-950/20">
              Get Your Quote
            </button>
          </div>
        </Container>
      </section>

      {/* Product Launch Style Grid */}
      <section className="py-40">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12 border-b border-slate-100 pb-12">
            <h2 className="text-5xl font-black tracking-tighter text-slate-950 uppercase italic leading-none">
              Featured <br />
              Inventory<span className="text-violet-500">.</span>
            </h2>
            <Link href="/contact" className="text-xs font-black uppercase tracking-[0.3em] text-violet-600 flex items-center gap-2 group">
              View All Models
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden bg-[#FAFAFA] border border-slate-100 mb-10">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute top-10 left-10 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white italic">{product.tag}</span>
                  </div>
                </div>
                <div className="px-4">
                  <h3 className="text-4xl font-black text-slate-950 uppercase italic tracking-tighter mb-4">{product.name}</h3>
                  <p className="text-lg text-slate-500 font-bold italic mb-8">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-slate-950 italic">{product.price}</span>
                    <button className="px-8 py-3 bg-slate-50 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-violet-600 hover:text-white transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Feature Focus Section (Manufacturer Style) */}
      <section className="py-40 bg-slate-950 text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-8">
                <div className="p-12 bg-white/5 border border-white/10 rounded-[3rem] group hover:bg-violet-600 transition-colors">
                  <Battery className="w-10 h-10 text-violet-400 group-hover:text-white mb-8" />
                  <h4 className="text-2xl font-black italic uppercase tracking-tighter mb-4">Battery <br /> Restoration</h4>
                  <p className="text-xs font-bold text-slate-400 group-hover:text-white/70 italic leading-relaxed">
                    Certified 100% capacity replacement for every pre-owned unit.
                  </p>
                </div>
                <div className="p-12 bg-white/5 border border-white/10 rounded-[3rem] group hover:bg-violet-600 transition-colors">
                  <Shield className="w-10 h-10 text-violet-400 group-hover:text-white mb-8" />
                  <h4 className="text-2xl font-black italic uppercase tracking-tighter mb-4">40-Point <br /> Inspection</h4>
                  <p className="text-xs font-bold text-slate-400 group-hover:text-white/70 italic leading-relaxed">
                    Exhaustive technical verification of every component.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase italic leading-none mb-10">
                Engineered <br />
                <span className="text-violet-500">Integrity.</span>
              </h2>
              <p className="text-xl text-slate-400 font-bold italic leading-relaxed mb-12">
                We don't just sell phones. We restore them to their original technical specifications. 
                Experience a manufacturer-quality device at a fraction of the cost.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-violet-400" />
                  <span className="font-black italic uppercase tracking-widest text-sm">12-Month Technical Warranty</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-violet-400" />
                  <span className="font-black italic uppercase tracking-widest text-sm">Free Express Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Comparison Strip */}
      <section className="py-24 bg-white border-t border-slate-100">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div>
              <p className="text-3xl font-black italic uppercase tracking-tighter text-slate-950">Not sure which model is right for you?</p>
              <p className="text-slate-500 font-bold italic">Talk to a technical specialist today.</p>
            </div>
            <div className="flex gap-6">
              <Link href="/contact">
                <button className="px-10 py-4 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-violet-600 transition-all shadow-xl">
                  Contact Specialist
                </button>
              </Link>
              <a href="tel:07459763380">
                <button className="px-10 py-4 bg-slate-50 text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all border border-slate-100">
                  Call Studio
                </button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
