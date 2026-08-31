"use client";

import React, { useRef, useEffect } from "react";
import { VIDEOS } from "@/lib/content/videos";
import { initGSAP } from "@/lib/gsapHelper";

interface FinalCTAProps {
  onOpenQuote?: () => void;
}

export const FinalCinematicCTA: React.FC<FinalCTAProps> = ({ onOpenQuote }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => console.warn("Autoplay prevented:", err));
    }
  }, []);

  useEffect(() => {
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      // Zoom background on scroll
      if (bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { scale: 1 },
          {
            scale: 1.12,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          }
        );
      }

      // Fade up content
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[85vh] w-full overflow-hidden bg-[#F5F5F2] text-[#071A2B] flex flex-col justify-center items-center text-center px-6 py-28 border-t border-slate-200">
      {/* Real ocean video background */}
      <div ref={bgRef} className="absolute inset-0 z-0 origin-center will-change-transform">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={VIDEOS.heroPoster}
          className="w-full h-full object-cover"
        >
          <source src={VIDEOS.cta} type="video/mp4" />
          <source src={VIDEOS.hero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#071A2B]/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-4xl space-y-8">
        <span className="label-mono text-[#00F0FF] font-bold tracking-widest text-xs uppercase">
          // INITIATE MARITIME PARTNERSHIP
        </span>

        <h2 className="font-syne text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-none text-white">
          MOVE YOUR FLEET WITH CONFIDENCE.
        </h2>

        <p className="text-sm sm:text-base font-manrope font-normal text-white/90 max-w-xl mx-auto leading-relaxed">
          Request a tailored technical management proposal or RPSL certified crewing assessment from our Dubai operations command center.
        </p>

        {onOpenQuote && (
          <div className="pt-4">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-4 text-xs font-mono tracking-[0.25em] text-white bg-[#176B87] hover:bg-[#071A2B] px-10 py-5 font-bold transition-all duration-300 shadow-2xl rounded-full"
              data-cursor
              data-cursor-text="OPEN"
            >
              START A CONVERSATION →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
