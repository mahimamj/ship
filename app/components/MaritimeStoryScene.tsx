"use client";

import React from "react";

interface MaritimeStorySceneProps {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
  theme?: "dark" | "light";
  className?: string;
  children?: React.ReactNode;
  actionButton?: React.ReactNode;
}

export const MaritimeStoryScene: React.FC<MaritimeStorySceneProps> = ({
  eyebrow,
  title,
  description,
  image,
  video,
  theme = "dark",
  className = "",
  children,
  actionButton,
}) => {
  return (
    <div
      className={`relative w-full min-h-screen flex flex-col justify-center overflow-hidden ${
        theme === "dark" ? "bg-[#071A2B] text-white" : "bg-[#F5F5F2] text-[#071A2B]"
      } ${className}`}
    >
      {/* Background Visual Surface */}
      {(video || image) && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          {video ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover scale-105 transition-transform duration-1000"
            >
              <source src={video} type="video/mp4" />
            </video>
          ) : image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover scale-105 transition-transform duration-1000"
            />
          ) : null}

          {/* Vignette Overlay for Readability */}
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-t from-[#071A2B] via-[#071A2B]/60 to-[#071A2B]/40"
                : "bg-gradient-to-t from-[#F5F5F2] via-[#F5F5F2]/70 to-transparent"
            }`}
          />
        </div>
      )}

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl space-y-6">
          {eyebrow && (
            <span
              className={`font-mono text-xs font-bold tracking-widest uppercase block ${
                theme === "dark" ? "text-[#00D26A]" : "text-[#176B87]"
              }`}
            >
              {eyebrow}
            </span>
          )}

          <h2 className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.02]">
            {title}
          </h2>

          <p
            className={`font-manrope text-sm sm:text-lg font-light leading-relaxed max-w-2xl ${
              theme === "dark" ? "text-slate-300" : "text-[#667783]"
            }`}
          >
            {description}
          </p>

          {actionButton && <div className="pt-4">{actionButton}</div>}
          {children}
        </div>
      </div>
    </div>
  );
};
