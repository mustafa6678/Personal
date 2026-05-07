'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, User, Smartphone, Loader2 } from 'lucide-react';
import { contactSchema, type ContactFormData } from '@/lib/schemas';
import { sendContactEmail } from '@/app/actions';
import { Container } from './ui';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    const result = await sendContactEmail(data);
    if (result.success) {
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-24 px-4">
            <p className="text-violet-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Inquiry Center</p>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-slate-950 uppercase italic leading-none">
              Connect <br /> <span className="text-slate-200">Studio.</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Name Input */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-violet-500 transition-colors" />
                  <input
                    {...register('name')}
                    placeholder="Enter Name"
                    className="w-full pl-16 pr-8 py-5 md:py-6 bg-slate-50 border border-slate-100 rounded-2xl md:rounded-[2rem] text-sm font-bold italic placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:bg-white transition-all"
                  />
                </div>
                {errors.name && <p className="text-[10px] font-black text-red-500 uppercase tracking-widest ml-4">{errors.name.message}</p>}
              </div>

              {/* Email Input */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-violet-500 transition-colors" />
                  <input
                    {...register('email')}
                    placeholder="Enter Email"
                    className="w-full pl-16 pr-8 py-5 md:py-6 bg-slate-50 border border-slate-100 rounded-2xl md:rounded-[2rem] text-sm font-bold italic placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:bg-white transition-all"
                  />
                </div>
                {errors.email && <p className="text-[10px] font-black text-red-500 uppercase tracking-widest ml-4">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Phone Input */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Contact Number</label>
                <div className="relative group">
                  <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-violet-500 transition-colors" />
                  <input
                    {...register('phone')}
                    placeholder="Enter Phone"
                    className="w-full pl-16 pr-8 py-5 md:py-6 bg-slate-50 border border-slate-100 rounded-2xl md:rounded-[2rem] text-sm font-bold italic placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:bg-white transition-all"
                  />
                </div>
                {errors.phone && <p className="text-[10px] font-black text-red-500 uppercase tracking-widest ml-4">{errors.phone.message}</p>}
              </div>

              {/* Service Selection */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Category</label>
                <div className="relative group">
                  <Smartphone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-violet-500 transition-colors" />
                  <select
                    {...register('service')}
                    className="w-full pl-16 pr-8 py-5 md:py-6 bg-slate-50 border border-slate-100 rounded-2xl md:rounded-[2rem] text-sm font-black italic focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:bg-white appearance-none transition-all"
                  >
                    <option value="">Select Service</option>
                    <option value="Smartphone">Smartphone Repair</option>
                    <option value="Console">Console Repair</option>
                    <option value="Laptop">Laptop / Mac Repair</option>
                    <option value="Buy/Sell">Buy or Sell Unit</option>
                    <option value="Other">Technical Support</option>
                  </select>
                </div>
                {errors.service && <p className="text-[10px] font-black text-red-500 uppercase tracking-widest ml-4">{errors.service.message}</p>}
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Detailed Message</label>
              <textarea
                {...register('message')}
                rows={5}
                placeholder="Describe your technical issue..."
                className="w-full px-8 py-6 bg-slate-50 border border-slate-100 rounded-2xl md:rounded-[2rem] text-sm font-bold italic placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:bg-white transition-all resize-none"
              />
              {errors.message && <p className="text-[10px] font-black text-red-500 uppercase tracking-widest ml-4">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-6 md:py-8 bg-slate-950 text-white rounded-2xl md:rounded-[2.5rem] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs hover:bg-violet-600 transition-all flex items-center justify-center gap-4 group disabled:opacity-50 disabled:hover:bg-slate-950 shadow-2xl shadow-slate-900/10"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Analyzing Brief...
                  </>
                ) : (
                  <>
                    Send Technical Brief
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

            {/* Status Messages */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  <p className="text-xs font-black text-emerald-900 uppercase tracking-widest">Technical brief sent successfully. A specialist will contact you.</p>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-6 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-4"
                >
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <p className="text-xs font-black text-red-900 uppercase tracking-widest">Connection failed. Please check your network or try again later.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </Container>
    </section>
  );
}
