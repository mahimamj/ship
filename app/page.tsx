"use client";

import React, { useState } from "react";
import { CinematicCustomCursor } from "./components/CinematicCustomCursor";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { ScrollOrchestrator } from "./components/ScrollOrchestrator";
import { ScrollSection } from "./components/ScrollSection";
import { CinematicNavbar } from "./components/CinematicNavbar";
import { CinematicHeroLayer } from "./components/CinematicScrollStory";
import { VoyageTheatreSection } from "./components/VoyageTheatreSection";
import { GsapHorizontalScrollGallery } from "./components/GsapHorizontalScrollGallery";
import { CinematicOperationsSection } from "./components/CinematicOperationsSection";
import { InteractiveVerticalCapabilities } from "./components/InteractiveVerticalCapabilities";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { GlobalPresenceMap } from "./components/GlobalPresenceMap";
import { MissionVisionCutoutSection } from "./components/MissionVisionCutoutSection";
import { CareerJobBoardSection } from "./components/CareerJobBoardSection";
import { InteractiveFleetExplosion } from "./components/InteractiveFleetExplosion";
import { FleetVisualizationSection } from "./components/FleetVisualizationSection";
import { CertificationsMarquee } from "./components/CertificationsMarquee";
import { CertificationsSection } from "./components/CertificationsSection";
import { FollowTheJourneySection } from "./components/FollowTheJourneySection";
import { CareerJourneyMilestones } from "./components/CareerJourneyMilestones";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsAppButton } from "./components/FloatingWhatsAppButton";
import { CookieConsentBanner } from "./components/CookieConsentBanner";

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
    <div className="min-h-screen bg-[#F5F5F2] text-[#071A2B] font-sans antialiased overflow-x-hidden selection:bg-[#0077B6] selection:text-white">
      <ScrollOrchestrator />
      <CinematicCustomCursor />
      <ScrollProgressBar />

      <CinematicNavbar
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* 1. HERO LAYER */}
      <div id="cinematic-stack" className="relative w-full">
        <ScrollSection stack>
          <CinematicHeroLayer
            onOpenVideoModal={() => setIsVideoModalOpen(true)}
            onOpenQuote={() => setIsQuoteOpen(true)}
          />
        </ScrollSection>
      </div>

      {/* 2. LIVE VOYAGE THEATRE */}
      <VoyageTheatreSection />

      {/* 3. GSAP FLEET GALLERY & CORRIDORS */}
      <GsapHorizontalScrollGallery onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 4. CINEMATIC OPERATIONS WATER WHEEL SPECTRUM */}
      <CinematicOperationsSection />

      {/* 5. CAPABILITIES & WHY US PRINCIPLES */}
      <InteractiveVerticalCapabilities
        onSelectService={() => setIsQuoteOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* WHY CHOOSE US 11-POINT ADVANTAGE GRID */}
      <WhyChooseUs />

      {/* 6. GLOBAL NETWORK MAP */}
      <GlobalPresenceMap />

      {/* 7. VISION & MISSION UNIFIED SECTION */}
      <MissionVisionCutoutSection />

      {/* 8. CAREERS JOB BOARD */}
      <CareerJobBoardSection
        onOpenApplyModal={(jobTitle) => setCareerModalState({ isOpen: true, jobTitle })}
      />

      {/* 💥 RESTORED 59 VESSELS PARTICLE MORPHING FLEET MATRIX */}
      <InteractiveFleetExplosion />

      {/* 9. FLEET VISUALIZATION SPECS */}
      <FleetVisualizationSection onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 10. CAREER JOURNEY MILESTONES */}
      <CareerJourneyMilestones />

      {/* 11. COMPACT CERTIFICATIONS */}
      <div className="bg-[#F5F5F2] text-[#071A2B]">
        <CertificationsMarquee />
        <CertificationsSection />
      </div>

      {/* 13. FOLLOW THE JOURNEY & SOCIAL CHANNELS */}
      <FollowTheJourneySection />

      {/* 13. CONTACT, PROPOSAL REQUEST & PARTNERSHIP CTA */}
      <div className="bg-[#FFFFFF] text-[#071A2B]">
        <ContactSection />
        <Footer />
      </div>

      {/* MODALS & OVERLAYS */}
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
      <CookieConsentBanner />
    </div>
  );
}
