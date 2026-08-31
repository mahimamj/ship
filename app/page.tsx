"use client";

import React, { useState } from "react";
import { CinematicCustomCursor } from "./components/CinematicCustomCursor";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { ScrollOrchestrator } from "./components/ScrollOrchestrator";
import { ScrollSection } from "./components/ScrollSection";
import { CinematicNavbar } from "./components/CinematicNavbar";
import { CinematicHeroLayer } from "./components/CinematicScrollStory";
import { VoyageTheatreSection } from "./components/VoyageTheatreSection";
import { SplitScreenStory } from "./components/SplitScreenStory";
import { GsapHorizontalScrollGallery } from "./components/GsapHorizontalScrollGallery";
import { Section2StatementStats } from "./components/Section2StatementStats";
import { InteractiveVerticalCapabilities } from "./components/InteractiveVerticalCapabilities";
import { GlobalPresenceMap } from "./components/GlobalPresenceMap";
import { MissionVisionCutoutSection } from "./components/MissionVisionCutoutSection";
import { CareersCutoutSection } from "./components/CareersCutoutSection";
import { FleetVisualizationSection } from "./components/FleetVisualizationSection";
import { InteractiveFleetExplosion } from "./components/InteractiveFleetExplosion";
import { HorizontalTimelineSection } from "./components/HorizontalTimelineSection";
import { CertificationsMarquee } from "./components/CertificationsMarquee";
import { CertificationsSection } from "./components/CertificationsSection";
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
    <div className="min-h-screen bg-[#071A2B] text-white font-sans antialiased overflow-x-hidden selection:bg-[#176B87] selection:text-white">
      <ScrollOrchestrator />
      <CinematicCustomCursor />
      <ScrollProgressBar />

      <CinematicNavbar
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Cinematic stack: sticky layers, no empty navy gap */}
      <div id="cinematic-stack" className="relative w-full">
        <ScrollSection stack>
          <CinematicHeroLayer
            onOpenVideoModal={() => setIsVideoModalOpen(true)}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        </ScrollSection>
      </div>

      <VoyageTheatreSection />

      <SplitScreenStory onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* GSAP Scroll Horizontal Pin Gallery & SVG Route Draw */}
      <GsapHorizontalScrollGallery onOpenQuote={() => setIsQuoteOpen(true)} />




      <Section2StatementStats />

      <InteractiveVerticalCapabilities
        onSelectService={() => setIsQuoteOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />



      <GlobalPresenceMap />

      {/* 🚢 MISSION & VISION CLEAN SPLIT SECTION */}
      <MissionVisionCutoutSection />

      {/* 💼 CAREERS AT SEA & ON SHORE RECTANGULAR CUTOUT REVEAL */}
      <CareersCutoutSection
        onOpenApplyModal={(jobTitle) => setCareerModalState({ isOpen: true, jobTitle })}
      />

      {/* 💥 "59 VESSELS" EXPLODING FLEET MATRIX */}
      <InteractiveFleetExplosion />

      <FleetVisualizationSection onOpenQuote={() => setIsQuoteOpen(true)} />

      <HorizontalTimelineSection />


      <div className="bg-[#F5F5F2] text-[#071A2B]">
        <CertificationsMarquee />
        <CertificationsSection />
      </div>

      <WhyUsStatementSection />

      <FinalCinematicCTA onOpenQuote={() => setIsQuoteOpen(true)} />

      <div className="bg-[#F5F5F2] text-[#071A2B]">
        <ContactSection />
        <Footer />
      </div>

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
