"use client";

import React, { useState } from "react";
import { CinematicNavbar } from "../components/CinematicNavbar";
import { InteractiveFleetExplosion } from "../components/InteractiveFleetExplosion";
import { FleetVisualizationSection } from "../components/FleetVisualizationSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { QuoteModal } from "../components/QuoteModal";
import { MaritimeCommandPalette } from "../components/MaritimeCommandPalette";
import { OceanicAIChatbotWidget } from "../components/OceanicAIChatbotWidget";
import { FloatingWhatsAppButton } from "../components/FloatingWhatsAppButton";
import { Ship, Anchor, ShieldCheck, Activity } from "lucide-react";

export default function FleetPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F2] text-[#071A2B] font-sans antialiased overflow-x-hidden">
      <CinematicNavbar
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Fleet Hero Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 bg-[#0077B6]/10 text-[#0077B6] border border-[#0077B6]/30 rounded-full font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              <Ship className="w-4 h-4 text-[#0077B6]" /> FLEET COMMAND &amp; MATRIX
            </span>
            <span className="text-xs font-mono text-slate-500 font-bold hidden sm:inline">59 VESSELS IN ACTIVE OPERATION</span>
          </div>

          <h1 className="font-syne text-4xl sm:text-6xl lg:text-7xl font-black text-[#071A2B] tracking-tight leading-none">
            COMMERCIAL &amp; DUAL-FUEL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] via-[#059669] to-[#071A2B]">
              MANAGED FLEET MATRIX
            </span>
          </h1>

          <p className="font-manrope text-base sm:text-lg text-slate-600 font-normal max-w-3xl leading-relaxed">
            Oceanic Star Fleet operates 59 high-specification commercial vessels across oil tankers, LNG carriers, container ships, and dry bulk vessels under Class-1 superintendency and ISM/ISPS accreditation.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-700 font-bold">
            <span className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-[#059669]" /> SIRE 2.0 &amp; TMSA 3 COMPLIANT
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl border border-slate-200">
              <Anchor className="w-4 h-4 text-[#0077B6]" /> 29 DUAL-FUEL SHIPS ON ORDER
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl border border-slate-200">
              <Activity className="w-4 h-4 text-[#D97706]" /> 24/7 AIS TELEMETRY
            </span>
          </div>
        </div>
      </section>

      {/* 59 VESSELS PARTICLE MORPHING MATRIX */}
      <InteractiveFleetExplosion />

      {/* FLEET VISUALIZATION & SPECS */}
      <FleetVisualizationSection onOpenQuote={() => setIsQuoteOpen(true)} />

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
