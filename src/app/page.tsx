import { BookingFlow } from "@/components/booking/BookingFlow";
import { Container, Button } from "@/components/ui";
import { Shield, Clock, Award, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="pt-24">
      {/* New Hero Section */}
      <section className="bg-white py-12 md:py-20 border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-primary">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-primary" />)}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary">
                  5.0 Rating on Google
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-secondary uppercase italic leading-[0.9] mb-8">
                London's Leading <br />
                <span className="text-primary">Repair Experts.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mb-10">
                Professional screen restoration and technical diagnostics for all flagship devices. 
                Same-day service with manufacturer-grade components.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="px-10 rounded-full">Book Your Repair</Button>
                <Button variant="outline" size="lg" className="px-10 rounded-full">View All Services</Button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border-[12px] border-gray-50 shadow-2xl">
                <Image 
                  src="/technical_repair_workbench_1778173028526.png"
                  alt="Technical Excellence"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Warranty</p>
                  <p className="text-sm font-black text-secondary uppercase italic">12 Month Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Booking Flow Section */}
      <section id="book" className="scroll-mt-24">
        <BookingFlow />
      </section>

      {/* Trust Bars */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: '12 Month Warranty', sub: 'On All Technical Repairs' },
              { icon: Clock, title: 'Same-Day Service', sub: '1-Hour Technical Path' },
              { icon: Award, title: 'No Fix, No Fee', sub: 'Technical Integrity Guaranteed' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-secondary uppercase italic leading-none mb-1">{item.title}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-secondary uppercase italic tracking-tighter mb-4">
              Brands We <span className="text-primary">Support.</span>
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Manufacturer Grade Parts For All Ecosystems</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['Apple', 'Samsung', 'Google', 'Sony', 'Microsoft', 'Nintendo', 'OnePlus', 'Huawei'].map((brand) => (
              <span key={brand} className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-secondary">{brand}</span>
            ))}
          </div>
        </Container>
      </section>

      {/* Shop Preview */}
      <section className="py-24 bg-secondary text-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-[0.9] mb-8">
                Certified <br />
                <span className="text-primary">Pre-Owned.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-10">
                Premium restored flagship devices at a fraction of the cost. 
                Every unit undergoes a rigorous 40-point technical inspection.
              </p>
              <div className="flex gap-10 mb-12">
                <div>
                  <p className="text-3xl font-black text-white italic">90%+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Battery Health</p>
                </div>
                <div className="w-[1px] h-12 bg-white/10" />
                <div>
                  <p className="text-3xl font-black text-white italic">Grade A</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Cosmetic Status</p>
                </div>
              </div>
              <Button size="lg" className="w-full sm:w-auto px-12 rounded-full">Shop All Models</Button>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-[3rem] overflow-hidden border-[12px] border-white/5 shadow-2xl">
                <Image 
                  src="/refurbished_smartphones_showcase_1778173156468.png"
                  alt="Certified Refurbished"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

