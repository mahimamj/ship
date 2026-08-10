"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Ship,
  Users,
  Globe2,
  Compass,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Radio,
  Activity,
  Anchor,
  Sparkles
} from "lucide-react";
import { OceanWaveDivider } from "./OceanWaveDivider";
import { OceanParticleCanvas } from "./OceanParticleCanvas";

interface HeroProps {
  onOpenQuote: () => void;
  onOpenVideoModal: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenQuote, onOpenVideoModal }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex flex-col justify-between bg-[#050C1A] overflow-hidden">
      {/* 1. Ambient High Definition Maritime Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="https://assets.mixkit.co/videos/preview/mixkit-cargo-ship-sailing-in-the-sea-41616-large.mp4"
          poster="/images/hero_vessel.png"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-25 mix-blend-luminosity scale-105 transform filter contrast-125 brightness-90 transition-all duration-700"
        />
        {/* Deep Ocean Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050C1A] via-[#050C1A]/80 to-[#050C1A]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050C1A] via-[#050C1A]/85 to-transparent"></div>
      </div>

      {/* 2. Interactive Sonar / Radar Particle Canvas Animation */}
      <OceanParticleCanvas />

      {/* 3. Decorative Luminous Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-[30rem] h-[30rem] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-10 w-[30rem] h-[30rem] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

      {/* 4. Live AIS Telemetry Top Ticker */}
      <div className="relative z-10 border-b border-teal-500/20 bg-slate-950/60 backdrop-blur-md py-2.5 px-4 mb-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-300 gap-3">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1.5 bg-teal-500/20 text-teal-300 px-2.5 py-0.5 rounded-full border border-teal-500/40">
              <Radio className="w-3 h-3 text-teal-400 animate-pulse" />
              <span className="font-bold">AIS LIVE DISPATCH</span>
            </span>
            <span className="hidden sm:inline text-slate-400">
              DUBAI HQ (25.2048° N, 55.2708° E) • MUMBAI HQ (18.9220° N, 72.8347° E)
            </span>
          </div>

          <div className="flex items-center space-x-4 text-slate-300">
            <div className="flex items-center space-x-1">
              <Activity className="w-3.5 h-3.5 text-teal-400" />
              <span>Sea State: <strong className="text-emerald-400">Calm (Beaufort 2)</strong></span>
            </div>
            <div className="hidden md:flex items-center space-x-1 border-l border-white/10 pl-4">
              <span>Vessels En-Route: <strong className="text-teal-300">38 Active Ships</strong></span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (Col 8) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-slate-900/80 border border-teal-500/40 rounded-full px-4 py-2 text-xs font-semibold text-teal-300 shadow-2xl backdrop-blur-md group hover:border-teal-400 transition"
            >
              <Compass className="w-4 h-4 text-teal-400 animate-spin-slow" />
              <span>Harnessing Efficiency, Inspiring Growth</span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span className="text-slate-300">Dubai • India • Sri-Lanka</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-poppins text-white tracking-tight leading-[1.08]"
            >
              Empowering <br />
              <span className="text-gradient">Global Maritime</span> <br />
              Excellence.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed"
            >
              <strong className="text-white font-semibold">Oceanic Star Fleet Ship Management LLC</strong> provides premier technical, crew, and offshore vessel management worldwide. Headquartered in Dubai with operations across India & Sri Lanka.
            </motion.p>

            {/* CTA Action Buttons + Video Showcase Reel Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary CTA */}
              <a
                href="#services"
                className="btn-primary px-8 py-4 rounded-2xl font-semibold text-sm flex items-center space-x-3 shadow-2xl group"
              >
                <span>Explore Fleet Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition duration-300" />
              </a>

              {/* Pulsing Fleet Reel Video Play Button */}
              <button
                onClick={onOpenVideoModal}
                className="relative group px-7 py-4 rounded-2xl bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/40 hover:border-teal-400 text-white font-semibold text-sm flex items-center space-x-3 backdrop-blur-md transition shadow-2xl hover:bg-teal-500/30"
              >
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-slate-950 shadow-md group-hover:scale-110 transition">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                  <span className="absolute -inset-1 rounded-full bg-teal-400/40 animate-ping"></span>
                </span>
                <div className="text-left">
                  <div className="text-xs font-bold text-teal-300 flex items-center space-x-1">
                    <span>WATCH FLEET REEL</span>
                    <Sparkles className="w-3 h-3 text-amber-300" />
                  </div>
                  <div className="text-[10px] text-slate-300">Cinematic Maritime Video</div>
                </div>
              </button>

              <button
                onClick={onOpenQuote}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-2xl font-medium text-sm transition"
              >
                Get Custom Quote
              </button>
            </motion.div>

            {/* Key Trust Indicator Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10 max-w-xl text-xs text-slate-300"
            >
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">ISO 9001:2015</div>
                  <div className="text-[11px] text-slate-400">Bureau Veritas Certified</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Users className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">DG Shipping</div>
                  <div className="text-[11px] text-slate-400">RPSL Approved</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Globe2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Dubai & India HQs</div>
                  <div className="text-[11px] text-slate-400">Worldwide Operations</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Floating Interactive Fleet Command HUD Card (Col 4) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 relative hidden lg:block"
          >
            <div className="glass-panel rounded-3xl p-6 border border-teal-500/30 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-teal-500/20 rounded-full blur-2xl"></div>
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center border border-teal-500/30">
                    <Ship className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">Oceanic Star Fleet</h3>
                    <p className="text-xs text-teal-400 flex items-center space-x-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>Real-time Vessel Command</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Live Operational Cards */}
              <div className="space-y-3.5 text-xs">
                <div className="bg-slate-900/80 rounded-xl p-3.5 border border-white/5 space-y-1">
                  <div className="text-slate-400 flex justify-between">
                    <span>Dubai HQ Operations:</span>
                    <span className="text-emerald-400 font-semibold">Active</span>
                  </div>
                  <div className="text-white font-medium">Oceanic Star Fleet Ship Mgmt LLC</div>
                  <div className="text-[11px] text-slate-400">Business Bay, Commercial Tower, Dubai UAE</div>
                </div>

                <div className="bg-slate-900/80 rounded-xl p-3.5 border border-white/5 space-y-1">
                  <div className="text-slate-400 flex justify-between">
                    <span>India HQ Operations:</span>
                    <span className="text-emerald-400 font-semibold">Active</span>
                  </div>
                  <div className="text-white font-medium">Oceanic Star Shipping Pvt. Ltd.</div>
                  <div className="text-[11px] text-slate-400">Fort Maritime Center, Mumbai, India</div>
                </div>

                {/* Animated Interactive Video Preview Thumbnail */}
                <div
                  onClick={onOpenVideoModal}
                  className="cursor-pointer group/thumb relative h-28 rounded-xl overflow-hidden border border-teal-500/40 shadow-lg mt-2"
                >
                  <img
                    src="/images/hero_vessel.png"
                    alt="Maritime Fleet Reel Preview"
                    className="w-full h-full object-cover group-hover/thumb:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 flex items-center justify-center space-x-2 text-white font-semibold">
                    <span className="w-8 h-8 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shadow-lg group-hover/thumb:scale-110 transition">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </span>
                    <span className="text-xs group-hover/thumb:text-teal-300">Play Fleet Video Showcase</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center text-slate-300 text-[11px] border-t border-white/10">
                  <span>ISM Compliance: <strong className="text-teal-400">100% Verified</strong></span>
                  <span>Safety Record: <strong className="text-emerald-400">Zero LTI</strong></span>
                </div>
              </div>

              {/* Ambient Video Sound Controls */}
              <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-xs text-slate-400">
                <span>Background Video Ambient</span>
                <div className="flex space-x-2">
                  <button
                    onClick={toggleVideoPlay}
                    className="p-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white transition"
                    title={isPlaying ? "Pause Background" : "Play Background"}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={toggleVideoMute}
                    className="p-1.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white transition"
                    title={isMuted ? "Unmute Background Sound" : "Mute Background Sound"}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-teal-400" />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <OceanWaveDivider color="#0A192F" />
    </section>
  );
};
