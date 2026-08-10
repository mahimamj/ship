"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowDown, Play, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenVideoModal?: () => void;
  onOpenQuote?: () => void;
}

export const InteractiveCinematicHero: React.FC<HeroProps> = ({
  onOpenVideoModal,
  onOpenQuote,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHoveringTitle, setIsHoveringTitle] = useState(false);

  // Mouse position motion values for magnetic letter interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for liquid typography response
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  // Transform spring position into letter offsets
  const letterRotateX = useTransform(springY, [-300, 300], [12, -12]);
  const letterRotateY = useTransform(springX, [-500, 500], [-15, 15]);
  const letterTranslateX = useTransform(springX, [-500, 500], [-25, 25]);
  const letterTranslateY = useTransform(springY, [-300, 300], [-15, 15]);

  // Scroll animations: scale video down, move title up
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // HTML5 Ocean Canvas Simulation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Seabird particles
    const birds = Array.from({ length: 7 }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height * 0.4),
      speed: 0.4 + Math.random() * 0.6,
      size: 2 + Math.random() * 2,
      wingPhase: Math.random() * Math.PI * 2,
    }));

    // Ocean ripples
    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle ocean wave shimmer overlay
      ctx.fillStyle = "rgba(79, 163, 184, 0.04)";
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(
          width * 0.5 + Math.sin(time + i) * 60,
          height * 0.6 + Math.cos(time * 0.8 + i) * 40,
          180 + i * 90,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      // Render flying seabirds in upper sky
      ctx.strokeStyle = "rgba(245, 247, 248, 0.45)";
      ctx.lineWidth = 1.2;

      birds.forEach((bird) => {
        bird.x += bird.speed;
        if (bird.x > width + 20) bird.x = -20;
        bird.wingPhase += 0.08;

        const wingY = Math.sin(bird.wingPhase) * (bird.size * 1.5);
        ctx.beginPath();
        ctx.moveTo(bird.x - bird.size * 2, bird.y + wingY);
        ctx.lineTo(bird.x, bird.y);
        ctx.lineTo(bird.x + bird.size * 2, bird.y + wingY);
        ctx.stroke();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHoveringTitle(false);
  };

  const word1 = "OCEANIC";
  const word2 = "STAR FLEET";

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex flex-col justify-between items-center bg-black overflow-hidden select-none"
    >
      {/* 1. Full-Screen Cinematic Aerial Drone Background Video & Photorealistic Maritime Vessel */}
      <motion.div
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="absolute inset-0 z-0 overflow-hidden origin-center pointer-events-none"
      >
        {/* Background Image / Aerial Drone Motion Container */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full relative"
        >
          <img
            src="/images/cinematic_vessel_bg.png"
            alt="Aerial Drone Maritime Container Vessel"
            className="w-full h-full object-cover filter brightness-[0.9] contrast-110 opacity-95 transition-opacity duration-700"
          />
        </motion.div>

        {/* Ocean Simulation Canvas Overlay (Water Shimmer & Flying Seabirds) */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-1" />

        {/* Minimal Vignette Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/75 pointer-events-none z-2"></div>
      </motion.div>

      {/* Spacer to push title down under top navbar */}
      <div className="pt-28 md:pt-36 z-10 w-full pointer-events-none"></div>

      {/* 2. Center Hero Interactive Typography */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-10 my-auto text-center px-4 max-w-7xl mx-auto flex flex-col items-center justify-center cursor-pointer"
        onMouseEnter={() => setIsHoveringTitle(true)}
        data-cursor
        data-cursor-text="EXPLORE"
      >
        {/* Enormous Display Typography */}
        <div className="perspective-1000 py-2 flex flex-col items-center">
          {/* Row 1: OCEANIC */}
          <motion.div
            style={{
              rotateX: letterRotateX,
              rotateY: letterRotateY,
              x: letterTranslateX,
              y: letterTranslateY,
            }}
            className="flex items-center justify-center space-x-1 sm:space-x-3 transition-shadow duration-300"
          >
            {word1.split("").map((char, index) => (
              <motion.span
                key={index}
                className="font-bebas text-7xl sm:text-9xl md:text-[12rem] lg:text-[15rem] leading-none tracking-tight font-extrabold text-white inline-block transition-all duration-200 drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
                style={{
                  textShadow: isHoveringTitle
                    ? "0 0 40px rgba(0, 245, 212, 0.8)"
                    : "0 8px 30px rgba(0, 0, 0, 0.9)",
                }}
                whileHover={{ scale: 1.08, y: -8 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Row 2: STAR FLEET */}
          <motion.div
            style={{
              rotateX: letterRotateX,
              rotateY: letterRotateY,
              x: useTransform(letterTranslateX, (v) => -v * 0.8),
              y: useTransform(letterTranslateY, (v) => -v * 0.8),
            }}
            className="flex items-center justify-center space-x-1 sm:space-x-3 -mt-3 sm:-mt-8 md:-mt-12"
          >
            {word2.split("").map((char, index) => {
              if (char === " ") {
                return <span key={index} className="w-4 sm:w-8 md:w-12"></span>;
              }
              return (
                <motion.span
                  key={index}
                  className="font-bebas text-6xl sm:text-8xl md:text-[10.5rem] lg:text-[13rem] leading-none tracking-tight font-extrabold text-white/95 inline-block transition-all duration-200 drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
                  style={{
                    textShadow: isHoveringTitle
                      ? "0 0 40px rgba(0, 245, 212, 0.8)"
                      : "0 8px 30px rgba(0, 0, 0, 0.9)",
                  }}
                  whileHover={{ scale: 1.08, y: -8 }}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.div>
        </div>

        {/* Subtitle Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-3 md:mt-5 text-sm sm:text-base font-light text-slate-200 max-w-2xl text-center leading-relaxed drop-shadow-md uppercase tracking-wider"
        >
          OCEANIC STAR FLEET IS A GLOBAL PROVIDER OF INTERNATIONAL SHIP MANAGEMENT SERVICES
        </motion.p>

        {/* Interactive Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4"
        >
          {onOpenVideoModal && (
            <button
              onClick={onOpenVideoModal}
              className="px-7 py-3.5 rounded-full bg-black/60 border border-white/30 hover:border-white text-white font-mono text-xs tracking-wider font-semibold flex items-center space-x-2.5 transition backdrop-blur-md shadow-2xl hover:bg-black/80 group"
              data-cursor
              data-cursor-text="PLAY"
            >
              <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </span>
              <span>CINEMATIC FLEET REEL</span>
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            </button>
          )}

          {onOpenQuote && (
            <button
              onClick={onOpenQuote}
              className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-black font-mono text-xs tracking-wider font-bold transition shadow-2xl hover:scale-105"
            >
              REQUEST FLEET DISPATCH
            </button>
          )}
        </motion.div>
      </motion.div>

      {/* 3. Bottom Center Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="relative z-10 pb-8 flex flex-col items-center justify-center text-center space-y-2 pointer-events-none"
      >
        <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase font-semibold drop-shadow">
          SCROLL TO EXPLORE
        </span>
        <div className="w-[1.5px] h-10 bg-white/30 relative overflow-hidden rounded-full">
          <div className="w-full h-full bg-white animate-line-pulse"></div>
        </div>
        <ArrowDown className="w-3.5 h-3.5 text-white animate-bounce mt-1" />
      </motion.div>
    </section>
  );
};
