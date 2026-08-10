"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { VIDEOS } from "@/lib/content/videos";

interface FinalCTAProps {
  onOpenQuote?: () => void;
}

export const FinalCinematicCTA: React.FC<FinalCTAProps> = ({ onOpenQuote }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => console.warn("Autoplay prevented:", err));
    }
  }, []);

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#071A2B] text-white flex flex-col justify-center items-center text-center px-6 py-28">
      {/* Real ocean video background */}
      <div className="absolute inset-0 z-0">
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
        <div className="absolute inset-0 bg-[#071A2B]/70 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl space-y-8"
      >
        <span className="label-mono text-white/70 font-semibold tracking-widest text-xs">
          // INITIATE MARITIME PARTNERSHIP
        </span>

        <h2 className="font-syne text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-none text-white">
          MOVE YOUR FLEET WITH CONFIDENCE.
        </h2>

        <p className="text-sm sm:text-base font-manrope font-light text-white/80 max-w-xl mx-auto leading-relaxed">
          Request a tailored technical management proposal or RPSL certified crewing assessment from our Dubai operations command center.
        </p>

        {onOpenQuote && (
          <div className="pt-4">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-4 text-xs font-mono tracking-[0.25em] text-[#071A2B] bg-white hover:bg-[#176B87] hover:text-white px-10 py-5 font-bold transition-all duration-500 shadow-2xl rounded-full"
              data-cursor
              data-cursor-text="OPEN"
            >
              START A CONVERSATION →
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
};
