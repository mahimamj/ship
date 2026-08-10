"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, Building2 } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceCategory: string;
  entityPreference: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate backend submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-[#050C1A] text-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-bold bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/20">
            Contact Operations
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-poppins text-white tracking-tight">
            Get in Touch With <span className="text-gradient">Oceanic Star</span>
          </h2>
          <p className="text-slate-400 text-base">
            Reach out for fleet management inquiries, crew requests, dry dock estimates, or port agency assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Contacts & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Dubai HQ Card */}
            <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                  🇦🇪
                </div>
                <div>
                  <h3 className="text-base font-bold font-poppins text-white">
                    Oceanic Star Fleet Ship Management LLC
                  </h3>
                  <p className="text-xs text-teal-400 font-semibold">Dubai Operations HQ</p>
                </div>
              </div>

              <div className="text-xs text-slate-300 space-y-2 pt-2 border-t border-white/10">
                <p className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Suite 1402, Commercial Tower, Business Bay, P.O. Box 48802, Dubai, UAE</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <a href="tel:+97143990000" className="hover:text-white transition">+971 4 399 0000</a>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <a href="mailto:dubai@oceanicstar.com" className="hover:text-white transition">dubai@oceanicstar.com</a>
                </p>
              </div>
            </div>

            {/* India HQ Card */}
            <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                  🇮🇳
                </div>
                <div>
                  <h3 className="text-base font-bold font-poppins text-white">
                    Oceanic Star Shipping Pvt. Ltd.
                  </h3>
                  <p className="text-xs text-teal-400 font-semibold">Mumbai HQ & RPSL Recruitment</p>
                </div>
              </div>

              <div className="text-xs text-slate-300 space-y-2 pt-2 border-t border-white/10">
                <p className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Fort Maritime Center, 4th Floor, SBS Road, Mumbai - 400001, India</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <a href="tel:+912268000000" className="hover:text-white transition">+91 22 6800 0000</a>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <a href="mailto:mumbai@oceanicstar.com" className="hover:text-white transition">mumbai@oceanicstar.com</a>
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Quick Contact */}
            <a
              href="https://wa.me/97143990000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 rounded-3xl p-6 flex items-center justify-between text-emerald-400 transition group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-poppins">Instant WhatsApp Operations</h4>
                  <p className="text-xs text-emerald-400">Direct chat with Ops Manager 24/7</p>
                </div>
              </div>
              <span className="btn-primary text-xs px-4 py-2 rounded-xl font-semibold">Chat Now</span>
            </a>

            {/* Embedded Google Map Frame */}
            <div className="rounded-3xl overflow-hidden border border-white/10 h-48 relative">
              <iframe
                title="Oceanic Star Dubai Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786539269224!2d55.2721877!3d25.1873138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85e07%3A0xa908f9024f2b1897!2sBusiness%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* Right Column: React Hook Form Inquiry */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 border border-teal-500/30 shadow-2xl space-y-6">
              
              <div className="border-b border-white/10 pb-4">
                <h3 className="text-2xl font-bold font-poppins text-white">Commercial & Operational Inquiry</h3>
                <p className="text-xs text-slate-400">Fill in your requirements for a response within 2 business hours.</p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-xl font-bold text-white font-poppins">Inquiry Received Successfully!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out to Oceanic Star Group. Our senior commercial superintendent will contact you at your email/phone shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline text-xs px-6 py-2.5 rounded-xl font-semibold mt-2"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-xs">
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Full Name *</label>
                      <input
                        type="text"
                        {...register("fullName", { required: "Full Name is required" })}
                        placeholder="Capt. John Doe"
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                      />
                      {errors.fullName && <span className="text-rose-400 text-[10px]">{errors.fullName.message}</span>}
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Work Email *</label>
                      <input
                        type="email"
                        {...register("email", {
                          required: "Work Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                        })}
                        placeholder="j.doe@shipping-co.com"
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                      />
                      {errors.email && <span className="text-rose-400 text-[10px]">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Phone / Mobile *</label>
                      <input
                        type="tel"
                        {...register("phone", { required: "Phone number is required" })}
                        placeholder="+971 50 123 4567"
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                      />
                      {errors.phone && <span className="text-rose-400 text-[10px]">{errors.phone.message}</span>}
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Company / Vessel Name</label>
                      <input
                        type="text"
                        {...register("companyName")}
                        placeholder="Global Fleet Ltd"
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Service Required *</label>
                      <select
                        {...register("serviceCategory", { required: "Please select a service" })}
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                      >
                        <option value="">Select Service Category</option>
                        <option value="Crew Management">Crew Management</option>
                        <option value="Technical Management">Technical Management</option>
                        <option value="Dry Dock Management">Dry Dock Management</option>
                        <option value="Port Agency & Husbandry">Port Agency & Husbandry</option>
                        <option value="Chartering & Brokering">Chartering & Brokering</option>
                        <option value="Flag State Certification">Flag State Certification</option>
                      </select>
                      {errors.serviceCategory && <span className="text-rose-400 text-[10px]">{errors.serviceCategory.message}</span>}
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Preferred Office Entity</label>
                      <select
                        {...register("entityPreference")}
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                      >
                        <option value="Dubai LLC">Dubai LLC (Oceanic Star Fleet)</option>
                        <option value="India Pvt Ltd">India Pvt Ltd (Oceanic Star Shipping)</option>
                        <option value="Sri Lanka Branch">Sri Lanka Branch</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Detailed Message / Specs *</label>
                    <textarea
                      rows={4}
                      {...register("message", { required: "Please describe your request" })}
                      placeholder="Specify vessel type, DWT, port call dates, or crew rank requirements..."
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400 resize-none"
                    ></textarea>
                    {errors.message && <span className="text-rose-400 text-[10px]">{errors.message.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-4 rounded-xl font-semibold text-xs flex items-center justify-center space-x-2 shadow-xl hover:scale-[1.01] transition"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Submit Commercial Request</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
