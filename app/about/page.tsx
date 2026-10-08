"use client";

import React, { useState } from "react";
import { CinematicNavbar } from "../components/CinematicNavbar";
import { CareerJourneyMilestones } from "../components/CareerJourneyMilestones";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { QuoteModal } from "../components/QuoteModal";
import { MaritimeCommandPalette } from "../components/MaritimeCommandPalette";
import { OceanicAIChatbotWidget } from "../components/OceanicAIChatbotWidget";
import { FloatingWhatsAppButton } from "../components/FloatingWhatsAppButton";

export default function AboutPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#071A2B] font-sans antialiased overflow-x-hidden selection:bg-[#0077B6] selection:text-white">
      <CinematicNavbar
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      <main className="pt-24">
        <CareerJourneyMilestones onOpenQuote={() => setIsQuoteOpen(true)} />

        <div className="bg-[#FFFFFF] text-[#071A2B]">
          <ContactSection />
          <Footer />
        </div>
      </main>

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
