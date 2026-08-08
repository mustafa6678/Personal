'use client';

import { motion } from 'framer-motion';
import { Container, Button } from '@/components/ui';
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Shield,
  Zap,
  Search,
  FileText,
  Wrench,
  PackageCheck,
} from 'lucide-react';
import Link from 'next/link';

const processSteps = [
  { icon: Search, title: 'Free Diagnosis', desc: 'We inspect your device and identify exactly what needs fixing.' },
  { icon: FileText, title: 'Upfront Quote', desc: 'A clear, no-obligation price before any work begins.' },
  { icon: Wrench, title: 'Expert Repair', desc: 'Certified technicians repair your device using manufacturer-grade parts.' },
  { icon: PackageCheck, title: 'Tested & Warrantied', desc: 'Every repair is tested and backed by a 12-month warranty.' },
];

export interface FAQ {
  question: string;
  answer: string;
}

export interface RelatedService {
  title: string;
  href: string;
}

export interface ServiceLandingProps {
  icon: React.ReactNode;
  kicker: string;
  title: React.ReactNode;
  intro: string;
  price: string;
  commonIssues: string[];
  faqs: FAQ[];
  relatedServices: RelatedService[];
}

export function ServiceLandingClient({
  icon,
  kicker,
  title,
  intro,
  price,
  commonIssues,
  faqs,
  relatedServices,
}: ServiceLandingProps) {
  return (
    <main className="pt-20 bg-white">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
          {icon}
        </div>
        <Container>
          <div className="max-w-3xl px-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-6"
            >
              {kicker}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase italic leading-[0.95] mb-8"
            >
              {title}
            </motion.h1>
            <p className="text-base md:text-xl text-gray-400 font-bold italic mb-10 leading-relaxed">
              {intro}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Button href="/#book" size="lg" className="rounded-full px-10">Book Your Repair</Button>
              <span className="text-2xl font-black italic text-primary">{price}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Common Issues */}
      <section className="py-20 md:py-32">
        <Container>
          <h2 className="text-3xl md:text-5xl font-black text-secondary uppercase italic tracking-tighter mb-12 text-center">
            Common Issues We <span className="text-primary">Fix.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
            {commonIssues.map((issue, index) => (
              <motion.div
                key={issue}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-6 bg-gray-50 border border-gray-100 rounded-2xl"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-gray-600">{issue}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-gray-50">
        <Container>
          <h2 className="text-3xl md:text-5xl font-black text-secondary uppercase italic tracking-tighter mb-16 text-center">
            How It <span className="text-primary">Works.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-black text-secondary uppercase italic mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust Banner */}
      <section className="py-16 md:py-20 bg-primary text-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 px-6">
            <div className="flex items-center gap-5">
              <Clock className="w-8 h-8 md:w-10 md:h-10 text-white/80" />
              <div>
                <h4 className="text-lg md:text-xl font-black italic uppercase">Same-Day Service</h4>
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

      {/* FAQs */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <h2 className="text-3xl md:text-5xl font-black text-secondary uppercase italic tracking-tighter mb-12 text-center">
            Frequently Asked <span className="text-primary">Questions.</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 px-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-8 bg-gray-50 border border-gray-100 rounded-2xl"
              >
                <h3 className="text-lg font-black text-secondary uppercase italic mb-3">{faq.question}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-secondary uppercase italic leading-[0.9] mb-10">
              Ready to Get Started?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/#book" size="lg" className="rounded-full px-12">Book Your Repair</Button>
              <Button href="/contact" variant="outline" size="lg" className="rounded-full px-12">Ask a Question</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white border-t border-gray-100">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-400">Other Repair Services</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-xs font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  {service.title}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
