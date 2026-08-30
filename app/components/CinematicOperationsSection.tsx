"use client";

import React, { useRef, useEffect } from "react";
import { VIDEOS } from "@/lib/content/videos";
import { initGSAP } from "@/lib/gsapHelper";

export const CinematicOperationsSection: React.FC = () => {
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const op1Ref = useRef<HTMLDivElement>(null);
  const op2Ref = useRef<HTMLDivElement>(null);
  const op3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: Pinned full-viewport operational reveal sequence
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinContainerRef.current,
            start: "top top",
            end: "+=2400",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        // 0% -> 35%: 01 AT SEA active
        tl.to(op1Ref.current, { opacity: 1, scale: 1, duration: 1 });

        // 35% -> 68%: 01 AT SEA exits & 02 ON BOARD enters with clip-path mask
        tl.to(op1Ref.current, { opacity: 0, scale: 1.05, duration: 0.8 }, 0.35).fromTo(
          op2Ref.current,
          { opacity: 0, scale: 0.95, clipPath: "inset(12% 12% 12% 12% round 2rem)" },
          { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 0rem)", duration: 0.9, ease: "power2.out" },
          0.38
        );

        // 68% -> 100%: 02 ON BOARD exits & 03 ON SHORE enters
        tl.to(op2Ref.current, { opacity: 0, scale: 1.05, duration: 0.8 }, 0.68).fromTo(
          op3Ref.current,
          { opacity: 0, scale: 0.95, clipPath: "inset(12% 12% 12% 12% round 2rem)" },
          { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 0rem)", duration: 0.9, ease: "power2.out" },
          0.72
        );
      });

      // Mobile: Clean non-pinned vertical stack
      mm.add("(max-width: 1023px)", () => {
        [op1Ref, op2Ref, op3Ref].forEach((ref) => {
          if (ref.current) {
            gsap.fromTo(
              ref.current,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                  trigger: ref.current,
                  start: "top 80%",
                },
              }
            );
          }
        });
      });
    }, pinContainerRef);

    return () => ctx.revert();
  }, []);

  const ops = [
    {
      ref: op1Ref,
      number: "01",
      title: "AT SEA",
      tagline: "GLOBAL VOYAGE DISPATCH & NAVIGATION",
      desc: "Real-time vessel position tracking, weather routing, speed-fuel optimization, and continuous ocean passage monitoring.",
      video: VIDEOS.atSea,
      zIndex: "z-10",
    },
    {
      ref: op2Ref,
      number: "02",
      title: "ON BOARD",
      tagline: "RPSL CERTIFIED CREW & SEAFARER SAFETY",
      desc: "MLC 2006 compliant seafarer logistics, welfare management, emergency response protocols, and STCW 2010 qualified officers.",
      video: VIDEOS.onBoard,
      zIndex: "z-20",
    },
    {
      ref: op3Ref,
      number: "03",
      title: "ON SHORE",
      tagline: "TECHNICAL ENGINEERING & DRYDOCK AUDITS",
      desc: "Class-1 superintendents overseeing planned maintenance systems (PMS), drydock engineering, and regulatory compliance.",
      video: VIDEOS.onShore,
      zIndex: "z-30",
    },
  ];

  return (
    <div ref={pinContainerRef} className="relative min-h-screen w-full bg-[#071A2B] text-white overflow-hidden">
      {/* Section Header Banner */}
      <div className="absolute top-8 left-8 right-8 z-40 flex items-center justify-between border-b border-white/10 pb-4">
        <span className="label-mono text-[#00D26A] font-bold tracking-widest text-xs">
          // CINEMATIC OPERATIONAL SPECTRUM
        </span>
        <span className="font-mono text-xs text-slate-400 font-semibold">
          REAL-TIME DISPATCH &amp; AUDITING
        </span>
      </div>

      {/* Full-Viewport Operational Spaces */}
      <div className="relative w-full h-screen">
        {ops.map((op) => (
          <div
            key={op.number}
            ref={op.ref}
            className={`absolute inset-0 ${op.zIndex} flex items-center justify-center p-6 md:p-12 opacity-0 lg:opacity-0 pointer-events-auto`}
          >
            {/* Background Full-Bleed Video Surface */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-105"
              >
                <source src={op.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B]/95 via-[#071A2B]/75 to-[#071A2B]/40" />
            </div>

            {/* Space Content */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-8 items-center pt-16">
              <div className="lg:col-span-8 space-y-5">
                <span className="font-mono text-xs font-bold tracking-widest text-[#00D26A] uppercase block">
                  SPECTRUM // {op.number}
                </span>
                <h2 className="font-syne text-4xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight">
                  {op.title}
                </h2>
                <p className="font-mono text-xs sm:text-sm text-[#00D26A] font-bold tracking-widest">
                  {op.tagline}
                </p>
                <p className="font-manrope text-sm sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl">
                  {op.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
