"use client";

import React, { useState } from "react";
import { CinematicNavbar } from "../components/CinematicNavbar";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { QuoteModal } from "../components/QuoteModal";
import { MaritimeCommandPalette } from "../components/MaritimeCommandPalette";
import { OceanicAIChatbotWidget } from "../components/OceanicAIChatbotWidget";
import { FloatingWhatsAppButton } from "../components/FloatingWhatsAppButton";
import { LatestNewsSection, LinkedInIcon } from "../components/LatestNewsSection";
import { OurImpactSection } from "../components/OurImpactSection";
import { Ship, Anchor, ShieldCheck, Activity, Sparkles } from "lucide-react";

export default function FleetPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F2] text-[#071A2B] font-sans antialiased overflow-x-hidden">
      <CinematicNavbar
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* News & Impact Hero Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 bg-[#0A66C2]/10 text-[#0A66C2] border border-[#0A66C2]/30 rounded-full font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" /> COMPANY INSIGHTS &amp; SOCIAL IMPACT
            </span>
            <span className="text-xs font-mono text-slate-500 font-bold hidden sm:inline">OFFICIAL LINKEDIN FEED &amp; ESG HIGHLIGHTS</span>
          </div>

          <h1 className="font-syne text-4xl sm:text-6xl lg:text-7xl font-black text-[#071A2B] tracking-tight leading-none">
            COMMUNITY, NEWS &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A66C2] via-[#0077B6] to-[#059669]">
              MARITIME IMPACT
            </span>
          </h1>

          <p className="font-manrope text-base sm:text-lg text-slate-600 font-normal max-w-3xl leading-relaxed">
            Stay updated with real-time news from Oceanic Star Group&apos;s official LinkedIn channel, seafarer photography spotlights, marine engineering awards, and our ongoing mission to champion gender equality at sea.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-700 font-bold">
            <span className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl border border-slate-200">
              <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" /> LINKEDIN: oceanic-star-shipping-private-limited
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl border border-slate-200">
              <Sparkles className="w-4 h-4 text-[#059669]" /> UN SDG 5 &amp; 14 ADVOCATE
            </span>
          </div>
        </div>
      </section>

      {/* 1. LATEST NEWS SECTION (5 LINKEDIN POSTS FROM COMPANY ID) */}
      <LatestNewsSection />

      {/* 2. OUR IMPACT SECTION (WOMEN SEAFARERS & SUSTAINABILITY) */}
      <OurImpactSection />

      {/* CONTACT & FOOTER */}
      <div className="bg-white">
        <ContactSection />
        <Footer />
      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <MaritimeCommandPalette isOpen={isCommandPaletteOpen} onClose={() => setIsCommandPaletteOpen(false)} onOpenQuote={() => setIsQuoteOpen(true)} />
      <OceanicAIChatbotWidget onOpenQuote={() => setIsQuoteOpen(true)} />
      <FloatingWhatsAppButton />
    </div>
  );
}
