"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  MotionValue,
} from "framer-motion";
import { VIDEOS } from "@/lib/content/videos";

interface HeroProps {
  onOpenVideoModal?: () => void;
  onOpenQuote?: () => void;
}

function HeroWord({
  text,
  mouseX,
  mouseY,
  parallaxFactor = 1,
  className = "",
  highlight = false,
}: {
  text: string;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  parallaxFactor?: number;
  className?: string;
  highlight?: boolean;
}) {
  const x = useTransform(mouseX, [-500, 500], [-16 * parallaxFactor, 16 * parallaxFactor]);
  const y = useTransform(mouseY, [-400, 400], [-8 * parallaxFactor, 8 * parallaxFactor]);
  const scale = useTransform(
    mouseX,
    [-400, 0, 400],
    [1 + 0.015 * parallaxFactor, 1, 1 + 0.015 * parallaxFactor]
  );

  return (
    <motion.div
      style={{ x, y, scale }}
      className={`flex flex-wrap ${className}`}
      data-cursor
      data-cursor-text="EXPLORE"
    >
      {text.split("").map((char, i) => {
        if (char === " ") {
          return <span key={i} className="w-[0.28em]" />;
        }
        const letterX = useTransform(
          mouseX,
          [-400, 400],
          [(-2.5 + i * 0.35) * parallaxFactor, (2.5 - i * 0.35) * parallaxFactor]
        );
        return (
          <motion.span
            key={i}
            style={{ x: letterX }}
            className={`inline-block font-syne font-extrabold leading-[0.88] tracking-[-0.03em] ${
              highlight ? "text-[#176B87]" : "text-white"
            }`}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

export const InteractiveCinematicHero: React.FC<HeroProps> = ({ onOpenVideoModal, onOpenQuote }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 70, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 70, damping: 25 });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => console.warn("Autoplay prevented:", err));
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const line1Y = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const line2Y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const line3Y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const line4Y = useTransform(scrollYProgress, [0, 1], [0, -45]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full overflow-hidden bg-[#071A2B] flex flex-col justify-between"
    >
      {/* Real moving ocean video background */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 origin-center will-change-transform z-0"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={VIDEOS.heroPoster}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={VIDEOS.hero} type="video/mp4" />
          <source src={VIDEOS.heroSecondary} type="video/mp4" />
        </video>
        {/* Subtle white/transparent gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071A2B]/60 via-transparent to-[#071A2B]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B]/40 via-transparent to-transparent" />
      </motion.div>

      {/* Hero content - Syne architectural typography */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 w-full flex flex-col justify-center flex-grow px-6 md:px-12 pt-28 pb-12 max-w-[1400px] mx-auto"
      >
        <p className="label-mono text-white/70 mb-4 md:mb-6 font-semibold tracking-widest text-xs">
          OCEANIC STAR FLEET — INTERNATIONAL SHIP MANAGEMENT
        </p>

        <div className="select-none space-y-1">
          <motion.div style={{ y: line1Y }}>
            <HeroWord
              text="THE OCEAN"
              mouseX={springX}
              mouseY={springY}
              parallaxFactor={1.1}
              className="text-[clamp(2.2rem,6.2vw,5rem)]"
            />
          </motion.div>
          <motion.div style={{ y: line2Y }}>
            <HeroWord
              text="IS OUR"
              mouseX={springX}
              mouseY={springY}
              parallaxFactor={0.85}
              className="text-[clamp(2.2rem,6.2vw,5rem)] text-white/95"
            />
          </motion.div>
          <motion.div style={{ y: line3Y }}>
            <HeroWord
              text="OPERATING"
              mouseX={springX}
              mouseY={springY}
              parallaxFactor={1.05}
              className="text-[clamp(2.2rem,6.2vw,5rem)]"
            />
          </motion.div>
          <motion.div style={{ y: line4Y }}>
            <HeroWord
              text="GROUND."
              mouseX={springX}
              mouseY={springY}
              parallaxFactor={0.8}
              highlight
              className="text-[clamp(2.2rem,6.2vw,5rem)]"
            />
          </motion.div>
        </div>

        <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <p className="max-w-md text-xs sm:text-sm md:text-base font-manrope font-light text-white/80 leading-relaxed">
            Global provider of technical vessel management, crew logistics, and
            maritime operations across Dubai, Mumbai, and Colombo.
          </p>

          <div className="hidden md:flex items-center gap-4">
            {onOpenVideoModal && (
              <button
                onClick={onOpenVideoModal}
                className="flex items-center gap-3 text-[11px] font-mono tracking-[0.2em] text-white/90 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 hover:bg-white/20 hover:text-white transition-all duration-300"
                data-cursor
                data-cursor-text="WATCH"
              >
                ▶ WATCH SHOWREEL
              </button>
            )}
            {onOpenQuote && (
              <button
                onClick={onOpenQuote}
                className="flex items-center gap-3 text-[11px] font-mono tracking-[0.2em] text-white border border-white/30 px-8 py-4 hover:bg-white hover:text-[#071A2B] transition-all duration-500"
                data-cursor
                data-cursor-text="OPEN"
              >
                START A CONVERSATION →
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] text-white/50 uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-white animate-scroll-line origin-top" />
        </div>
      </motion.div>
    </section>
  );
};
