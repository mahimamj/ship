"use client";

import React, { useState } from "react";
import { CinematicNavbar } from "../../components/CinematicNavbar";
import { CareerJobBoardSection } from "../../components/CareerJobBoardSection";
import { ContactSection } from "../../components/ContactSection";
import { Footer } from "../../components/Footer";
import { CareerModal } from "../../components/CareerModal";
import { QuoteModal } from "../../components/QuoteModal";
import { MaritimeCommandPalette } from "../../components/MaritimeCommandPalette";
import { OceanicAIChatbotWidget } from "../../components/OceanicAIChatbotWidget";
import { FloatingWhatsAppButton } from "../../components/FloatingWhatsAppButton";
import { Anchor, ShieldCheck, Award, ArrowRight, Compass } from "lucide-react";

export default function AtSeaCareersPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [careerModalState, setCareerModalState] = useState<{ isOpen: boolean; jobTitle?: string }>({
    isOpen: false,
  });

  const seaRanks = [
    { rank: "Master Captain (FG)", fleet: "LNG / LPG Dual-Fuel Fleet", rotation: "3 Months On / 3 Off" },
    { rank: "Chief Engineer (Class 1)", fleet: "Dual-Fuel LNG & Container Fleet", rotation: "3 Months On / 3 Off" },
    { rank: "Chief Officer (Class 2)", fleet: "Oil / Chemical Tankers", rotation: "4 Months On / 4 Off" },
    { rank: "Second Engineer (Class 2)", fleet: "Dry Bulk & Container Ships", rotation: "4 Months On / 4 Off" },
    { rank: "Electro-Technical Officer (ETO)", fleet: "High-Voltage DP2 Vessels", rotation: "4 Months On / 4 Off" },
    { rank: "Bosun & Able Seaman (AB)", fleet: "Global Dispatch Fleet", rotation: "6 Months Rotation" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F2] text-[#071A2B] font-sans antialiased overflow-x-hidden">
      <CinematicNavbar
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Hero Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 bg-[#0077B6]/10 text-[#0077B6] border border-[#0077B6]/30 rounded-full font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              <Anchor className="w-4 h-4 text-[#0077B6]" /> CAREERS AT SEA
            </span>
            <span className="text-xs font-mono text-slate-500 font-bold hidden sm:inline">1,800+ SEAFARERS IN OPERATION</span>
          </div>

          <h1 className="font-syne text-4xl sm:text-6xl lg:text-7xl font-black text-[#071A2B] tracking-tight leading-none">
            MASTER OFFICERS &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] via-[#0284C7] to-[#071A2B]">
              CHIEF ENGINEERS
            </span>
          </h1>

          <p className="font-manrope text-base sm:text-lg text-slate-600 font-normal max-w-3xl leading-relaxed">
            To provide world-class seafarer crew management across LNG, tanker, container, and dry bulk fleets in a safe, reliable, and MLC 2006 compliant manner under Directorate General of Shipping approval (RPSL-MUM-506).
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-700 font-bold">
            <span className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-[#0077B6]" /> STCW 2010 CERTIFIED
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl border border-slate-200">
              <Award className="w-4 h-4 text-[#059669]" /> MLC 2006 COMPLIANT
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl border border-slate-200">
              <Compass className="w-4 h-4 text-[#D97706]" /> DG RPSL-MUM-506 APPROVED
            </span>
          </div>
        </div>
      </section>

      {/* SEA RANKS DIRECTORY */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1400px] mx-auto space-y-8">
        <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-[#0077B6] tracking-widest uppercase block mb-1">
              // SEA CONTRACTS &amp; ROTATIONS
            </span>
            <h2 className="font-syne text-2xl sm:text-4xl font-bold text-[#071A2B]">
              ACTIVE SEA RANKS ({seaRanks.length})
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {seaRanks.map((r, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-4 hover:border-[#0077B6] transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 bg-sky-50 text-[#0077B6] rounded-md border border-sky-200 font-bold">
                    {r.fleet}
                  </span>
                  <span className="text-slate-500 font-bold">{r.rotation}</span>
                </div>
                <h3 className="font-syne text-xl font-bold text-[#071A2B] pt-1">{r.rank}</h3>
              </div>

              <button
                onClick={() => setCareerModalState({ isOpen: true, jobTitle: r.rank })}
                className="w-full py-3 bg-[#0077B6] hover:bg-[#071A2B] text-white text-xs font-mono font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>APPLY AT SEA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FULL CAREER JOB BOARD SECTION */}
      <CareerJobBoardSection onOpenApplyModal={(title) => setCareerModalState({ isOpen: true, jobTitle: title })} />

      {/* CONTACT & FOOTER */}
      <div className="bg-white">
        <ContactSection />
        <Footer />
      </div>

      <CareerModal
        isOpen={careerModalState.isOpen}
        jobTitle={careerModalState.jobTitle}
        onClose={() => setCareerModalState({ isOpen: false })}
      />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <MaritimeCommandPalette isOpen={isCommandPaletteOpen} onClose={() => setIsCommandPaletteOpen(false)} onOpenQuote={() => setIsQuoteOpen(true)} />
      <OceanicAIChatbotWidget onOpenQuote={() => setIsQuoteOpen(true)} />
      <FloatingWhatsAppButton />
    </div>
  );
}
