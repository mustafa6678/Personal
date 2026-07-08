'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '@/components/ui';
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
import { QuoteModal } from '@/components/QuoteModal';

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
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <main className="pt-24 bg-white">
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      {/* Official-Style Hero */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto px-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-6"
            >
              ThePhoneShopExpress Trade In
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-secondary uppercase italic leading-[0.9] mb-8 md:mb-10"
            >
              Upgrade <br className="md:hidden" /> to <br className="hidden md:block" />
              <span className="text-gray-300 text-4xl md:text-6xl lg:text-8xl italic">something better.</span>
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-500 font-bold mb-10 md:mb-12 max-w-2xl mx-auto">
              Get an instant technical valuation for your device and 
              apply it towards a certified refurbished flagship.
            </p>
            <Button size="lg" className="px-12 rounded-full" onClick={() => setIsQuoteOpen(true)}>Get Your Quote</Button>
          </div>
        </Container>
      </section>

      {/* Featured Grid */}
      <section className="py-24 md:py-40">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-12 border-b border-gray-100 pb-12 px-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-secondary uppercase italic leading-[0.9]">
              Featured <br />
              Inventory<span className="text-primary">.</span>
            </h2>
            <Link href="/contact" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary flex items-center gap-2 group">
              View All Models
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 px-4">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/5] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden bg-gray-50 border border-gray-100 mb-8 md:mb-10 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute top-6 left-6 md:top-10 md:left-10 p-4 md:p-6 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl">
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white">{product.tag}</span>
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="text-3xl md:text-4xl font-black text-secondary uppercase italic tracking-tighter mb-4">{product.name}</h3>
                  <p className="text-base text-gray-500 font-bold mb-6 md:mb-8">{product.description}</p>
                  <div className="flex flex-row items-center justify-between">
                    <span className="text-2xl font-black text-secondary italic">{product.price}</span>
                    <Button variant="outline" className="rounded-full px-8">Learn More</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Feature Focus Section */}
      <section className="py-24 md:py-40 bg-secondary text-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center px-4">
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[3rem] group hover:bg-primary transition-colors">
                  <Battery className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-white mb-6 md:mb-8" />
                  <h4 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter mb-4 leading-tight text-white">Battery <br /> Restoration</h4>
                  <p className="text-[10px] md:text-xs font-bold text-gray-400 group-hover:text-white/70 italic leading-relaxed">
                    Certified 100% capacity replacement for every pre-owned unit.
                  </p>
                </div>
                <div className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[3rem] group hover:bg-primary transition-colors">
                  <Shield className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-white mb-6 md:mb-8" />
                  <h4 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter mb-4 leading-tight text-white">40-Point <br /> Inspection</h4>
                  <p className="text-[10px] md:text-xs font-bold text-gray-400 group-hover:text-white/70 italic leading-relaxed">
                    Exhaustive technical verification of every component.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase italic leading-[0.9] mb-8 md:mb-10 text-white">
                Engineered <br />
                <span className="text-primary">Integrity.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 font-bold italic leading-relaxed mb-10 md:mb-12">
                We don't just sell phones. We restore them to their original technical specifications.
              </p>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  <span className="font-black italic uppercase tracking-widest text-[10px] md:text-sm">12-Month Technical Warranty</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  <span className="font-black italic uppercase tracking-widest text-[10px] md:text-sm">Free Express Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-white border-t border-gray-100">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-12 text-center lg:text-left px-4">
            <div>
              <p className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-secondary">Not sure which model is right?</p>
              <p className="text-sm md:text-base text-gray-500 font-bold italic">Talk to a technical specialist today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full lg:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full px-10">Contact Specialist</Button>
              </Link>
              <a href="tel:+447459763380" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full rounded-full px-10">Call Studio</Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
