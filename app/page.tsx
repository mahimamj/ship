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
import { FigmaDesignCanvas } from "./components/FigmaDesignCanvas";
import { GsapHorizontalScrollGallery } from "./components/GsapHorizontalScrollGallery";
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

      {/* Figma Interactive Studio Showcase & Design Tokens */}
      <FigmaDesignCanvas />

      {/* GSAP Scroll Horizontal Pin Gallery & SVG Route Draw */}
      <GsapHorizontalScrollGallery onOpenQuote={() => setIsQuoteOpen(true)} />

      <FleetSilhouetteStats onOpenQuote={() => setIsQuoteOpen(true)} />


      <Section2StatementStats />

      <InteractiveVerticalCapabilities
        onSelectService={() => setIsQuoteOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      <GlobalPresenceMap />

      <FleetVisualizationSection onOpenQuote={() => setIsQuoteOpen(true)} />

      <CinematicOperationsSection />

      <HorizontalTimelineSection />

      <div className="bg-[#F5F5F2] text-[#071A2B]">
        <CertificationsMarquee />
        <CertificationsSection />
      </div>

      <WhyUsStatementSection />

      <CareersSection
        onOpenApplyModal={(jobTitle) => setCareerModalState({ isOpen: true, jobTitle })}
      />

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
