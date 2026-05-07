'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Loader2, Send, Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { contactSchema, type ContactFormData } from '@/lib/schemas';
import { sendContactEmail } from '@/app/actions';
import { Container } from '@/components/ui';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const result = await sendContactEmail(data);
      if (result.success) {
        setIsSuccess(true);
        reset();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="py-40 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto p-20 bg-slate-900 text-white rounded-[3rem] shadow-2xl"
        >
          <div className="w-20 h-20 bg-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-10">
            <Send className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-5xl font-black mb-4 tracking-tighter italic uppercase">Submission <span className="text-violet-400">Success.</span></h3>
          <p className="text-lg font-bold opacity-70 mb-12 italic">Our technical team will contact you shortly.</p>
          <button onClick={() => setIsSuccess(false)} className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-violet-500 hover:text-white transition-all shadow-xl">
            Return to Form
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="py-40 bg-[#FAFAFA]" id="contact">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Information Block */}
          <div className="lg:col-span-5 p-16 bg-white border border-slate-100 rounded-[3rem] flex flex-col justify-between hover:border-violet-100 transition-colors">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-10 h-[1px] bg-violet-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-violet-600">Get in Touch</span>
              </motion.div>
              <h2 className="text-7xl lg:text-9xl font-black tracking-tighter text-slate-950 mb-10 italic uppercase leading-none">
                Start <br />
                <span className="text-violet-500">Quote.</span>
              </h2>
              <p className="text-xl text-slate-500 font-bold leading-relaxed mb-16 italic">
                Provide your technical details for a precise restoration estimate.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-violet-600 transition-colors duration-500">
                  <Phone className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Inquiries</p>
                  <p className="text-2xl font-black text-slate-900 italic tracking-tight">07459 763380</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-violet-600 transition-colors duration-500">
                  <Mail className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email</p>
                  <p className="text-xl font-black text-slate-900 italic tracking-tight break-all">contact@thephoneshopexpress.co.uk</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Block */}
          <div className="lg:col-span-7 p-16 bg-white border border-slate-100 rounded-[3rem] hover:border-violet-100 transition-colors">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 italic px-2">Full Name</label>
                  <input
                    {...register('name')}
                    placeholder="Enter Name"
                    className="w-full bg-slate-50 rounded-[1.5rem] p-6 border-none ring-2 ring-transparent focus:ring-violet-200 focus:bg-white transition-all outline-none text-slate-900 font-bold italic placeholder:text-slate-300"
                  />
                  {errors.name && <p className="text-[10px] text-red-500 font-black uppercase px-2">{errors.name.message}</p>}
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 italic px-2">Email Address</label>
                  <input
                    {...register('email')}
                    placeholder="Enter Email"
                    className="w-full bg-slate-50 rounded-[1.5rem] p-6 border-none ring-2 ring-transparent focus:ring-violet-200 focus:bg-white transition-all outline-none text-slate-900 font-bold italic placeholder:text-slate-300"
                  />
                  {errors.email && <p className="text-[10px] text-red-500 font-black uppercase px-2">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 italic px-2">Contact Number</label>
                  <input
                    {...register('phone')}
                    placeholder="Enter Phone"
                    className="w-full bg-slate-50 rounded-[1.5rem] p-6 border-none ring-2 ring-transparent focus:ring-violet-200 focus:bg-white transition-all outline-none text-slate-900 font-bold italic placeholder:text-slate-300"
                  />
                  {errors.phone && <p className="text-[10px] text-red-500 font-black uppercase px-2">{errors.phone.message}</p>}
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 italic px-2">Category</label>
                  <div className="relative">
                    <select
                      {...register('service')}
                      className="w-full bg-slate-50 rounded-[1.5rem] p-6 border-none ring-2 ring-transparent focus:ring-violet-200 focus:bg-white transition-all outline-none text-slate-900 font-black italic appearance-none cursor-pointer"
                    >
                      <option value="">Select Service</option>
                      <option value="Mobile">Smartphone Repair</option>
                      <option value="Console">Gaming Console</option>
                      <option value="Laptop">PC & Laptop</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ArrowRight className="w-5 h-5 text-slate-400 rotate-90" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 italic px-2">Detailed Message</label>
                <textarea
                  {...register('message')}
                  placeholder="Describe your technical issue..."
                  rows={4}
                  className="w-full bg-slate-50 rounded-[2rem] p-8 border-none ring-2 ring-transparent focus:ring-violet-200 focus:bg-white transition-all outline-none text-slate-900 font-bold italic resize-none placeholder:text-slate-300"
                />
                {errors.message && <p className="text-[10px] text-red-500 font-black uppercase px-2">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-950 text-white p-8 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:bg-violet-600 transition-all flex items-center justify-center gap-4 shadow-2xl shadow-slate-950/20 group"
              >
                {isSubmitting ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
