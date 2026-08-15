"use client";

import React, { useState } from "react";
import { CinematicCustomCursor } from "./components/CinematicCustomCursor";
import { CinematicNavbar } from "./components/CinematicNavbar";
import { InteractiveCinematicHero } from "./components/InteractiveCinematicHero";
import { Section2StatementStats } from "./components/Section2StatementStats";
import { InteractiveVerticalCapabilities } from "./components/InteractiveVerticalCapabilities";
import { InteractiveFreightCalculator } from "./components/InteractiveFreightCalculator";
import { GlobalPresenceMap } from "./components/GlobalPresenceMap";
import { FleetVisualizationSection } from "./components/FleetVisualizationSection";
import { CinematicOperationsSection } from "./components/CinematicOperationsSection";
import { HorizontalTimelineSection } from "./components/HorizontalTimelineSection";
import { CertificationsMarquee } from "./components/CertificationsMarquee";
import { CertificationsSection } from "./components/CertificationsSection";
import { MissionVisionSplit } from "./components/MissionVisionSplit";
import { WhyUsStatementSection } from "./components/WhyUsStatementSection";
import { FinalCinematicCTA } from "./components/FinalCinematicCTA";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton";

import { FleetVideoModal } from "./components/FleetVideoModal";
import { QuoteModal } from "./components/QuoteModal";
import { CareerModal } from "./components/CareerModal";
import { MaritimeCommandPalette } from "./components/MaritimeCommandPalette";
import { OceanicAIChatbotWidget } from "./components/OceanicAIChatbotWidget";

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [careerModalState, setCareerModalState] = useState<{ isOpen: boolean; jobTitle?: string }>({
    isOpen: false,
  });

  return (
    <div className="min-h-screen bg-[#F5F5F2] text-[#071A2B] font-sans antialiased overflow-x-hidden selection:bg-[#176B87] selection:text-white">
      {/* Custom Cursor */}
      <CinematicCustomCursor />

      {/* Minimal Top Header Navbar */}
      <CinematicNavbar
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Hero Section with Live Port & Tracking Search */}
      <InteractiveCinematicHero
        onOpenVideoModal={() => setIsVideoModalOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Section 2: Statement & Count-Up Stats */}
      <Section2StatementStats />

      {/* Section 3: Interactive Vertical Capabilities */}
      <InteractiveVerticalCapabilities
        onSelectService={() => setIsQuoteOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Solarpanti-Style Live Freight & TEU Logistics Engineering Calculator */}
      <InteractiveFreightCalculator
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Section 4: Global Presence Vector Map */}
      <GlobalPresenceMap />

      {/* Section 5: Fleet Visualization Breakdown */}
      <FleetVisualizationSection onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Section 6: Cinematic Operations (01 AT SEA, 02 ON BOARD, 03 ON SHORE) */}
      <CinematicOperationsSection />

      {/* Section 7: Horizontal Timeline */}
      <HorizontalTimelineSection />

      {/* Section 8: Certifications Marquee & Full Accreditation Grid */}
      <CertificationsMarquee />
      <CertificationsSection />

      {/* Section 9: Mission & Vision Split */}
      <MissionVisionSplit />

      {/* Section 10: Why Choose Us Statement Section */}
      <WhyUsStatementSection />

      {/* Section 11: Final Cinematic CTA */}
      <FinalCinematicCTA onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Section 12: Contact Operations */}
      <ContactSection />

      {/* Section 13: Footer */}
      <Footer />

      {/* Lightbox & Proposal Modals */}
      <FleetVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      <CareerModal
        isOpen={careerModalState.isOpen}
        jobTitle={careerModalState.jobTitle}
        onClose={() => setCareerModalState({ isOpen: false })}
      />

      {/* Solarpanti-Style Maritime Command Palette Modal (Ctrl + K) */}
      <MaritimeCommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Solarpanti-Style Floating AI Assistant Widget Drawer */}
      <OceanicAIChatbotWidget
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Persistent Floating WhatsApp Chat Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}
