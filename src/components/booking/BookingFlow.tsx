'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StepIndicator } from './StepIndicator';
import { RepairComparison } from './RepairComparison';
import { Container, Button, cn } from '@/components/ui';
import { ArrowRight, ArrowLeft, MapPin, Mail, Check, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import { sendContactEmail } from '@/app/actions';

export function BookingFlow() {
  const [step, setStep] = useState(1);
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [selectedRepair, setSelectedRepair] = useState<string | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const serviceString = `[Booking] ${selectedDevice} - ${selectedRepair || 'Standard Repair'} (${selectedMethod || 'Walk-In'})`;
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    
    const result = await sendContactEmail({
      name: fullName || 'Valued Customer',
      email: formData.email,
      phone: formData.phone,
      service: serviceString,
      message: formData.message || 'No additional details provided.'
    });

    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const devices = [
    { name: 'iPhone', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=400&auto=format&fit=crop', color: 'text-gray-600', bg: 'bg-gray-100', hoverBg: 'hover:bg-gray-200' },
    { name: 'Samsung', image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=400&auto=format&fit=crop', color: 'text-blue-600', bg: 'bg-blue-50', hoverBg: 'hover:bg-blue-100' },
    { name: 'iPad / Tablet', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=400&auto=format&fit=crop', color: 'text-indigo-600', bg: 'bg-indigo-50', hoverBg: 'hover:bg-indigo-100' },
    { name: 'MacBook / Laptop', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400&auto=format&fit=crop', color: 'text-slate-700', bg: 'bg-slate-100', hoverBg: 'hover:bg-slate-200' },
    { name: 'Gaming Console', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&auto=format&fit=crop', color: 'text-red-600', bg: 'bg-red-50', hoverBg: 'hover:bg-red-100' },
    { name: 'Google Pixel', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop', color: 'text-emerald-600', bg: 'bg-emerald-50', hoverBg: 'hover:bg-emerald-100' },
    { name: 'Apple Watch', image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=400&auto=format&fit=crop', color: 'text-rose-600', bg: 'bg-rose-50', hoverBg: 'hover:bg-rose-100' },
    { name: 'Other Device', image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=400&auto=format&fit=crop', color: 'text-orange-600', bg: 'bg-orange-50', hoverBg: 'hover:bg-orange-100' },
  ];

  return (
    <section id="booking-section" className="bg-white py-12 scroll-mt-24">
      <StepIndicator currentStep={step} />
      
      <Container className="mt-12 min-h-[600px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl md:text-5xl font-black text-secondary text-center mb-12 uppercase tracking-tighter">
                Select Your Device
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {devices.map((device) => {
                  const isSelected = selectedDevice === device.name;
                  return (
                    <button
                      key={device.name}
                      onClick={() => setSelectedDevice(device.name)}
                      className={cn(
                        "relative flex flex-col items-center gap-4 p-6 rounded-3xl border-4 transition-all group shadow-sm text-left overflow-hidden",
                        isSelected 
                          ? "border-primary bg-primary/5 shadow-md scale-[1.02]" 
                          : "border-transparent bg-gray-50 hover:bg-gray-100 hover:shadow-md hover:scale-[1.02] active:scale-95"
                      )}
                    >
                      {isSelected && (
                        <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center z-10">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <div className="w-full aspect-square rounded-2xl bg-white flex items-center justify-center shadow-sm transition-transform relative overflow-hidden">
                        <Image 
                          src={device.image} 
                          alt={device.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                      <span className={cn(
                        "font-black text-sm uppercase tracking-tight text-center w-full",
                        isSelected ? "text-primary" : "text-secondary"
                      )}>
                        {device.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-center mt-12">
                <Button 
                  onClick={nextStep} 
                  size="lg" 
                  disabled={!selectedDevice}
                  className="gap-2 px-12"
                >
                  Continue to Repair Type <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex items-center justify-between mb-8">
                <Button variant="ghost" onClick={prevStep} className="gap-2">
                  <ArrowLeft className="w-4 h-4" /> Back to Devices
                </Button>
                <div className="text-right">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Selected Device</span>
                  <p className="font-black text-secondary uppercase italic">{selectedDevice}</p>
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-secondary text-center mb-8 uppercase tracking-tighter">
                Choose Repair Type
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {['Screen Repair', 'Battery', 'Charging Port', 'Camera', 'Back Glass', 'Water Damage', 'Other / Not Sure'].map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedRepair(cat)}
                    className={cn(
                      "px-6 py-3 rounded-full border-2 font-bold text-sm transition-all active:scale-95",
                      selectedRepair === cat 
                        ? "border-primary bg-primary text-white" 
                        : "border-gray-100 text-gray-500 hover:border-primary hover:text-primary"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <RepairComparison />
              
              <div className="flex justify-center mt-12">
                <Button onClick={nextStep} size="lg" className="gap-2 px-12">
                  Continue to Fixing Way <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-4xl mx-auto"
            >
              <Button variant="ghost" onClick={prevStep} className="mb-8 gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Repairs
              </Button>
              <h2 className="text-3xl md:text-5xl font-black text-secondary text-center mb-12 uppercase tracking-tighter">
                Choose How to Fix
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <button 
                  onClick={() => { setSelectedMethod('Walk-In'); nextStep(); }}
                  className="p-10 rounded-2xl border-2 border-gray-100 hover:border-primary hover:bg-primary/5 text-left group transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-secondary uppercase italic mb-2">Walk-In Service</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    Visit our studio in Preston. Most repairs are completed within 1 hour while you wait.
                  </p>
                </button>

                <button 
                  onClick={() => { setSelectedMethod('Mail-In'); nextStep(); }}
                  className="p-10 rounded-2xl border-2 border-gray-100 hover:border-primary hover:bg-primary/5 text-left group transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                    <Mail className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-black text-secondary uppercase italic mb-2">Mail-In Repair</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    Send your device to us from anywhere in the UK. 24-48h turnaround with tracked return shipping.
                  </p>
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-2xl mx-auto bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-200"
            >
              <div className="flex items-center justify-between mb-8">
                <Button variant="ghost" onClick={prevStep} className="gap-2" disabled={status === 'success' || status === 'loading'}>
                  <ArrowLeft className="w-4 h-4" /> Back to Fixing Way
                </Button>
              </div>
              <h2 className="text-3xl font-black text-secondary mb-8 uppercase tracking-tighter italic">
                Finalize Booking
              </h2>
              
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-black text-secondary uppercase italic mb-4">Booking Received</h3>
                  <p className="text-gray-500 font-medium mb-8">
                    Thank you! Our technical team will review your request and contact you shortly with the next steps.
                  </p>
                  <Button onClick={() => window.location.reload()} variant="outline" className="rounded-full">Book Another Repair</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm font-bold">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      Failed to send booking request. Please try again.
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">First Name</label>
                      <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Last Name</label>
                      <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                    <input required type="tel" name="phone" minLength={10} value={formData.phone} onChange={handleInputChange} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">What happened to your device?</label>
                    <textarea 
                      required 
                      name="message" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      rows={4}
                      placeholder="e.g. Dropped it and the screen cracked..."
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors resize-none" 
                    />
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200 mt-8">
                    <div className="flex flex-col items-center justify-center gap-6">
                      <Button type="submit" size="lg" className="w-full" disabled={status === 'loading'}>
                        {status === 'loading' ? (
                          <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processing Booking...</>
                        ) : (
                          'Confirm Booking'
                        )}
                      </Button>
                      <p className="text-[10px] text-gray-400 font-medium text-center">
                        By confirming, you agree to our terms and conditions. No payment is required now. <br/>
                        Our team will contact you shortly to confirm the repair details.
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}


