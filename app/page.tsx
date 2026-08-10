"use client";

import React, { useState } from "react";
import { CinematicCustomCursor } from "./components/CinematicCustomCursor";
import { CinematicNavbar } from "./components/CinematicNavbar";
import { InteractiveCinematicHero } from "./components/InteractiveCinematicHero";
import { EditorialServicesSection } from "./components/EditorialServicesSection";
import { InteractiveTrackAndTrace } from "./components/InteractiveTrackAndTrace";
import { FleetVideoModal } from "./components/FleetVideoModal";
import { TrustedByMarquee } from "./components/TrustedByMarquee";
import { AboutSection } from "./components/AboutSection";
import { StatsCounter } from "./components/StatsCounter";
import { VesselFleetShowcase } from "./components/VesselFleetShowcase";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { CompanyTimelineSection } from "./components/CompanyTimelineSection";
import { GrowthChartSection } from "./components/GrowthChartSection";
import { MissionVisionValues } from "./components/MissionVisionValues";
import { TechnicalManagement } from "./components/TechnicalManagement";
import { CrewManagementTimeline } from "./components/CrewManagementTimeline";
import { IndustriesServed } from "./components/IndustriesServed";
import { CertificationsSection } from "./components/CertificationsSection";
import { CareersSection } from "./components/CareersSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { GlobalPresenceMap } from "./components/GlobalPresenceMap";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

import { ServiceModal } from "./components/ServiceModal";
import { QuoteModal } from "./components/QuoteModal";
import { CareerModal } from "./components/CareerModal";
import { ServiceItem } from "./components/ServicesGrid";

export default function Home() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [careerModalState, setCareerModalState] = useState<{ isOpen: boolean; jobTitle?: string }>({
    isOpen: false,
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased overflow-x-hidden selection:bg-[#0284C7] selection:text-white">
      {/* Smooth GPU Custom Cursor */}
      <CinematicCustomCursor />

      {/* Top Left Logo & Top Right Minimal Navigation */}
      <CinematicNavbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Full-Screen Immersive Background Video Hero with Interactive Typography */}
      <InteractiveCinematicHero
        onOpenVideoModal={() => setIsVideoModalOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Trusted By Global Marquee */}
      <TrustedByMarquee />

      {/* Live Track & Trace AIS Vessel Tracker & Transit Calculator */}
      <InteractiveTrackAndTrace />

      {/* Premium Maritime Services Editorial Section (15 Core Services) */}
      <EditorialServicesSection
        onSelectService={(serviceTitle) => {
          setIsQuoteOpen(true);
        }}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* About Oceanic Star Fleet */}
      <AboutSection />

      {/* Company Statistics & Operational Metrics */}
      <StatsCounter />

      {/* 59 Managed Vessel Fleet Showcase Matrix */}
      <VesselFleetShowcase />

      {/* Corporate Growth Timeline (2011 Incorporation -> 2029 RPSL) */}
      <CompanyTimelineSection />

      {/* Why Choose Oceanic Star */}
      <WhyChooseUs />

      {/* Operational Growth Chart */}
      <GrowthChartSection />

      {/* Mission & Vision */}
      <MissionVisionValues />

      {/* Technical Management */}
      <TechnicalManagement />

      {/* Crew Management Timeline */}
      <CrewManagementTimeline />

      {/* Industries We Serve */}
      <IndustriesServed />

      {/* Official Government & Class Certifications */}
      <CertificationsSection />

      {/* Careers */}
      <CareersSection
        onOpenApplyModal={(jobTitle) =>
          setCareerModalState({ isOpen: true, jobTitle })
        }
      />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Global Presence Map */}
      <GlobalPresenceMap />

      {/* Contact Operations */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Modals & Video Lightbox */}
      <FleetVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
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
    </div>
  );
}
