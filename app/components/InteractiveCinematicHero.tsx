"use client";

import React, { useRef } from "react";
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
  onOpenQuote?: () => void;
}

function HeroWord({
  text,
  mouseX,
  mouseY,
  parallaxFactor = 1,
  className = "",
}: {
  text: string;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  parallaxFactor?: number;
  className?: string;
}) {
  const x = useTransform(mouseX, [-400, 400], [-18 * parallaxFactor, 18 * parallaxFactor]);
  const y = useTransform(mouseY, [-300, 300], [-10 * parallaxFactor, 10 * parallaxFactor]);
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
          return <span key={i} className="w-[0.35em]" />;
        }
        const letterX = useTransform(
          mouseX,
          [-400, 400],
          [(-3 + i * 0.4) * parallaxFactor, (3 - i * 0.4) * parallaxFactor]
        );
        return (
          <motion.span
            key={i}
            style={{ x: letterX }}
            className="inline-block font-bebas leading-[0.85] tracking-[-0.02em] text-white"
          >
            {char}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

export const InteractiveCinematicHero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 22 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const line1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const line2Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const line3Y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const line4Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

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
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#071A2B]"
    >
      {/* Cinematic video background */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 origin-center will-change-transform"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={VIDEOS.heroPoster}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={VIDEOS.hero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#071A2B]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B]/30 via-transparent to-transparent" />
      </motion.div>

      {/* Hero typography */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-24 md:pb-32 max-w-[1400px] mx-auto"
      >
        <p className="label-mono text-white/60 mb-6 md:mb-10">
          OCEANIC STAR FLEET — INTERNATIONAL SHIP MANAGEMENT
        </p>

        <div className="select-none">
          <motion.div style={{ y: line1Y }}>
            <HeroWord
              text="THE OCEAN"
              mouseX={springX}
              mouseY={springY}
              parallaxFactor={1.2}
              className="text-[clamp(3.5rem,14vw,11rem)]"
            />
          </motion.div>
          <motion.div style={{ y: line2Y }}>
            <HeroWord
              text="IS OUR"
              mouseX={springX}
              mouseY={springY}
              parallaxFactor={0.9}
              className="text-[clamp(3.5rem,14vw,11rem)] text-white/95"
            />
          </motion.div>
          <motion.div style={{ y: line3Y }}>
            <HeroWord
              text="OPERATING"
              mouseX={springX}
              mouseY={springY}
              parallaxFactor={1.1}
              className="text-[clamp(3.5rem,14vw,11rem)]"
            />
          </motion.div>
          <motion.div style={{ y: line4Y }}>
            <HeroWord
              text="GROUND."
              mouseX={springX}
              mouseY={springY}
              parallaxFactor={0.8}
              className="text-[clamp(3.5rem,14vw,11rem)] text-[#176B87]"
            />
          </motion.div>
        </div>

        <div className="mt-10 md:mt-14 flex items-end justify-between gap-8">
          <p className="max-w-md text-sm md:text-base font-manrope font-light text-white/70 leading-relaxed">
            Global provider of technical vessel management, crew logistics, and
            maritime operations across Dubai, Mumbai, and Colombo.
          </p>

          {onOpenQuote && (
            <button
              onClick={onOpenQuote}
              className="hidden md:flex items-center gap-3 text-[11px] font-mono tracking-[0.2em] text-white border border-white/30 px-8 py-4 hover:bg-white hover:text-[#071A2B] transition-all duration-500"
              data-cursor
              data-cursor-text="OPEN"
            >
              START A CONVERSATION →
            </button>
          )}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] text-white/50 uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-white animate-scroll-line origin-top" />
        </div>
      </motion.div>
    </section>
  );
};
