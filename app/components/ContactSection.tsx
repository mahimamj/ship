"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, FileText, Anchor } from "lucide-react";

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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-8 md:py-10 bg-[#F5F5F2] text-[#071A2B] border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-5">
        
        {/* COMBINED HIGH-CONVERSION PARTNERSHIP CTA BANNER */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#071A2B] via-[#0A243C] to-[#0077B6] text-white shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4 border border-slate-700">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0077B6]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-1.5 max-w-2xl relative z-10">
            <span className="px-2.5 py-1 bg-white/10 text-sky-300 border border-white/20 rounded-full font-mono text-[10px] font-bold tracking-widest uppercase inline-flex items-center gap-2">
              <Anchor className="w-3.5 h-3.5 text-sky-400" /> MARITIME PARTNERSHIP CTA
            </span>
            <h3 className="font-syne text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
              READY TO ELEVATE YOUR FLEET OPERATIONS?
            </h3>
            <p className="font-manrope text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Connect with our Class-1 superintendents and RPSL crewing experts today. Receive a custom technical management proposal within 2 hours.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a
              href="#contact-form"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#0077B6] hover:bg-white hover:text-[#071A2B] text-white font-mono font-bold text-xs tracking-wider uppercase transition-all shadow-lg text-center flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" /> REQUEST PROPOSAL NOW
            </a>
          </div>
        </div>

        {/* Section Header */}
        <div id="contact-form" className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-4 gap-4">
          <div>
            <span className="font-mono text-[10px] font-bold text-[#0077B6] tracking-widest uppercase block mb-1">
              // DISPATCH &amp; COMMERCIAL INQUIRIES
            </span>
            <h2 className="font-syne text-2xl sm:text-3xl font-extrabold tracking-tight text-[#071A2B] leading-tight">
              CONTACT OPERATIONS
            </h2>
          </div>

          <p className="text-xs font-manrope text-slate-600 max-w-md leading-relaxed">
            Reach out directly for technical vessel proposals, RPSL crewing assessments, drydock planning, or port agency dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Office Contacts */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Dubai HQ Card */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0077B6] flex items-center justify-center font-bold text-sm shrink-0">
                  🇦🇪
                </div>
                <div>
                  <h3 className="font-syne text-sm font-bold text-[#071A2B] leading-tight">
                    Oceanic Star Fleet Ship Management LLC
                  </h3>
                  <p className="text-xs font-mono text-[#0077B6] font-semibold">Dubai Operations HQ</p>
                </div>
              </div>

              <div className="text-[11px] font-manrope text-slate-600 space-y-2 pt-3 border-t border-slate-100">
                <p className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                  <span>Office No. 601, 6th Floor, Al Jawharah Building, Bur Dubai, UAE</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#0077B6] shrink-0" />
                  <a href="tel:+97143889981" className="hover:text-[#0077B6] transition font-bold">+971 43889981</a>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#0077B6] shrink-0" />
                  <a href="mailto:info@oceanicstarfleet.com" className="hover:text-[#0077B6] transition font-bold">info@oceanicstarfleet.com</a>
                </p>
              </div>
            </div>

            {/* India HQ Card */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0077B6] flex items-center justify-center font-bold text-sm shrink-0">
                  🇮🇳
                </div>
                <div>
                  <h3 className="font-syne text-sm font-bold text-[#071A2B] leading-tight">
                    Oceanic Star Shipping Pvt. Ltd.
                  </h3>
                  <p className="text-xs font-mono text-[#0077B6] font-semibold">Navi Mumbai HQ &amp; Crewing Center</p>
                </div>
              </div>

              <div className="text-[11px] font-manrope text-slate-600 space-y-2 pt-3 border-t border-slate-100">
                <p className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                  <span>Real Tech Park, Office No. 602–603, Sector 30A, Vashi, Navi Mumbai – 400 703, India</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#0077B6] shrink-0" />
                  <a href="tel:+912227817171" className="hover:text-[#0077B6] transition font-bold">+91 22 27817171/72</a>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#0077B6] shrink-0" />
                  <a href="mailto:info@oceanicstarshipping.com" className="hover:text-[#0077B6] transition font-bold">info@oceanicstarshipping.com</a>
                </p>
              </div>
            </div>

            {/* Sri Lanka Office Card */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0077B6] flex items-center justify-center font-bold text-sm shrink-0">
                  🇱🇰
                </div>
                <div>
                  <h3 className="font-syne text-sm font-bold text-[#071A2B] leading-tight">
                    Oceanic Star Lanka Pvt Ltd
                  </h3>
                  <p className="text-xs font-mono text-[#0077B6] font-semibold">Colombo Operations &amp; Husbandry</p>
                </div>
              </div>

              <div className="text-[11px] font-manrope text-slate-600 space-y-2 pt-3 border-t border-slate-100">
                <p className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                  <span>Maritime House, 2nd Floor, Janadhipathi Mawatha, Colombo 01, Sri Lanka</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#0077B6] shrink-0" />
                  <a href="tel:+971561581941" className="hover:text-[#0077B6] transition font-bold">+971 5615-81941</a>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#0077B6] shrink-0" />
                  <a href="mailto:operations@oceanicstarfleet.com" className="hover:text-[#0077B6] transition font-bold">operations@oceanicstarfleet.com</a>
                </p>
              </div>
            </div>

            {/* Turkey Office Card */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#0077B6] flex items-center justify-center font-bold text-sm shrink-0">
                  🇹🇷
                </div>
                <div>
                  <h3 className="font-syne text-sm font-bold text-[#071A2B] leading-tight">
                    Oceanic Star Shipping Turkey
                  </h3>
                  <p className="text-xs font-mono text-[#0077B6] font-semibold">Istanbul Branch Office</p>
                </div>
              </div>

              <div className="text-[11px] font-manrope text-slate-600 space-y-2 pt-3 border-t border-slate-100">
                <p className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                  <span>Mimar Sinan Mah. Bosna Cad. Çolpan Sok. No.2, Uzunlar Apt. A Blok D.4, 34782 Çekmeköy - İstanbul / TURKEY</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#0077B6] shrink-0" />
                  <a href="tel:+97143889981" className="hover:text-[#0077B6] transition font-bold">+971 43889981</a>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#0077B6] shrink-0" />
                  <a href="mailto:operations@oceanicstarfleet.com" className="hover:text-[#0077B6] transition font-bold">operations@oceanicstarfleet.com</a>
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Commercial Proposal Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-lg space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-syne text-xl font-extrabold text-[#071A2B]">COMMERCIAL PROPOSAL REQUEST</h3>
                <p className="text-xs font-manrope text-slate-500 mt-1">Submit your specifications for a response within 2 business hours.</p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-sky-50 border border-sky-200 rounded-2xl p-8 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-sky-100 text-[#0077B6] flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="font-syne text-xl font-bold text-[#071A2B]">Inquiry Received Successfully</h4>
                  <p className="text-xs font-manrope text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out. Our senior superintendent will review your request and contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full font-mono text-xs font-bold bg-[#0077B6] text-white"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 text-xs font-manrope">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#071A2B] font-semibold mb-1">Full Name *</label>
                      <input
                        type="text"
                        {...register("fullName", { required: "Full Name is required" })}
                        placeholder="Capt. John Doe"
                        className="w-full bg-[#F5F5F2] border border-slate-200 rounded-xl px-3 py-2.5 text-[#071A2B] focus:outline-none focus:border-[#0077B6]"
                      />
                      {errors.fullName && <span className="text-rose-600 text-[10px]">{errors.fullName.message}</span>}
                    </div>

                    <div>
                      <label className="block text-[#071A2B] font-semibold mb-1">Work Email *</label>
                      <input
                        type="email"
                        {...register("email", {
                          required: "Work Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                        })}
                        placeholder="j.doe@shipping-co.com"
                        className="w-full bg-[#F5F5F2] border border-slate-200 rounded-xl px-3 py-2.5 text-[#071A2B] focus:outline-none focus:border-[#0077B6]"
                      />
                      {errors.email && <span className="text-rose-600 text-[10px]">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#071A2B] font-semibold mb-1">Phone / Mobile *</label>
                      <input
                        type="tel"
                        {...register("phone", { required: "Phone number is required" })}
                        placeholder="+971 50 123 4567"
                        className="w-full bg-[#F5F5F2] border border-slate-200 rounded-xl px-3 py-2.5 text-[#071A2B] focus:outline-none focus:border-[#0077B6]"
                      />
                      {errors.phone && <span className="text-rose-600 text-[10px]">{errors.phone.message}</span>}
                    </div>

                    <div>
                      <label className="block text-[#071A2B] font-semibold mb-1">Company / Vessel Name</label>
                      <input
                        type="text"
                        {...register("companyName")}
                        placeholder="Global Maritime Ltd"
                        className="w-full bg-[#F5F5F2] border border-slate-200 rounded-xl px-3 py-2.5 text-[#071A2B] focus:outline-none focus:border-[#0077B6]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#071A2B] font-semibold mb-1">Service Required *</label>
                      <select
                        {...register("serviceCategory", { required: "Please select a service" })}
                        className="w-full bg-[#F5F5F2] border border-slate-200 rounded-xl px-3 py-2.5 text-[#071A2B] focus:outline-none focus:border-[#0077B6]"
                      >
                        <option value="">Select Service Category</option>
                        <option value="Crew Management">Crew Management</option>
                        <option value="Technical Management">Technical Management</option>
                        <option value="Dry Dock Management">Dry Dock Management</option>
                        <option value="Port Agency & Husbandry">Port Agency & Husbandry</option>
                        <option value="Chartering & Brokering">Chartering & Brokering</option>
                      </select>
                      {errors.serviceCategory && <span className="text-rose-600 text-[10px]">{errors.serviceCategory.message}</span>}
                    </div>

                    <div>
                      <label className="block text-[#071A2B] font-semibold mb-1">Preferred Office Entity</label>
                      <select
                        {...register("entityPreference")}
                        className="w-full bg-[#F5F5F2] border border-slate-200 rounded-xl px-3 py-2.5 text-[#071A2B] focus:outline-none focus:border-[#0077B6]"
                      >
                        <option value="Dubai LLC">Dubai LLC (Oceanic Star Fleet)</option>
                        <option value="India Pvt Ltd">India Pvt Ltd (Oceanic Star Shipping)</option>
                        <option value="Sri Lanka Branch">Sri Lanka Branch</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#071A2B] font-semibold mb-1">Detailed Message / Specifications *</label>
                    <textarea
                      rows={3}
                      {...register("message", { required: "Please describe your request" })}
                      placeholder="Specify vessel type, DWT, port call dates, or crew rank requirements..."
                      className="w-full bg-[#F5F5F2] border border-slate-200 rounded-xl px-3 py-2.5 text-[#071A2B] focus:outline-none focus:border-[#0077B6] resize-none"
                    ></textarea>
                    {errors.message && <span className="text-rose-600 text-[10px]">{errors.message.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl font-mono font-bold text-xs bg-[#0077B6] hover:bg-[#071A2B] text-white transition flex items-center justify-center space-x-2 shadow-lg"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>SUBMIT DISPATCH REQUEST</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Direct WhatsApp Quick Contact */}
            <a
              href="https://wa.me/919004390041?text=Hello%20Oceanic%20Star%20Fleet%2C%20I%20would%20like%20to%20inquire%20about%20your%20maritime%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center justify-between text-emerald-800 transition group hover:bg-emerald-100 shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-syne text-emerald-950">Direct WhatsApp Operations</h4>
                  <p className="text-xs text-emerald-700 font-mono">Dispatch Hotline (+91 90043 90041)</p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold px-3 py-1.5 bg-emerald-600 text-white rounded-full">
                CHAT NOW
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
