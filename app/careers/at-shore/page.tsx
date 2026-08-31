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
import { Building2, ShieldCheck, Award, ArrowRight } from "lucide-react";

export default function AtShoreCareersPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [careerModalState, setCareerModalState] = useState<{ isOpen: boolean; jobTitle?: string }>({
    isOpen: false,
  });

  const shorePositions = [
    { title: "Technical Superintendent – Dry Bulk (Geared Vessels)", dept: "Technical Management", location: "Dubai HQ" },
    { title: "Crewing Manager", dept: "Executive Crew Command", location: "Dubai HQ" },
    { title: "Crewing Officer", dept: "Crew Management & Logistics", location: "Mumbai HQ" },
    { title: "Qualified Junior Company Secretary", dept: "Corporate Secretarial", location: "Mumbai HQ" },
    { title: "Attorney – Transactions And Legal Operations", dept: "Legal & Claims", location: "Dubai HQ" },
    { title: "Accounts Payable – Foreign Remittances", dept: "Finance & Accounts", location: "Mumbai HQ" },
    { title: "Account Payable Executive", dept: "Finance & Accounts", location: "Mumbai HQ" },
    { title: "Documentation Officer", dept: "STCW & Flag State Compliance", location: "Mumbai HQ" },
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
            <span className="px-3.5 py-1.5 bg-[#059669]/10 text-[#059669] border border-[#059669]/30 rounded-full font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#059669]" /> CAREERS AT SHORE
            </span>
            <span className="text-xs font-mono text-slate-500 font-bold hidden sm:inline">DUBAI &amp; MUMBAI COMMAND HUBS</span>
          </div>

          <h1 className="font-syne text-4xl sm:text-6xl lg:text-7xl font-black text-[#071A2B] tracking-tight leading-none">
            DRYDOCK SUPERINTENDENTS &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] via-[#0D9488] to-[#071A2B]">
              HQ COMMAND STAFF
            </span>
          </h1>

          <p className="font-manrope text-base sm:text-lg text-slate-600 font-normal max-w-3xl leading-relaxed">
            Join our regional hubs in Dubai, Mumbai, and Istanbul. Class-1 superintendents overseeing PMS maintenance, drydock overhauls, commercial dispatch, legal counsel, and corporate compliance.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-700 font-bold">
            <span className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-[#059669]" /> CLASS-1 SUPERINTENDENCY
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl border border-slate-200">
              <Award className="w-4 h-4 text-[#0077B6]" /> ISO 9001:2015 AUDITED
            </span>
          </div>
        </div>
      </section>

      {/* SHORE OPENINGS DIRECTORY */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1400px] mx-auto space-y-8">
        <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-[#059669] tracking-widest uppercase block mb-1">
              // SHORE OPPORTUNITIES
            </span>
            <h2 className="font-syne text-2xl sm:text-4xl font-bold text-[#071A2B]">
              OPEN SHORE POSITIONS ({shorePositions.length})
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shorePositions.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-4 hover:border-[#059669] transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 bg-emerald-50 text-[#059669] rounded-md border border-emerald-200 font-bold">
                    {p.dept}
                  </span>
                  <span className="text-slate-500 font-bold">{p.location}</span>
                </div>
                <h3 className="font-syne text-xl font-bold text-[#071A2B] pt-1">{p.title}</h3>
              </div>

              <button
                onClick={() => setCareerModalState({ isOpen: true, jobTitle: p.title })}
                className="w-full py-3 bg-[#059669] hover:bg-[#071A2B] text-white text-xs font-mono font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>APPLY AT SHORE</span>
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
