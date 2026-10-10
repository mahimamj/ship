"use client";

import React, { useRef, useEffect, useState } from "react";
import { initGSAP } from "@/lib/gsapHelper";

interface SplitScreenStoryProps {
  onOpenQuote?: () => void;
}

export const SplitScreenStory: React.FC<SplitScreenStoryProps> = ({ onOpenQuote }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const visionTextRef = useRef<HTMLDivElement>(null);
  const missionTextRef = useRef<HTMLDivElement>(null);
  const visionImgRef = useRef<HTMLDivElement>(null);
  const missionImgRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  useEffect(() => {
    const { gsap } = initGSAP();

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: Scroll-driven Split-Screen Story (no pin — stack layer handles cover)
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 20%",
            end: "bottom 60%",
            scrub: 0.8,
            onUpdate: (self) => {
              if (self.progress > 0.45) {
                setActiveTab("mission");
              } else {
                setActiveTab("vision");
              }
            },
          },
        });

        // 0% -> 45%: OUR VISION active
        // 45% -> 55%: Vision text fades & Mission text enters; Vision image clip-path reveals Mission image
        tl.to(
          visionTextRef.current,
          { opacity: 0, y: -40, duration: 0.8, ease: "power2.inOut" },
          0.4
        )
          .fromTo(
            missionTextRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            0.5
          )
          .to(
            visionImgRef.current,
            { opacity: 0, scale: 1.05, duration: 0.8, ease: "power2.inOut" },
            0.4
          )
          .fromTo(
            missionImgRef.current,
            { opacity: 0, scale: 1.08 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
            0.45
          );
      });

      // Mobile/Tablet: Stacked view
      mm.add("(max-width: 1023px)", () => {
        [visionTextRef, missionTextRef].forEach((ref) => {
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#FFFFFF] text-[#071A2B] overflow-hidden flex flex-col justify-center"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 min-h-screen items-center py-16 lg:py-0">
        {/* LEFT COLUMN: Pinned Editorial Typography (Screenshot 2 Style) */}
        <div className="lg:col-span-6 flex flex-col justify-center lg:pr-16 relative z-10 py-8 lg:py-0">
          {/* Active Navigation Indicator Tabs */}
          <div className="flex items-center gap-6 mb-12 border-b border-[#071A2B]/10 pb-4">
            <button
              onClick={() => setActiveTab("vision")}
              className={`font-syne font-extrabold text-sm tracking-wider uppercase transition-all ${
                activeTab === "vision"
                  ? "text-[#0A5C96] border-b-2 border-[#0A5C96] pb-1 font-bold"
                  : "text-[#667783] hover:text-[#071A2B]"
              }`}
            >
              OUR VISION
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`font-syne font-extrabold text-sm tracking-wider uppercase transition-all ${
                activeTab === "mission"
                  ? "text-[#0A5C96] border-b-2 border-[#0A5C96] pb-1 font-bold"
                  : "text-[#667783] hover:text-[#071A2B]"
              }`}
            >
              OUR MISSION
            </button>
          </div>

          {/* OUR VISION CONTENT BLOCK */}
          <div
            ref={visionTextRef}
            className={`space-y-6 transition-all duration-500 ${
              activeTab === "vision" ? "block" : "lg:block"
            }`}
          >
            <h2 className="font-syne font-extrabold text-5xl sm:text-7xl lg:text-8xl text-[#0A5C96] tracking-tight leading-[0.95]" data-scroll-split>
              OUR <br />
              VISION
            </h2>

            <div className="w-12 h-[3px] bg-[#0A5C96] my-4" />

            <p className="font-syne font-bold text-lg sm:text-xl text-[#071A2B] tracking-wide">
              Leader in Sustainable Seaborne Solutions.
            </p>

            <p className="font-manrope text-sm sm:text-base text-[#667783] font-light leading-relaxed max-w-lg">
              To set the global benchmark in sustainable, data-driven ship management—leading the decarbonization of international commercial shipping through advanced CII fuel optimization, STCW certified seamanship, and zero-carbon dual-fuel vessel technology.
            </p>

            {onOpenQuote && (
              <div className="pt-4">
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-3.5 bg-[#071A2B] hover:bg-[#0A5C96] text-white text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-lg rounded-none"
                >
                  EXPLORE OUR HISTORY →
                </button>
              </div>
            )}
          </div>

          {/* OUR MISSION CONTENT BLOCK */}
          <div
            ref={missionTextRef}
            className={`space-y-6 lg:absolute lg:top-24 lg:left-0 lg:right-16 transition-all duration-500 ${
              activeTab === "mission" ? "block" : "hidden lg:block lg:opacity-0"
            }`}
          >
            <h2 className="font-syne font-extrabold text-5xl sm:text-7xl lg:text-8xl text-[#0A5C96] tracking-tight leading-[0.95]" data-scroll-split>
              OUR <br />
              MISSION
            </h2>

            <div className="w-12 h-[3px] bg-[#0A5C96] my-4" />

            <p className="font-syne font-bold text-lg sm:text-xl text-[#071A2B] tracking-wide">
              Uncompromising Technical &amp; Operational Excellence.
            </p>

            <p className="font-manrope text-sm sm:text-base text-[#667783] font-light leading-relaxed max-w-lg">
              To deliver uncompromising technical vessel management, RPSL approved crew welfare, and maritime safety standards that maximize shipowners' asset value while ensuring zero incidents and full regulatory compliance across global trade routes.
            </p>

            {onOpenQuote && (
              <div className="pt-4">
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-3.5 bg-[#071A2B] hover:bg-[#0A5C96] text-white text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-lg rounded-none"
                >
                  GET PROPOSAL →
                </button>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Full-Height Aerial Maritime Photograph (Screenshot 2 Style) */}
        <div className="lg:col-span-6 relative h-[420px] sm:h-[540px] lg:h-[80vh] w-full overflow-hidden shadow-2xl rounded-none border-l border-[#071A2B]/10">
          {/* Vision Image Surface */}
          <div
            ref={visionImgRef}
            className="absolute inset-0 z-10 w-full h-full will-change-transform"
            data-scroll-parallax="0.2"
          >
            <img
              src="/images/hero_vessel.png"
              alt="Oceanic Star Vessel Vision Aerial"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/40 via-transparent to-transparent" />
          </div>

          {/* Mission Image Surface */}
          <div
            ref={missionImgRef}
            className="absolute inset-0 z-20 w-full h-full opacity-0 will-change-transform"
          >
            <img
              src="/images/crew_training.png"
              alt="Oceanic Star Mission Operations Aerial"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
