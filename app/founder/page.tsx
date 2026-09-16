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
  Phone,
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
    <div className="min-h-screen bg-[#F5F5F2] text-[#071A2B] font-sans antialiased selection:bg-[#0077B6] selection:text-white">
      <CinematicNavbar
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* 1. FOUNDER HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#061B2A] text-white overflow-hidden">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0077B6]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C59B27]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Col: Text & Profile Intro */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#00D9E8]/10 text-[#00D9E8] border border-[#00D9E8]/30 font-mono text-xs font-bold uppercase tracking-widest">
                <User className="w-3.5 h-3.5" /> FOUNDER &amp; MANAGING DIRECTOR
              </div>

              <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
                RAM B. KESHARI
              </h1>

              <p className="font-mono text-xs sm:text-sm text-[#C59B27] font-bold tracking-widest uppercase">
                FOUNDER &amp; MANAGING DIRECTOR — OCEANIC STAR GROUP
              </p>

              <p className="font-manrope text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                A seasoned maritime leader with over two decades of hands-on experience across merchant marine operations, vessel chartering, RPSL crew management, and international ship management.
              </p>

              {/* Founder Key Credentials Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-white/10 text-white border border-white/15 font-mono text-xs font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C59B27]" /> 20+ Years Maritime Leadership
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-white/10 text-white border border-white/15 font-mono text-xs font-semibold flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#00D9E8]" /> 5 Global Command Hubs
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-white/10 text-white border border-white/15 font-mono text-xs font-semibold flex items-center gap-2">
                  <Anchor className="w-4 h-4 text-sky-400" /> 59+ Vessels Managed
                </span>
              </div>
            </div>

            {/* Right Col: Founder Portrait Card & Personal Social Channels */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 backdrop-blur-xl border border-white/15 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C59B27]/20 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#C59B27] to-[#0077B6] p-1 shadow-lg shrink-0">
                    <div className="w-full h-full rounded-xl bg-[#061B2A] flex items-center justify-center text-white font-syne font-black text-2xl">
                      RBK
                    </div>
                  </div>
                  <div>
                    <h3 className="font-syne text-xl font-extrabold text-white">Ram B. Keshari</h3>
                    <p className="font-mono text-xs text-sky-300 font-semibold mt-0.5">Maritime Pioneer &amp; MD</p>
                    <span className="inline-block font-mono text-[10px] text-slate-400 mt-1">
                      Navi Mumbai • Dubai • Colombo • Istanbul
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 space-y-3 font-manrope text-xs text-slate-300">
                  <p className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-[#00D9E8] shrink-0" />
                    <a href="mailto:info@oceanicstarshipping.com" className="hover:text-white transition font-bold">info@oceanicstarshipping.com</a>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-[#00D9E8] shrink-0" />
                    <span>Direct Hotline: +91 90043 90041</span>
                  </p>
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
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto space-y-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#061B2A] via-[#0A243C] to-[#0077B6] text-white shadow-xl relative overflow-hidden space-y-6">
            <Quote className="w-12 h-12 text-[#C59B27]/40 pointer-events-none" />

            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed tracking-tight text-white">
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
