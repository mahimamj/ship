"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX, Shield, Compass, Anchor, Cpu, ArrowRight } from "lucide-react";

interface FleetVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

interface VideoTrack {
  id: string;
  title: string;
  category: string;
  duration: string;
  src: string;
  thumbnail: string;
  description: string;
  stats: { label: string; value: string }[];
}

const VIDEO_TRACKS: VideoTrack[] = [
  {
    id: "ocean-voyage",
    title: "Global Fleet In Voyage",
    category: "Commercial Shipping & Logistics",
    duration: "02:45",
    // High quality royalty free maritime video clip
    src: "https://assets.mixkit.co/videos/preview/mixkit-cargo-ship-sailing-in-the-sea-41616-large.mp4",
    thumbnail: "/images/hero_vessel.png",
    description: "Deep sea container ship navigating international trade routes connecting Dubai, India, Sri Lanka and global hub ports.",
    stats: [
      { label: "Transit Speed", value: "19.5 Knots" },
      { label: "Fleet Readiness", value: "99.4%" },
      { label: "Class Rating", value: "DNV / Lloyd's Register" }
    ]
  },
  {
    id: "technical-engine",
    title: "Technical Management & Drydock",
    category: "Engineering & Maintenance",
    duration: "01:50",
    src: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-cargo-ship-in-the-sea-41617-large.mp4",
    thumbnail: "/images/dry_dock_engineering.png",
    description: "State-of-the-art vessel maintenance, hull preservation, engine overhauls, and compliance auditing in drydock facilities.",
    stats: [
      { label: "Drydock Days Saved", value: "-18% YoY" },
      { label: "Class Inspection", value: "Zero Defect Target" },
      { label: "ISM Compliance", value: "100%" }
    ]
  },
  {
    id: "crew-bridge",
    title: "Bridge Navigation & Crew Excellence",
    category: "Crew Management & Safety",
    duration: "02:10",
    src: "https://assets.mixkit.co/videos/preview/mixkit-cargo-ship-sailing-in-the-sea-41616-large.mp4",
    thumbnail: "/images/crew_training.png",
    description: "STCW certified mariners operating advanced ECDIS, ARPA radar, and satellite communication systems with top-tier safety protocol.",
    stats: [
      { label: "Crew Retention Rate", value: "96.8%" },
      { label: "RPSL Registration", value: "Approved DG Shipping" },
      { label: "Safety Index", value: "0 LTI Record" }
    ]
  }
];

export const FleetVideoModal: React.FC<FleetVideoModalProps> = ({
  isOpen,
  onClose,
  onOpenQuote
}) => {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  if (!isOpen) return null;

  const currentTrack = VIDEO_TRACKS[activeTrackIndex];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/90 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-6xl bg-slate-950 border border-teal-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/80">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-teal-500/20 flex items-center justify-center border border-teal-500/30">
                <Anchor className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <span className="text-xs font-semibold text-teal-400 tracking-wider uppercase">
                  Oceanic Star Fleet Media Showcase
                </span>
                <h3 className="text-lg font-bold text-white font-poppins">
                  {currentTrack.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Content Body */}
          <div className="grid lg:grid-cols-12 flex-1 overflow-y-auto">
            {/* Video Player Container (Lg 8 cols) */}
            <div className="lg:col-span-8 bg-black relative flex items-center justify-center min-h-[320px] sm:min-h-[420px] overflow-hidden group">
              <video
                ref={videoRef}
                key={currentTrack.src}
                src={currentTrack.src}
                poster={currentTrack.thumbnail}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* HUD Graphic Overlay */}
              <div className="absolute inset-0 pointer-events-none border border-teal-500/20 m-4 rounded-2xl flex flex-col justify-between p-4 bg-gradient-to-t from-black/80 via-transparent to-black/40">
                <div className="flex justify-between items-center text-[11px] font-mono text-teal-400">
                  <div className="flex items-center space-x-2 bg-black/60 px-3 py-1.5 rounded-full border border-teal-500/30">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
                    <span>LIVE AIS STREAM: DUBAI HQ</span>
                  </div>
                  <div className="hidden sm:block text-slate-400">
                    HD 1080P • 60 FPS
                  </div>
                </div>

                <div className="flex justify-between items-end text-xs text-white">
                  <div>
                    <span className="text-teal-400 font-semibold">{currentTrack.category}</span>
                    <p className="text-slate-300 text-xs max-w-md hidden sm:block mt-1">
                      {currentTrack.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Controls Overlay */}
              <div className="absolute bottom-6 right-6 flex items-center space-x-3 pointer-events-auto z-10">
                <button
                  onClick={togglePlay}
                  className="p-3 rounded-full bg-teal-500 text-slate-950 font-bold hover:scale-105 transition shadow-lg"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-3 rounded-full bg-slate-900/90 text-white border border-white/20 hover:bg-slate-800 transition"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Sidebar Track Switcher & Specs (Lg 4 cols) */}
            <div className="lg:col-span-4 bg-slate-900/90 p-6 border-l border-white/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Featured Reels
                </h4>

                <div className="space-y-3">
                  {VIDEO_TRACKS.map((track, idx) => {
                    const isActive = idx === activeTrackIndex;
                    return (
                      <button
                        key={track.id}
                        onClick={() => {
                          setActiveTrackIndex(idx);
                          setIsPlaying(true);
                        }}
                        className={`w-full text-left p-3.5 rounded-2xl border transition flex items-center space-x-3 group ${
                          isActive
                            ? "bg-teal-500/10 border-teal-500/50 text-white"
                            : "bg-slate-950/60 border-white/5 text-slate-400 hover:border-teal-500/30 hover:text-white"
                        }`}
                      >
                        <div className="relative w-16 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-slate-800">
                          <img
                            src={track.thumbnail}
                            alt={track.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          />
                          {isActive && (
                            <div className="absolute inset-0 bg-teal-500/30 flex items-center justify-center">
                              <Play className="w-4 h-4 text-white fill-current" />
                            </div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold truncate text-slate-200 group-hover:text-teal-300">
                            {track.title}
                          </p>
                          <p className="text-[10px] text-slate-400 truncate">
                            {track.category}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Current Track Specs */}
              <div className="bg-slate-950/80 rounded-2xl p-4 border border-teal-500/20 space-y-3">
                <div className="flex items-center space-x-2 text-xs text-teal-400 font-semibold">
                  <Cpu className="w-4 h-4" />
                  <span>Technical Metrics</span>
                </div>

                <div className="grid grid-cols-1 gap-2 text-xs">
                  {currentTrack.stats.map((s, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-1">
                      <span className="text-slate-400">{s.label}:</span>
                      <span className="font-semibold text-white">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="w-full btn-primary py-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Request Ship Management Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
