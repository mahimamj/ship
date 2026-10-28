"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  FileText,
  Anchor,
  ArrowRight,
  User,
  Building2,
  Layers,
  Clock,
  ShieldCheck,
  Compass,
  Download,
  ChevronDown,
  Sparkles,
} from "lucide-react";

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
    try {
      await fetch("/api/proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error("Proposal dispatch error:", err);
    }
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-8 md:py-10 bg-[#F5F5F2] text-[#071A2B] border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-5">
        
        {/* COMBINED HIGH-CONVERSION PARTNERSHIP CTA BANNER */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#01666A] via-[#061B2A] to-[#007CD6] text-white shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4 border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#007CD6]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-1.5 max-w-2xl relative z-10">
            <span className="px-2.5 py-1 bg-white/10 text-sky-200 border border-white/20 rounded-full font-mono text-[10px] font-bold tracking-widest uppercase inline-flex items-center gap-2">
              <Anchor className="w-3.5 h-3.5 text-sky-300" /> MARITIME PARTNERSHIP CTA
            </span>
            <h3 className="font-syne text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
              READY TO ELEVATE YOUR FLEET OPERATIONS?
            </h3>
            <p className="font-manrope text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
              Connect with our Class-1 superintendents and RPSL crewing experts today. Receive a custom technical management proposal within 2 hours.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a
              href="#contact-form"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#007CD6] hover:bg-white hover:text-[#061B2A] text-white font-mono font-bold text-xs tracking-wider uppercase transition-all shadow-lg text-center flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" /> REQUEST PROPOSAL NOW
            </a>
          </div>
        </div>

        {/* Section Header */}
        <div id="contact-form" className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-4 gap-4">
          <div>
            <span className="font-mono text-[10px] font-bold text-[#007CD6] tracking-widest uppercase block mb-1">
              // DISPATCH &amp; COMMERCIAL INQUIRIES
            </span>
            <h2 className="font-syne text-2xl sm:text-3xl font-extrabold tracking-tight text-[#071A2B] leading-tight">
              CONTACT OPERATIONS
            </h2>
          </div>

          <p className="text-xs font-manrope text-slate-600 max-w-md leading-relaxed">
            Reach out directly across our 6 strategic command hubs for technical vessel proposals, RPSL crewing assessments, drydock planning, or port agency dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Office Contacts */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Dubai HQ Card */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#007CD6] flex items-center justify-center font-bold text-sm shrink-0">
                  🇦🇪
                </div>
                <div>
                  <h3 className="font-syne text-sm font-bold text-[#071A2B] leading-tight">
                    Oceanic Star Fleet Ship Management LLC
                  </h3>
                  <p className="text-xs font-mono text-[#007CD6] font-semibold">Dubai Operations HQ</p>
                </div>
              </div>

              <div className="text-[11px] font-manrope text-slate-600 space-y-2 pt-3 border-t border-slate-100">
                <p className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#007CD6] shrink-0 mt-0.5" />
                  <span>Office No. 601, 6th Floor, Al Jawharah Building, Bur Dubai, UAE</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#007CD6] shrink-0" />
                  <a href="tel:+97143889981" className="hover:text-[#007CD6] transition font-bold">+971 43889981</a>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#007CD6] shrink-0" />
                  <a href="mailto:info@oceanicstarfleet.com" className="hover:text-[#007CD6] transition font-bold">info@oceanicstarfleet.com</a>
                </p>
              </div>
            </div>

            {/* India HQ Card */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#007CD6] flex items-center justify-center font-bold text-sm shrink-0">
                  🇮🇳
                </div>
                <div>
                  <h3 className="font-syne text-sm font-bold text-[#071A2B] leading-tight">
                    Oceanic Star Shipping Pvt. Ltd.
                  </h3>
                  <p className="text-xs font-mono text-[#007CD6] font-semibold">Navi Mumbai HQ &amp; Crewing Center</p>
                </div>
              </div>

              <div className="text-[11px] font-manrope text-slate-600 space-y-2 pt-3 border-t border-slate-100">
                <p className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#007CD6] shrink-0 mt-0.5" />
                  <span>Real Tech Park, Office No. 602–603, Sector 30A, Vashi, Navi Mumbai – 400 703, India</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#007CD6] shrink-0" />
                  <a href="tel:+912227817171" className="hover:text-[#007CD6] transition font-bold">+91 22 27817171/72</a>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#007CD6] shrink-0" />
                  <a href="mailto:info@oceanicstarshipping.com" className="hover:text-[#007CD6] transition font-bold">info@oceanicstarshipping.com</a>
                </p>
              </div>
            </div>

            {/* Sri Lanka Office Card */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#007CD6] flex items-center justify-center font-bold text-sm shrink-0">
                  🇱🇰
                </div>
                <div>
                  <h3 className="font-syne text-sm font-bold text-[#071A2B] leading-tight">
                    Oceanic Star Lanka Pvt Ltd
                  </h3>
                  <p className="text-xs font-mono text-[#007CD6] font-semibold">Colombo Operations &amp; Husbandry</p>
                </div>
              </div>

              <div className="text-[11px] font-manrope text-slate-600 space-y-2 pt-3 border-t border-slate-100">
                <p className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#007CD6] shrink-0 mt-0.5" />
                  <span>Maritime House, 2nd Floor, Janadhipathi Mawatha, Colombo 01, Sri Lanka</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#007CD6] shrink-0" />
                  <a href="tel:+971561581941" className="hover:text-[#007CD6] transition font-bold">+971 5615-81941</a>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#007CD6] shrink-0" />
                  <a href="mailto:operations@oceanicstarfleet.com" className="hover:text-[#007CD6] transition font-bold">operations@oceanicstarfleet.com</a>
                </p>
              </div>
            </div>

            {/* Turkey Office Card */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#007CD6] flex items-center justify-center font-bold text-sm shrink-0">
                  🇹🇷
                </div>
                <div>
                  <h3 className="font-syne text-sm font-bold text-[#071A2B] leading-tight">
                    Oceanic Star Shipping Turkey
                  </h3>
                  <p className="text-xs font-mono text-[#007CD6] font-semibold">Istanbul Branch Office</p>
                </div>
              </div>

              <div className="text-[11px] font-manrope text-slate-600 space-y-2 pt-3 border-t border-slate-100">
                <p className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#007CD6] shrink-0 mt-0.5" />
                  <span>Mimar Sinan Mah. Bosna Cad. Çolpan Sok. No.2, Uzunlar Apt. A Blok D.4, 34782 Çekmeköy - İstanbul / TURKEY</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#007CD6] shrink-0" />
                  <a href="tel:+97143889981" className="hover:text-[#007CD6] transition font-bold">+971 43889981</a>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#007CD6] shrink-0" />
                  <a href="mailto:operations@oceanicstarfleet.com" className="hover:text-[#007CD6] transition font-bold">operations@oceanicstarfleet.com</a>
                </p>
              </div>
            </div>

            {/* Singapore Hub Card */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#007CD6] flex items-center justify-center font-bold text-sm shrink-0">
                  🇸🇬
                </div>
                <div>
                  <h3 className="font-syne text-sm font-bold text-[#071A2B] leading-tight">
                    Oceanic Star Singapore (Opening Soon)
                  </h3>
                  <p className="text-xs font-mono text-[#007CD6] font-semibold">Southeast Asia Strategic Hub</p>
                </div>
              </div>

              <div className="text-[11px] font-manrope text-slate-600 space-y-2 pt-3 border-t border-slate-100">
                <p className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#007CD6] shrink-0 mt-0.5" />
                  <span>Marina Bay Financial Centre, Tower 1, Singapore 018981</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#007CD6] shrink-0" />
                  <a href="tel:+97143889981" className="hover:text-[#007CD6] transition font-bold">+971 43889981</a>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#007CD6] shrink-0" />
                  <a href="mailto:singapore@oceanicstarfleet.com" className="hover:text-[#007CD6] transition font-bold">singapore@oceanicstarfleet.com</a>
                </p>
              </div>
            </div>

            {/* Canada Hub Card */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#007CD6] flex items-center justify-center font-bold text-sm shrink-0">
                  🇨🇦
                </div>
                <div>
                  <h3 className="font-syne text-sm font-bold text-[#071A2B] leading-tight">
                    Oceanic Star Canada
                  </h3>
                  <p className="text-xs font-mono text-[#007CD6] font-semibold">North America Strategic Hub</p>
                </div>
              </div>

              <div className="text-[11px] font-manrope text-slate-600 space-y-2 pt-3 border-t border-slate-100">
                <p className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#007CD6] shrink-0 mt-0.5" />
                  <span>Waterfront Commercial Centre, Granville St, Vancouver, BC, Canada</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#007CD6] shrink-0" />
                  <a href="tel:+97143889981" className="hover:text-[#007CD6] transition font-bold">+971 43889981</a>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#007CD6] shrink-0" />
                  <a href="mailto:canada@oceanicstarfleet.com" className="hover:text-[#007CD6] transition font-bold">canada@oceanicstarfleet.com</a>
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Redesigned Commercial Proposal Form & Seafarer Portal */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(7,26,43,0.08)] overflow-hidden">
              {/* Subtle Ambient Decorative Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#007CD6]/10 via-[#01666A]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="relative z-10 pb-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] font-bold text-[#007CD6] tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                    <span>// COMMERCIAL DISPATCH TERMINAL</span>
                  </div>
                  <h3 className="font-syne text-xl sm:text-2xl font-black text-[#071A2B] tracking-tight leading-tight">
                    COMMERCIAL PROPOSAL REQUEST
                  </h3>
                  <p className="font-manrope text-xs text-[#667783] leading-relaxed">
                    Submit vessel specs for a tailored commercial proposal &amp; operational dispatch within 2 business hours.
                  </p>
                </div>

                {/* Direct Brochure Download Pill */}
                <a
                  href="/api/brochure"
                  download="Oceanic Star Shipping INDIA.pdf"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 hover:bg-sky-100 text-[#007CD6] border border-sky-200/90 font-mono text-[10px] font-bold transition-all shadow-xs shrink-0 self-start sm:self-center cursor-pointer group/deck"
                  title="Download Official 2026 Fleet Deck"
                >
                  <Download className="w-3.5 h-3.5 text-[#007CD6] group-hover/deck:translate-y-0.5 transition-transform" />
                  <span>2026 FLEET DECK (2.9 MB)</span>
                </a>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 py-8 px-4 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 size={36} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-syne text-xl font-bold text-[#071A2B]">Proposal Request Transmitted</h4>
                    <p className="text-xs font-manrope text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you. Your commercial parameters have been logged. A senior superintendent from the nearest command hub will contact you within 2 business hours.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href="/api/brochure"
                      download="Oceanic Star Shipping INDIA.pdf"
                      className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold bg-[#01666A] hover:bg-[#007CD6] text-white transition-colors flex items-center gap-2 shadow-sm"
                    >
                      <Download size={14} /> Download Corporate Brochure
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold bg-slate-100 hover:bg-slate-200 text-[#071A2B] transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 pt-4 space-y-3.5 text-xs font-manrope">
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="flex items-center justify-between font-mono text-[11px] font-bold text-[#071A2B] tracking-wider uppercase">
                        <span className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#007CD6]" /> Full Name
                        </span>
                        <span className="text-[10px] font-mono text-[#007CD6] font-bold">* REQUIRED</span>
                      </label>
                      <input
                        type="text"
                        {...register("fullName", { required: "Full name is required" })}
                        placeholder="e.g. Capt. Alexander Vance"
                        className="w-full bg-[#FAFAF7] hover:bg-white focus:bg-white border border-slate-200 hover:border-slate-300 focus:border-[#007CD6] focus:ring-4 focus:ring-[#007CD6]/10 rounded-xl px-3.5 py-2.5 text-xs text-[#071A2B] placeholder:text-slate-400 font-manrope transition-all shadow-2xs"
                      />
                      {errors.fullName && <span className="text-rose-600 font-mono text-[10px] block">{errors.fullName.message}</span>}
                    </div>

                    {/* Work Email */}
                    <div className="space-y-1">
                      <label className="flex items-center justify-between font-mono text-[11px] font-bold text-[#071A2B] tracking-wider uppercase">
                        <span className="flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-[#007CD6]" /> Work Email
                        </span>
                        <span className="text-[10px] font-mono text-[#007CD6] font-bold">* REQUIRED</span>
                      </label>
                      <input
                        type="email"
                        {...register("email", {
                          required: "Work email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                        })}
                        placeholder="vance@shipping-fleet.com"
                        className="w-full bg-[#FAFAF7] hover:bg-white focus:bg-white border border-slate-200 hover:border-slate-300 focus:border-[#007CD6] focus:ring-4 focus:ring-[#007CD6]/10 rounded-xl px-3.5 py-2.5 text-xs text-[#071A2B] placeholder:text-slate-400 font-manrope transition-all shadow-2xs"
                      />
                      {errors.email && <span className="text-rose-600 font-mono text-[10px] block">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {/* Phone / Mobile */}
                    <div className="space-y-1">
                      <label className="flex items-center justify-between font-mono text-[11px] font-bold text-[#071A2B] tracking-wider uppercase">
                        <span className="flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#007CD6]" /> Phone / WhatsApp
                        </span>
                        <span className="text-[10px] font-mono text-[#007CD6] font-bold">* REQUIRED</span>
                      </label>
                      <input
                        type="tel"
                        {...register("phone", { required: "Phone number is required" })}
                        placeholder="+971 50 123 4567 / +91..."
                        className="w-full bg-[#FAFAF7] hover:bg-white focus:bg-white border border-slate-200 hover:border-slate-300 focus:border-[#007CD6] focus:ring-4 focus:ring-[#007CD6]/10 rounded-xl px-3.5 py-2.5 text-xs text-[#071A2B] placeholder:text-slate-400 font-manrope transition-all shadow-2xs"
                      />
                      {errors.phone && <span className="text-rose-600 font-mono text-[10px] block">{errors.phone.message}</span>}
                    </div>

                    {/* Company / Vessel Name */}
                    <div className="space-y-1">
                      <label className="flex items-center justify-between font-mono text-[11px] font-bold text-[#071A2B] tracking-wider uppercase">
                        <span className="flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-[#007CD6]" /> Company / Vessel Name
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">OPTIONAL</span>
                      </label>
                      <input
                        type="text"
                        {...register("companyName")}
                        placeholder="e.g. Vance Maritime Ltd / MT Oceanic Star"
                        className="w-full bg-[#FAFAF7] hover:bg-white focus:bg-white border border-slate-200 hover:border-slate-300 focus:border-[#007CD6] focus:ring-4 focus:ring-[#007CD6]/10 rounded-xl px-3.5 py-2.5 text-xs text-[#071A2B] placeholder:text-slate-400 font-manrope transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {/* Service Required */}
                    <div className="space-y-1">
                      <label className="flex items-center justify-between font-mono text-[11px] font-bold text-[#071A2B] tracking-wider uppercase">
                        <span className="flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-[#007CD6]" /> Service Required
                        </span>
                        <span className="text-[10px] font-mono text-[#007CD6] font-bold">* REQUIRED</span>
                      </label>
                      <div className="relative">
                        <select
                          {...register("serviceCategory", { required: "Please select a service" })}
                          className="w-full bg-[#FAFAF7] hover:bg-white focus:bg-white border border-slate-200 hover:border-slate-300 focus:border-[#007CD6] focus:ring-4 focus:ring-[#007CD6]/10 rounded-xl px-3.5 py-2.5 text-xs text-[#071A2B] font-manrope transition-all shadow-2xs appearance-none cursor-pointer pr-10"
                        >
                          <option value="">Select Service Category</option>
                          <option value="Full Technical Management">Full Technical Vessel Management</option>
                          <option value="RPSL Crew Logistics">RPSL-MUM-506 Crew Manning &amp; Logistics</option>
                          <option value="Commercial Chartering & Brokering">Commercial Chartering &amp; Post-Fixture</option>
                          <option value="Dry Dock Management">Dry Docking &amp; Marine Engineering</option>
                          <option value="Port Agency & Husbandry">Global Port Agency &amp; Husbandry</option>
                          <option value="Panama / Flag State Endorsements">Flag State Endorsements &amp; Seaman Books</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                      {errors.serviceCategory && <span className="text-rose-600 font-mono text-[10px] block">{errors.serviceCategory.message}</span>}
                    </div>

                    {/* Preferred Office Entity */}
                    <div className="space-y-1">
                      <label className="flex items-center justify-between font-mono text-[11px] font-bold text-[#071A2B] tracking-wider uppercase">
                        <span className="flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5 text-[#007CD6]" /> Command Hub
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">DIRECT ROUTING</span>
                      </label>
                      <div className="relative">
                        <select
                          {...register("entityPreference")}
                          className="w-full bg-[#FAFAF7] hover:bg-white focus:bg-white border border-slate-200 hover:border-slate-300 focus:border-[#007CD6] focus:ring-4 focus:ring-[#007CD6]/10 rounded-xl px-3.5 py-2.5 text-xs text-[#071A2B] font-manrope transition-all shadow-2xs appearance-none cursor-pointer pr-10"
                        >
                          <option value="Dubai LLC">Dubai Operations HQ (Oceanic Star Fleet LLC)</option>
                          <option value="India Pvt Ltd">India Operations HQ (Oceanic Star Shipping Pvt Ltd)</option>
                          <option value="Canada Hub">Canada Hub (Oceanic Star Shipping Inc.)</option>
                          <option value="Sri Lanka Branch">Sri Lanka Branch (Colombo Port &amp; Agency)</option>
                          <option value="Turkey Office">Turkey Hub (Istanbul Maritime Office)</option>
                          <option value="Singapore Hub">Singapore Hub (Opening Soon)</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Detailed Message */}
                  <div className="space-y-1">
                    <label className="flex items-center justify-between font-mono text-[11px] font-bold text-[#071A2B] tracking-wider uppercase">
                      <span className="flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#007CD6]" /> Vessel Specifications / Scope
                      </span>
                      <span className="text-[10px] font-mono text-[#007CD6] font-bold">* REQUIRED</span>
                    </label>
                    <textarea
                      rows={3}
                      {...register("message", { required: "Please specify your requirements" })}
                      placeholder="Specify vessel type (Tanker, Bulker, Offshore), DWT, flag registry, expected crewing complement, or port call schedule..."
                      className="w-full bg-[#FAFAF7] hover:bg-white focus:bg-white border border-slate-200 hover:border-slate-300 focus:border-[#007CD6] focus:ring-4 focus:ring-[#007CD6]/10 rounded-xl px-3.5 py-2.5 text-xs text-[#071A2B] placeholder:text-slate-400 font-manrope transition-all shadow-2xs resize-none"
                    />
                    {errors.message && <span className="text-rose-600 font-mono text-[10px] block">{errors.message.message}</span>}
                  </div>

                  {/* Transmit Action & Badges */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl font-mono font-bold text-xs tracking-wider uppercase bg-gradient-to-r from-[#071A2B] via-[#01666A] to-[#007CD6] hover:from-[#007CD6] hover:to-[#01666A] text-white shadow-[0_12px_28px_-8px_rgba(0,124,214,0.4)] hover:shadow-[0_16px_32px_-6px_rgba(0,124,214,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-70 disabled:pointer-events-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>TRANSMITTING DISPATCH SPECIFICATIONS...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT COMMERCIAL DISPATCH REQUEST</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="flex flex-wrap items-center justify-between text-[10px] font-mono text-slate-500 pt-1 border-t border-slate-100 gap-2">
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#01666A]" />
                        <span>RPSL-MUM-506 &amp; ISO 9001:2015</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Clock className="w-3.5 h-3.5 text-[#007CD6]" />
                        <span>2-Hour Guaranteed Response</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-600">
                        <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>24/7 Global Dispatch</span>
                      </span>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Redesigned Premium Seafarer Job Application Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#071A2B] via-[#0A2640] to-[#01666A] p-5 sm:p-6 text-white shadow-xl border border-white/10 overflow-hidden group">
              {/* Subtle Cyan Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D9E8]/12 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00D9E8]/20 transition-all duration-500" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#007CD6]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-[#00D9E8] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 group-hover:bg-[#00D9E8] group-hover:text-[#071A2B] transition-all duration-300">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 uppercase tracking-widest">
                        ACTIVE OPENINGS
                      </span>
                      <span className="text-[10px] font-mono text-slate-300 font-semibold">DG SHIPPING RPSL-MUM-506</span>
                    </div>
                    <h4 className="font-syne text-sm sm:text-base font-bold text-white tracking-tight leading-tight">
                      Seafarer Job Application Portal
                    </h4>
                    <p className="font-manrope text-[11px] text-slate-300 font-light leading-relaxed max-w-md">
                      Apply online for Master, Chief Engineer, Officer, and Rating rosters across global oil/chemical tanker and bulk carrier fleets.
                    </p>
                  </div>
                </div>

                <a
                  href="https://crmoceanicstarshipping.com/pages/job-application.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#00D9E8] hover:bg-white text-[#071A2B] font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_8px_20px_rgba(0,217,232,0.3)] hover:shadow-[0_12px_25px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>APPLY NOW</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
