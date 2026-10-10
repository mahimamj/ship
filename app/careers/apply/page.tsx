"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CinematicNavbar } from "../../components/CinematicNavbar";
import { Footer } from "../../components/Footer";
import { QuoteModal } from "../../components/QuoteModal";
import { MaritimeCommandPalette } from "../../components/MaritimeCommandPalette";
import { OceanicAIChatbotWidget } from "../../components/OceanicAIChatbotWidget";
import { FloatingWhatsAppButton } from "../../components/FloatingWhatsAppButton";
import { Anchor, ExternalLink, ShieldCheck } from "lucide-react";
import { SEAFARER_JOB_APPLICATION_URL } from "@/lib/content/careers";

export default function SeafarerApplyPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F5F2] text-[#071A2B] font-sans antialiased overflow-x-hidden flex flex-col">
      <CinematicNavbar
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      <section className="pt-28 pb-6 px-6 md:px-12 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <span className="px-3.5 py-1.5 bg-[#0077B6]/10 text-[#0077B6] border border-[#0077B6]/30 rounded-full font-mono text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2">
              <Anchor className="w-4 h-4" /> SEAFARER APPLICATION
            </span>
            <h1 className="font-syne text-3xl sm:text-5xl font-black text-[#071A2B] tracking-tight leading-none">
              Apply for your next voyage
            </h1>
            <p className="font-manrope text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Submit your rank, certificates, and sailing experience through Oceanic Star&apos;s official crewing portal. Applications are reviewed by the RPSL recruitment desk.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-bold">
            <span className="flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-xl border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-[#0077B6]" /> DG RPSL-MUM-506
            </span>
            <a
              href={SEAFARER_JOB_APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-[#0077B6] text-white rounded-xl hover:bg-[#071A2B] transition-colors"
            >
              Open portal in a new tab
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/careers/at-sea"
              className="px-3 py-2 rounded-xl border border-slate-200 text-slate-600 hover:border-[#0077B6] hover:text-[#0077B6] transition-colors"
            >
              Back to sea careers
            </Link>
          </div>
        </div>
      </section>

      <section className="flex-1 px-3 sm:px-6 md:px-12 py-4 md:py-6">
        <div className="max-w-[1400px] mx-auto bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm min-h-[75vh]">
          <iframe
            src={SEAFARER_JOB_APPLICATION_URL}
            title="Oceanic Star seafarer job application"
            className="w-full h-[75vh] md:h-[82vh] border-0"
            allow="clipboard-write"
          />
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <MaritimeCommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />
      <OceanicAIChatbotWidget onOpenQuote={() => setIsQuoteOpen(true)} />
      <FloatingWhatsAppButton />
    </div>
  );
}
