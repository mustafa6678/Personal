'use client';

import { motion } from 'framer-motion';
import { Container, Button } from '@/components/ui';
import { History, Target, Heart, Award, Smartphone, Cpu, ShieldCheck, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="pt-24 bg-white">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-6"
            >
              Our Story
            </motion.p>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-secondary uppercase italic leading-[0.9] mb-12">
              Engineering <br /> Trust in <br />
              <span className="text-gray-200">Preston.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-bold leading-relaxed italic">
              Since our inception, we have been dedicated to redefining the repair experience 
              through technical excellence and absolute transparency.
            </p>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-40 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="/technical_repair_workbench_1778173028526.png"
                alt="Technical Studio"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-5xl font-black tracking-tighter uppercase italic leading-[0.9] mb-10 text-secondary">
                Technically <br /> <span className="text-primary">Driven.</span>
              </h2>
              <div className="space-y-10">
                {[
                  {
                    title: 'Precision Repairs',
                    description: 'We use the industry\'s most advanced tools and diagnostic equipment to ensure every repair meets manufacturer standards.',
                    icon: Cpu
                  },
                  {
                    title: 'Quality Components',
                    description: 'Only premium-grade parts enter our studio. We believe your device deserves the best internals to ensure longevity.',
                    icon: ShieldCheck
                  },
                  {
                    title: 'Community First',
                    description: 'Born and raised in Preston, we take pride in serving our local community with honest, expert technical advice.',
                    icon: MapPin
                  }
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-secondary uppercase italic mb-2">{item.title}</h3>
                      <p className="text-gray-500 font-medium leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Grid */}
      <section className="py-24 md:py-40 bg-secondary text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-6">Our Core Values</h2>
            <p className="text-gray-400 font-bold italic">The principles that guide every interaction in our studio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', icon: Award },
              { title: 'Transparency', icon: History },
              { title: 'Excellence', icon: Target },
              { title: 'Passion', icon: Heart }
            ].map((value, index) => (
              <div key={value.title} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] text-center hover:bg-primary transition-all group">
                <value.icon className="w-10 h-10 text-primary group-hover:text-white mx-auto mb-6 transition-colors" />
                <h3 className="text-xl font-black uppercase italic tracking-widest text-white">{value.title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-secondary uppercase italic tracking-tighter mb-10">Experience the <span className="text-primary">Difference.</span></h2>
            <Button size="lg" className="rounded-full px-16">Visit Our Studio</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
