"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  Award,
  ShieldCheck,
  Building2,
  Anchor,
  ArrowUpRight,
  User,
  Quote,
  Globe,
  Mail,
} from "lucide-react";
import { CinematicNavbar } from "../components/CinematicNavbar";
import { Footer } from "../components/Footer";
import { CareerJourneyMilestones } from "../components/CareerJourneyMilestones";
import { FollowTheJourneySection } from "../components/FollowTheJourneySection";
import { QuoteModal } from "../components/QuoteModal";
import { MaritimeCommandPalette } from "../components/MaritimeCommandPalette";
import { OceanicAIChatbotWidget } from "../components/OceanicAIChatbotWidget";
import { FloatingWhatsAppButton } from "../components/FloatingWhatsAppButton";

export default function FounderPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F2] text-[#071A2B] font-sans antialiased selection:bg-[#007CD6] selection:text-white">
      <CinematicNavbar
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* 1. FOUNDER HERO SECTION */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-14 bg-[#061B2A] text-white overflow-hidden">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#007CD6]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C59B27]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Col: Text & Profile Intro */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007CD6]/10 text-[#007CD6] border border-[#007CD6]/30 font-mono text-xs font-bold uppercase tracking-widest">
                <User className="w-3.5 h-3.5" /> FOUNDER &amp; MANAGING DIRECTOR
              </div>

              <h1 className="font-syne text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
                RAM B. KESHARI
              </h1>

              <p className="font-mono text-xs sm:text-sm text-[#C59B27] font-bold tracking-widest uppercase">
                FOUNDER &amp; MANAGING DIRECTOR — OCEANIC STAR GROUP
              </p>

              <p className="font-manrope text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed max-w-2xl">
                A seasoned maritime leader with over two decades of hands-on experience across merchant marine operations, vessel chartering, RPSL crew management, and international ship management.
              </p>

              {/* Founder Key Credentials Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-white/10 text-white border border-white/15 font-mono text-xs font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C59B27]" /> 20+ Years Maritime Leadership
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-white/10 text-white border border-white/15 font-mono text-xs font-semibold flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#007CD6]" /> 6 Global Command Hubs
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-white/10 text-white border border-white/15 font-mono text-xs font-semibold flex items-center gap-2">
                  <Anchor className="w-4 h-4 text-sky-400" /> 59+ Vessels Managed
                </span>
              </div>
            </div>

            {/* Right Col: Founder Portrait Card & Personal Social Channels */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C59B27]/20 rounded-full blur-2xl pointer-events-none" />

                {/* Founder Photo */}
                <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-xl group">
                  <img
                    src="/images/founder.jpg"
                    alt="Ram B. Keshari - Founder & Managing Director, Oceanic Star Shipping Pvt. Ltd."
                    className="w-full h-80 sm:h-96 object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B2A] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#061B2A]/90 backdrop-blur-md border border-white/15 space-y-1">
                    <h3 className="font-syne text-lg sm:text-xl font-extrabold text-white">Ram B. Keshari</h3>
                    <p className="font-mono text-xs text-[#007CD6] font-semibold">Founder &amp; Managing Director</p>
                    <p className="font-mono text-[10px] text-slate-300">Oceanic Star Shipping Pvt. Ltd.</p>
                  </div>
                </div>

                {/* Executive Email Direct Callout */}
                <div className="pt-2">
                  <a
                    href="mailto:ceo@oceanicstarfleet.com"
                    className="group block p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#01666A]/20 via-[#007CD6]/20 to-[#061B2A]/60 border border-[#007CD6]/40 hover:border-[#007CD6] shadow-[0_0_20px_rgba(0,124,214,0.15)] hover:shadow-[0_0_30px_rgba(0,124,214,0.35)] transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#007CD6] font-bold flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#007CD6]" /> DIRECT EXECUTIVE DESK
                      </span>
                      <span className="text-[10px] font-mono text-sky-200/70 group-hover:text-white transition-colors">
                        Click to Mail ↗
                      </span>
                    </div>
                    <span className="font-syne text-lg sm:text-xl md:text-2xl font-black text-white group-hover:text-[#007CD6] transition-colors block break-all tracking-tight">
                      ceo@oceanicstarfleet.com
                    </span>
                  </a>
                </div>

                {/* Personal Channels Callout */}
                <div className="pt-2">
                  <span className="font-mono text-[11px] font-bold text-[#C59B27] uppercase tracking-wider block mb-3">
                    Connect Directly (Personal Channels)
                  </span>
                  <div className="space-y-2.5">
                    <a
                      href="https://www.linkedin.com/in/ram-b-keshari-73969954/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-[#0A66C2] text-white border border-white/10 transition group"
                    >
                      <span className="font-mono text-xs font-semibold">LinkedIn Profile</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition" />
                    </a>

                    <a
                      href="https://www.instagram.com/keshariramb?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-[#E4405F] text-white border border-white/10 transition group"
                    >
                      <span className="font-mono text-xs font-semibold">Instagram Profile</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition" />
                    </a>

                    <a
                      href="https://www.facebook.com/keshari.ramb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-[#1877F2] text-white border border-white/10 transition group"
                    >
                      <span className="font-mono text-xs font-semibold">Facebook Profile</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FOUNDER'S PHILOSOPHY & STATEMENT */}
      <section className="py-10 md:py-14 px-6 md:px-12 bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto space-y-8">
          
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#061B2A] via-[#0A243C] to-[#007CD6] text-white shadow-lg relative overflow-hidden space-y-4">
            <Quote className="w-10 h-10 text-[#C59B27]/40 pointer-events-none" />

            <blockquote className="font-serif text-lg sm:text-xl md:text-2xl font-bold leading-relaxed tracking-tight text-white">
              &ldquo;Our mission is not only to manage vessels but to inspire, develop, and support the backbone of the maritime industry — our seafarers. Compliance, crew welfare, and absolute operational integrity are the true drivers of sustainable fleet management.&rdquo;
            </blockquote>

            <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
              <div>
                <strong className="text-white font-bold text-sm block">Ram B. Keshari</strong>
                <span className="text-[#00D9E8]">Founder &amp; Managing Director</span>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-slate-300 border border-white/15 w-fit">
                ESTABLISHED 2002 // NAVI MUMBAI &amp; DUBAI
              </span>
            </div>
          </div>

          {/* Detailed Biography & Leadership Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6 text-[#071A2B] font-manrope">
              <div className="space-y-2">
                <span className="label-mono text-[#007CD6] block font-bold">// EXECUTIVE BIOGRAPHY</span>
                <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#061B2A] tracking-tight">
                  Steering Maritime Innovation &amp; Seafarer Excellence
                </h2>
              </div>

              <p className="text-base leading-relaxed text-slate-700 font-normal">
                <strong>Mr. Ram B. Keshari</strong> is the visionary Founder and Managing Director of <strong>Oceanic Star Shipping Pvt. Ltd.</strong> With over two decades of dedicated leadership in international maritime logistics, vessel technical management, and RPSL crew management, he has transformed Oceanic Star into a trusted global ship management enterprise.
              </p>

              <p className="text-base leading-relaxed text-slate-700 font-normal">
                Under his leadership, Oceanic Star Shipping expanded its strategic footprint across key maritime hubs—establishing operational command centers in <strong>Navi Mumbai (India), Dubai (UAE), Colombo (Sri Lanka), Istanbul (Turkey), Singapore, and Canada</strong>. His unwavering commitment to Director General of Shipping (DG Shipping India) compliance, ISO 9001:2015 quality standards, and seafarer welfare has earned the company premier industry accreditations.
              </p>

              <p className="text-base leading-relaxed text-slate-700 font-normal">
                Beyond operational management, Mr. Keshari is a passionate advocate for seafarer training, career progression, and transparent crew logistics. He works closely with international ship owners, port authorities, and maritime regulatory bodies to maintain flawless fleet safety, environmental compliance, and vessel availability.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#FAFAF7] p-8 rounded-3xl border border-slate-200 space-y-6 shadow-sm">
              <h3 className="font-syne text-xl font-bold text-[#061B2A] border-b border-slate-200 pb-4">
                Leadership Highlights
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#007CD6]/10 text-[#007CD6] shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-syne text-sm font-bold text-[#061B2A]">RPSL Approved Manning</h4>
                    <p className="text-xs text-slate-600 font-manrope mt-1">Full DG Shipping compliance (License: RPSL-MUM-506) for merchant marine crew deployment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#C59B27]/10 text-[#C59B27] shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-syne text-sm font-bold text-[#061B2A]">Global Maritime Reach</h4>
                    <p className="text-xs text-slate-600 font-manrope mt-1">Connecting vessel owners &amp; seafarers across India, Middle East, Europe, and Asia-Pacific.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#01666A]/10 text-[#01666A] shrink-0">
                    <Anchor className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-syne text-sm font-bold text-[#061B2A]">Technical Vessel Management</h4>
                    <p className="text-xs text-slate-600 font-manrope mt-1">End-to-end dry dock supervision, ISM/ISPS audits, and marine engineering maintenance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FOUNDER & LEADERSHIP MILESTONES */}
      <div className="bg-[#FAFAF7]">
        <CareerJourneyMilestones />
      </div>

      {/* 4. CONNECT WITH THE FOUNDER */}
      <FollowTheJourneySection />

      {/* FOOTER & OVERLAYS */}
      <Footer />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      <MaritimeCommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      <OceanicAIChatbotWidget
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      <FloatingWhatsAppButton />
    </div>
  );
}
