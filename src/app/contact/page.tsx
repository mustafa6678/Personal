'use client';

import { motion } from 'framer-motion';
import { Container, Button } from '@/components/ui';
import { ContactForm } from '@/components/ContactForm';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight
} from 'lucide-react';

const contactDetails = [
  {
    title: 'Inquiry Line',
    value: '+44 7459 763380',
    icon: Phone,
    href: 'tel:+447459763380'
  },
  {
    title: 'Digital Support',
    value: 'tpshopexpress@gmail.com',
    icon: Mail,
    href: 'mailto:tpshopexpress@gmail.com'
  },
  {
    title: 'Studio Location',
    value: '592 Blackpool Road, Ashton-on-Ribble, Preston',
    icon: MapPin,
    href: '#'
  }
];

export default function ContactPage() {
  return (
    <main className="pt-24 bg-white">
      {/* Header Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <Container>
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-[1px] bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Technical Support</span>
            </motion.div>
            <h1 className="text-7xl lg:text-[10rem] font-black tracking-tighter text-secondary uppercase italic leading-[0.8] mb-12">
              Connect <br />
              <span className="text-gray-100">Studio.</span>
            </h1>
            <p className="text-2xl text-gray-500 font-bold leading-relaxed italic max-w-2xl">
              Our technical team is available for bespoke repair consultations and immediate device assistance.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-secondary text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactDetails.map((detail, index) => (
              <motion.a
                key={detail.title}
                href={detail.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-12 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-primary hover:border-primary transition-all duration-500"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                  <detail.icon className="w-6 h-6 text-primary group-hover:text-primary transition-colors" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 group-hover:text-white/70">
                  {detail.title}
                </p>
                <p className="text-xl font-black italic uppercase tracking-tighter break-all text-white">
                  {detail.value}
                </p>
              </motion.a>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Form Section */}
      <section className="bg-white">
        <ContactForm />
      </section>

      {/* Location / Hours Grid */}
      <section className="py-40 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Hours Block */}
            <div className="lg:col-span-5 p-16 bg-white border border-gray-100 rounded-[4rem] flex flex-col justify-between hover:border-primary/20 transition-colors">
              <div>
                <h3 className="text-5xl font-black text-secondary uppercase italic tracking-tighter mb-12">Technical <br /> Availability.</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-sm pb-6 border-b border-gray-50">
                    <span className="font-black text-gray-400 uppercase italic">Monday - Friday</span>
                    <span className="font-black text-secondary italic">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pb-6 border-b border-gray-50">
                    <span className="font-black text-gray-400 uppercase italic">Saturday</span>
                    <span className="font-black text-secondary italic">08:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-black text-gray-400 uppercase italic">Sunday</span>
                    <span className="font-black text-red-500 italic uppercase">Closed</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-20 pt-10 border-t border-gray-50">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8 italic">Social Network</p>
                <div className="flex gap-6">
                  <a href="#" className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder Block */}
            <div className="lg:col-span-7 p-16 bg-secondary text-white rounded-[4rem] flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-5xl font-black uppercase italic tracking-tighter mb-6 text-white">Technical <br /> Center.</h3>
                <p className="text-lg font-bold italic text-gray-400 mb-12 max-w-sm mx-auto">
                  Located in the heart of Preston for immediate technical assistance.
                </p>
                <Button size="lg" className="rounded-full px-12">Get Directions</Button>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}

