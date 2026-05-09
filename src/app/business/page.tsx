'use client';

import { motion } from 'framer-motion';
import { Container, Button } from '@/components/ui';
import { Briefcase, Shield, Zap, Users, ArrowRight, Building2, Smartphone, Monitor } from 'lucide-react';

export default function BusinessPage() {
  return (
    <main className="pt-24 bg-white">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-gray-50 border-b border-gray-100">
        <Container>
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-6"
            >
              Enterprise Solutions
            </motion.p>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-secondary uppercase italic leading-[0.9] mb-10">
              Technical <br /> Support for <br />
              <span className="text-primary">Business.</span>
            </h1>
            <p className="text-xl text-gray-500 font-bold mb-12 max-w-2xl leading-relaxed">
              We provide streamlined repair and maintenance services for corporate device fleets. 
              Keep your team connected with Preston's most reliable technical studio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-12">Open Account</Button>
              <Button variant="outline" size="lg" className="rounded-full px-12">Talk to Sales</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-40">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Priority Service',
                description: 'Express turnaround times for business-critical devices. We prioritize your fleet to minimize downtime.',
                icon: Zap
              },
              {
                title: 'Dedicated Portal',
                description: 'Manage all repairs, invoices, and device history through our secure enterprise dashboard.',
                icon: Building2
              },
              {
                title: 'Volume Pricing',
                description: 'Preferential rates and monthly invoicing for organizations with multiple devices.',
                icon: Briefcase
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-[2rem] border-2 border-gray-50 hover:border-primary/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                  <benefit.icon className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-secondary uppercase italic mb-4">{benefit.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fleet Management */}
      <section className="py-24 md:py-40 bg-secondary text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9] mb-8">
                Fleet <br /> Management <br />
                <span className="text-primary text-4xl md:text-6xl italic">Simplified.</span>
              </h2>
              <p className="text-xl text-gray-400 font-bold italic mb-12">
                From smartphones to high-end laptops, we handle everything under one professional agreement.
              </p>
              <div className="space-y-6">
                {[
                  'Bespoke service level agreements (SLA)',
                  'Pick-up and delivery service available',
                  'Monthly reporting and status updates',
                  'Technical consulting for device upgrades'
                ].map(item => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-primary" />
                    </div>
                    <span className="font-black uppercase tracking-widest text-[10px] md:text-sm text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] text-center">
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-6" />
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Mobile Fleet</p>
              </div>
              <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] text-center">
                <Monitor className="w-12 h-12 text-primary mx-auto mb-6" />
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Computer Assets</p>
              </div>
              <div className="col-span-2 p-10 bg-white/5 border border-white/10 rounded-[3rem] text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Secure Data Erasure</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <Container>
          <div className="bg-gray-50 rounded-[3rem] p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-secondary uppercase italic tracking-tighter mb-8">Ready to Partner?</h2>
            <p className="text-xl text-gray-500 font-bold italic mb-12 max-w-xl mx-auto">
              Join dozens of Preston businesses that trust us with their technical infrastructure.
            </p>
            <Button size="lg" className="rounded-full px-16">Contact Business Team</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
