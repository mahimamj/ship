"use client";

import React, { useState } from "react";
import { CinematicCustomCursor } from "./components/CinematicCustomCursor";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { CinematicNavbar } from "./components/CinematicNavbar";
import { FullPageLayerStack } from "./components/FullPageLayerStack";
import {
  CinematicHeroLayer,
  CinematicVisionLayer,
  CinematicMissionLayer,
} from "./components/CinematicScrollStory";
import { SplitScreenStory } from "./components/SplitScreenStory";
import { FleetSilhouetteStats } from "./components/FleetSilhouetteStats";
import { Section2StatementStats } from "./components/Section2StatementStats";
import { InteractiveVerticalCapabilities } from "./components/InteractiveVerticalCapabilities";
import { GlobalPresenceMap } from "./components/GlobalPresenceMap";
import { FleetVisualizationSection } from "./components/FleetVisualizationSection";
import { CinematicOperationsSection } from "./components/CinematicOperationsSection";
import { HorizontalTimelineSection } from "./components/HorizontalTimelineSection";
import { CertificationsMarquee } from "./components/CertificationsMarquee";
import { CertificationsSection } from "./components/CertificationsSection";
import { WhyUsStatementSection } from "./components/WhyUsStatementSection";
import { CareersSection } from "./components/CareersSection";
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
    <div className="min-h-screen bg-[#071A2B] text-white font-sans antialiased overflow-x-hidden selection:bg-[#176B87] selection:text-white">
      {/* Custom Cursor & Scroll Progress Indicator Bar */}
      <CinematicCustomCursor />
      <ScrollProgressBar />

      {/* Minimal Top Header Navbar */}
      <CinematicNavbar
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* 01: Hero Space */}
      <CinematicHeroLayer
        onOpenVideoModal={() => setIsVideoModalOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* 02: Pinned Split-Screen Story (Screenshot 2: Our Vision & Our Mission) */}
      <SplitScreenStory onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 03: Blue Fleet Silhouette Statistics (Screenshot 3: 59 Vessels & 29 Ships) */}
      <FleetSilhouetteStats onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 04: Heritage & Scale Statistics */}
      <Section2StatementStats />

      {/* 05: Core Capabilities */}
      <InteractiveVerticalCapabilities
        onSelectService={() => setIsQuoteOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* 06: Global Presence Network Map */}
      <GlobalPresenceMap />

      {/* 07: Fleet Matrix & AIS Telemetry */}
      <FleetVisualizationSection onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 08: Cinematic Operations (01 AT SEA, 02 ON BOARD, 03 ON SHORE) */}
      <CinematicOperationsSection />

      {/* 09: Company Timeline */}
      <HorizontalTimelineSection />

      {/* 10: Certifications & Accreditations */}
      <div className="bg-[#F5F5F2] text-[#071A2B]">
        <CertificationsMarquee />
        <CertificationsSection />
      </div>

      {/* 11: Why Choose Us */}
      <WhyUsStatementSection />

      {/* 12: Careers Section (At Shore & At Sea) */}
      <CareersSection
        onOpenApplyModal={(jobTitle) => setCareerModalState({ isOpen: true, jobTitle })}
      />

      {/* 13: Final Commercial CTA */}
      <FinalCinematicCTA onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 14: Contact Operations & Footer */}
      <div className="bg-[#F5F5F2] text-[#071A2B]">
        <ContactSection />
        <Footer />
      </div>

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

