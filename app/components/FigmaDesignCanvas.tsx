"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MousePointer,
  Square,
  Type,
  Component,
  Layers,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Copy,
  Check,
  Sparkles,
  Sliders,
  Code,
  Play,
  Grid,
  Eye,
  EyeOff,
  Move,
  Share2,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Palette,
  Layout,
  Zap,
} from "lucide-react";
import { initGSAP } from "@/lib/gsapHelper";

interface FrameData {
  id: string;
  name: string;
  category: string;
  width: number;
  height: number;
  bg: string;
  description: string;
  tags: string[];
}

const FIGMA_FRAMES: FrameData[] = [
  {
    id: "hero",
    name: "01_Hero_Cinematic_Deck",
    category: "Main Interface",
    width: 1440,
    height: 900,
    bg: "from-[#071A2B] via-[#0D2840] to-[#051320]",
    description: "High-impact maritime command deck hero layout with video backdrop and glassmorphism CTA.",
    tags: ["Auto-Layout", "GSAP Scroll", "Glassmorphism"],
  },
  {
    id: "fleet",
    name: "02_Fleet_Showcase_Grid",
    category: "Operations",
    width: 1440,
    height: 900,
    bg: "from-[#051320] via-[#0A2238] to-[#071A2B]",
    description: "Multi-vessel interactive selector with real-time specs, telemetry cards, and modal details.",
    tags: ["Flex Wrap", "Component Variants", "Hover State"],
  },
  {
    id: "route",
    name: "03_Global_Route_SVG_Map",
    category: "Navigation",
    width: 1440,
    height: 900,
    bg: "from-[#071A2B] via-[#0C2E4A] to-[#123047]",
    description: "Interactive SVG stroke path drawing and hub telemetry pinned to GSAP vertical scroll.",
    tags: ["SVG Path Draw", "ScrollTrigger", "Dark Theme"],
  },
  {
    id: "tokens",
    name: "04_Tokens_Design_System",
    category: "Design System",
    width: 1440,
    height: 900,
    bg: "from-[#F5F5F2] via-[#EAEAE5] to-[#DFDFD9]",
    description: "Design system foundations: color tokens, typography scales, grid guides, and component master variants.",
    tags: ["Color Palette", "Typography Scale", "Tokens"],
  },
];

const COLOR_TOKENS = [
  { name: "Navy Deep Primary", hex: "#071A2B", usage: "Main Background & High Contrast Headers" },
  { name: "Oceanic Teal", hex: "#176B87", usage: "Interactive Buttons, Badges, Active States" },
  { name: "Cyan Radar Glow", hex: "#00F0FF", usage: "High-priority Telemetry & Route Nodes" },
  { name: "Surface Light", hex: "#F5F5F2", usage: "Editorial Content Blocks & Light Sections" },
  { name: "Muted Blue Slate", hex: "#667783", usage: "Secondary Subtitles & Body Captions" },
];

export const FigmaDesignCanvas: React.FC = () => {
  const [selectedFrame, setSelectedFrame] = useState<FrameData>(FIGMA_FRAMES[0]);
  const [activeTab, setActiveTab] = useState<"tokens" | "layout" | "gsap">("layout");
  const [zoomLevel, setZoomLevel] = useState<number>(85);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [activeTool, setActiveTool] = useState<"select" | "frame" | "text" | "component">("select");
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [isMotionPreviewActive, setIsMotionPreviewActive] = useState<boolean>(false);

  const previewCardRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Simulated Figma multiplayer cursors animation
  useEffect(() => {
    const { gsap } = initGSAP();
    if (!cursorRef.current) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
    tl.to(cursorRef.current, {
      x: 180,
      y: 120,
      duration: 2.2,
      ease: "power2.inOut",
    })
      .to(cursorRef.current, {
        x: 320,
        y: 60,
        duration: 1.8,
        ease: "power1.inOut",
      })
      .to(cursorRef.current, {
        x: 90,
        y: 220,
        duration: 2.5,
        ease: "power3.inOut",
      });

    return () => {
      tl.kill();
    };
  }, [selectedFrame]);

  // Handle GSAP motion preview trigger button
  const triggerMotionPreview = () => {
    const { gsap } = initGSAP();
    if (!previewCardRef.current) return;

    setIsMotionPreviewActive(true);
    gsap.fromTo(
      previewCardRef.current,
      { scale: 0.92, rotateX: 12, opacity: 0.5 },
      {
        scale: 1,
        rotateX: 0,
        opacity: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.4)",
        onComplete: () => setIsMotionPreviewActive(false),
      }
    );
  };

  const generatedCss = `/* Figma Auto-Layout & Design System Spec */
.figma-frame-${selectedFrame.id} {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
  padding: 48px 32px;
  background: linear-gradient(135deg, ${selectedFrame.bg.replace("from-", "").replace("via-", "").replace("to-", "")});
  border-radius: 12px;
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCss);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="relative w-full min-h-[92vh] bg-[#05121F] text-white py-12 px-4 sm:px-6 lg:px-12 border-t border-[#176B87]/20 overflow-hidden font-sans">
      {/* Background Subtle Figma Dots Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#176B87_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      {/* Header Banner Section */}
      <div className="relative z-10 max-w-[1600px] mx-auto mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] flex items-center justify-center shadow-lg shadow-[#F24E1E]/20">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-syne">
                Figma Interactive Studio &amp; GSAP Design Canvas
              </h2>
              <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase bg-[#176B87]/30 text-[#00F0FF] border border-[#00F0FF]/30 rounded-full">
                Figma v162.4
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#667783] mt-1">
              Live interactive design system inspector with React 19 component tokens &amp; GSAP scroll timelines.
            </p>
          </div>
        </div>

        {/* Figma Header Action Bar */}
        <div className="flex items-center flex-wrap gap-3">
          {/* Multiplayer User Avatars */}
          <div className="flex items-center -space-x-2 mr-2">
            <div
              className="w-8 h-8 rounded-full bg-[#F24E1E] border-2 border-[#05121F] flex items-center justify-center text-[10px] font-bold text-white shadow-md"
              title="Design Lead (Active)"
            >
              DL
            </div>
            <div
              className="w-8 h-8 rounded-full bg-[#1ABCFE] border-2 border-[#05121F] flex items-center justify-center text-[10px] font-bold text-white shadow-md"
              title="UI Engineer (Active)"
            >
              UE
            </div>
            <div
              className="w-8 h-8 rounded-full bg-[#0ACF83] border-2 border-[#05121F] flex items-center justify-center text-[10px] font-bold text-white shadow-md"
              title="GSAP Animator (Active)"
            >
              GA
            </div>
          </div>

          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-4 py-2 bg-[#176B87]/20 hover:bg-[#176B87]/40 text-[#00F0FF] border border-[#176B87]/50 rounded-lg text-xs font-mono transition-all"
          >
            {copiedCode ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            <span>{copiedCode ? "Copied CSS!" : "Export CSS Specs"}</span>
          </button>

          <button
            onClick={triggerMotionPreview}
            disabled={isMotionPreviewActive}
            className="flex items-center gap-2 px-4 py-2 bg-[#00F0FF] hover:bg-[#00D0DF] text-[#071A2B] font-bold rounded-lg text-xs font-mono shadow-md hover:shadow-[#00F0FF]/30 transition-all active:scale-95"
          >
            <Play className={`w-3.5 h-3.5 ${isMotionPreviewActive ? "animate-spin" : ""}`} />
            <span>Test GSAP Motion</span>
          </button>
        </div>
      </div>

      {/* Main Figma Canvas Workspace Layout */}
      <div className="relative z-10 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#071A2B]/90 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
        {/* TOP TOOLBAR */}
        <div className="lg:col-span-12 flex items-center justify-between bg-[#051320] border border-white/10 rounded-xl px-4 py-2 text-xs font-mono">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTool("select")}
              className={`p-2 rounded-lg flex items-center gap-1.5 transition-all ${
                activeTool === "select"
                  ? "bg-[#176B87] text-white shadow"
                  : "text-[#667783] hover:text-white hover:bg-white/5"
              }`}
              title="Move / Select (V)"
            >
              <MousePointer className="w-4 h-4" />
              <span className="hidden sm:inline">Move</span>
            </button>
            <button
              onClick={() => setActiveTool("frame")}
              className={`p-2 rounded-lg flex items-center gap-1.5 transition-all ${
                activeTool === "frame"
                  ? "bg-[#176B87] text-white shadow"
                  : "text-[#667783] hover:text-white hover:bg-white/5"
              }`}
              title="Frame (F)"
            >
              <Square className="w-4 h-4" />
              <span className="hidden sm:inline">Frame</span>
            </button>
            <button
              onClick={() => setActiveTool("text")}
              className={`p-2 rounded-lg flex items-center gap-1.5 transition-all ${
                activeTool === "text"
                  ? "bg-[#176B87] text-white shadow"
                  : "text-[#667783] hover:text-white hover:bg-white/5"
              }`}
              title="Text (T)"
            >
              <Type className="w-4 h-4" />
              <span className="hidden sm:inline">Text</span>
            </button>
            <button
              onClick={() => setActiveTool("component")}
              className={`p-2 rounded-lg flex items-center gap-1.5 transition-all ${
                activeTool === "component"
                  ? "bg-[#176B87] text-white shadow"
                  : "text-[#667783] hover:text-white hover:bg-white/5"
              }`}
              title="Component (K)"
            >
              <Component className="w-4 h-4" />
              <span className="hidden sm:inline">Components</span>
            </button>
          </div>

          {/* Canvas Viewport Controls */}
          <div className="flex items-center gap-3 text-[#667783]">
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`p-1.5 rounded-lg border transition-all ${
                showGrid
                  ? "border-[#00F0FF]/40 text-[#00F0FF] bg-[#00F0FF]/10"
                  : "border-white/10 hover:text-white"
              }`}
              title="Toggle Layout Grid"
            >
              <Grid className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-lg border border-white/10">
              <button
                onClick={() => setZoomLevel(Math.max(50, zoomLevel - 15))}
                className="p-1 hover:text-white"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="w-12 text-center text-[11px] font-bold text-white">
                {zoomLevel}%
              </span>
              <button
                onClick={() => setZoomLevel(Math.min(150, zoomLevel + 15))}
                className="p-1 hover:text-white"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* LEFT SIDEBAR: LAYERS & FRAMES TREE */}
        <div className="lg:col-span-3 bg-[#051320] border border-white/10 rounded-xl p-4 flex flex-col gap-4 text-xs font-mono">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-white font-bold">
              <Layers className="w-4 h-4 text-[#00F0FF]" />
              <span>Figma Artboard Frames</span>
            </div>
            <span className="text-[10px] text-[#667783]">4 Pages</span>
          </div>

          <div className="space-y-2 overflow-y-auto max-h-[520px] pr-1">
            {FIGMA_FRAMES.map((frame) => {
              const isSelected = selectedFrame.id === frame.id;
              return (
                <button
                  key={frame.id}
                  onClick={() => setSelectedFrame(frame)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex flex-col gap-1.5 ${
                    isSelected
                      ? "bg-[#176B87]/30 border-[#00F0FF] text-white shadow-lg shadow-[#00F0FF]/10"
                      : "bg-white/5 border-white/5 text-[#667783] hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold truncate">
                      <Square className={`w-3.5 h-3.5 ${isSelected ? "text-[#00F0FF]" : "text-[#667783]"}`} />
                      <span className="truncate">{frame.name}</span>
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
                    )}
                  </div>
                  <div className="flex items-center justify-between text-[10px] opacity-75">
                    <span>{frame.category}</span>
                    <span>{frame.width} × {frame.height}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Component Specs Summary */}
          <div className="mt-auto pt-3 border-t border-white/10 text-[11px] text-[#667783] space-y-2">
            <div className="flex items-center justify-between">
              <span>Auto-Layout Strategy</span>
              <span className="text-[#00F0FF]">Flexbox / Grid</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Render Engine</span>
              <span className="text-[#00F0FF]">Next.js + GSAP</span>
            </div>
          </div>
        </div>

        {/* CENTER STAGE: LIVE FIGMA ARTBOARD PREVIEW */}
        <div className="lg:col-span-6 bg-[#030B14] border border-white/10 rounded-xl p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden min-h-[500px]">
          {/* Top Canvas Status Indicator */}
          <div className="flex items-center justify-between text-xs font-mono text-[#667783] border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#176B87]/30 text-[#00F0FF] rounded text-[10px] font-bold">
                FRAME: {selectedFrame.name}
              </span>
              <span>({zoomLevel}% scale)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-[10px]">Real-time Sync</span>
            </div>
          </div>

          {/* Simulated Figma Multiplayer Motion Cursor */}
          <div
            ref={cursorRef}
            className="absolute top-1/4 left-1/4 z-30 pointer-events-none transition-transform flex items-center gap-1.5"
          >
            <MousePointer className="w-4 h-4 text-[#F24E1E] fill-[#F24E1E]" />
            <span className="px-2 py-0.5 bg-[#F24E1E] text-white text-[9px] font-mono font-bold rounded shadow-lg">
              Alex (Lead UI)
            </span>
          </div>

          {/* ARTBOARD DISPLAY CONTAINER */}
          <div
            ref={previewCardRef}
            style={{ transform: `scale(${zoomLevel / 100})` }}
            className={`w-full h-full min-h-[380px] rounded-xl bg-gradient-to-br ${selectedFrame.bg} p-6 border border-white/20 shadow-2xl relative transition-all duration-300 flex flex-col justify-between ${
              showGrid ? "bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:16px_16px]" : ""
            }`}
          >
            {/* Artboard Header Badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-xs text-white/70">{selectedFrame.name}</span>
              </div>
              <span className="px-2 py-1 bg-black/40 text-[#00F0FF] font-mono text-[10px] rounded border border-white/10">
                Figma Prototype Hotspot
              </span>
            </div>

            {/* Artboard Content Mockup */}
            <div className="my-8 space-y-4 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-mono text-white/90 border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>{selectedFrame.category} Spec</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-syne tracking-tight leading-tight">
                {selectedFrame.description}
              </h3>

              <div className="flex flex-wrap gap-2 pt-2">
                {selectedFrame.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-[#176B87]/40 text-[#00F0FF] text-[10px] font-mono rounded-lg border border-[#00F0FF]/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Artboard Footer Controls */}
            <div className="flex items-center justify-between text-xs font-mono text-white/60 border-t border-white/10 pt-4">
              <span>Auto-Layout: Space Between</span>
              <span className="text-[#00F0FF] font-bold">GSAP Scrub: 0.8s</span>
            </div>
          </div>

          {/* Bottom Zoom & Tool Hint */}
          <div className="mt-4 flex items-center justify-between text-[11px] text-[#667783] font-mono">
            <span>Press Space + Drag to Pan Canvas</span>
            <span>Selected Tool: {activeTool.toUpperCase()}</span>
          </div>
        </div>

        {/* RIGHT SIDEBAR: INSPECTOR & TOKEN SPECS */}
        <div className="lg:col-span-3 bg-[#051320] border border-white/10 rounded-xl p-4 flex flex-col gap-4 text-xs font-mono">
          {/* Tab Navigation Header */}
          <div className="flex items-center border-b border-white/10 pb-2">
            <button
              onClick={() => setActiveTab("layout")}
              className={`flex-1 py-1.5 text-center font-bold transition-all border-b-2 ${
                activeTab === "layout"
                  ? "border-[#00F0FF] text-[#00F0FF]"
                  : "border-transparent text-[#667783] hover:text-white"
              }`}
            >
              Auto-Layout
            </button>
            <button
              onClick={() => setActiveTab("tokens")}
              className={`flex-1 py-1.5 text-center font-bold transition-all border-b-2 ${
                activeTab === "tokens"
                  ? "border-[#00F0FF] text-[#00F0FF]"
                  : "border-transparent text-[#667783] hover:text-white"
              }`}
            >
              Tokens
            </button>
            <button
              onClick={() => setActiveTab("gsap")}
              className={`flex-1 py-1.5 text-center font-bold transition-all border-b-2 ${
                activeTab === "gsap"
                  ? "border-[#00F0FF] text-[#00F0FF]"
                  : "border-transparent text-[#667783] hover:text-white"
              }`}
            >
              GSAP Motion
            </button>
          </div>

          {/* TAB 1: AUTO-LAYOUT INSPECTOR */}
          {activeTab === "layout" && (
            <div className="space-y-4 overflow-y-auto max-h-[480px]">
              <div className="space-y-2">
                <div className="text-white font-bold flex items-center gap-1.5">
                  <Layout className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>Flex &amp; Alignment</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                    <span className="text-[#667783] block">Direction</span>
                    <span className="text-white font-bold">Vertical (Column)</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                    <span className="text-[#667783] block">Spacing (Gap)</span>
                    <span className="text-white font-bold">24px</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                    <span className="text-[#667783] block">Padding</span>
                    <span className="text-white font-bold">48px 32px</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                    <span className="text-[#667783] block">Sizing</span>
                    <span className="text-white font-bold">Fill Container</span>
                  </div>
                </div>
              </div>

              {/* Code Export Box */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-white font-bold">
                  <div className="flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-[#00F0FF]" />
                    <span>Generated CSS Code</span>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="text-[10px] text-[#00F0FF] hover:underline"
                  >
                    Copy
                  </button>
                </div>
                <pre className="p-3 bg-black/60 rounded-xl border border-white/10 text-[10px] text-emerald-400 overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed max-h-[220px]">
                  {generatedCss}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 2: DESIGN TOKENS INSPECTOR */}
          {activeTab === "tokens" && (
            <div className="space-y-3 overflow-y-auto max-h-[480px]">
              <div className="text-white font-bold flex items-center gap-1.5 mb-2">
                <Palette className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>Color Palette Tokens</span>
              </div>

              <div className="space-y-2">
                {COLOR_TOKENS.map((token) => (
                  <div
                    key={token.name}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between hover:bg-white/10 transition-all cursor-pointer group"
                    onClick={() => {
                      navigator.clipboard.writeText(token.hex);
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-6 h-6 rounded-lg border border-white/20 shadow-sm"
                        style={{ backgroundColor: token.hex }}
                      />
                      <div>
                        <span className="text-white font-bold block text-[11px] group-hover:text-[#00F0FF]">
                          {token.name}
                        </span>
                        <span className="text-[#667783] text-[9px] block truncate max-w-[140px]">
                          {token.usage}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#00F0FF] font-mono font-bold">
                      {token.hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: GSAP MOTION TIMELINE SPECS */}
          {activeTab === "gsap" && (
            <div className="space-y-4 overflow-y-auto max-h-[480px]">
              <div className="text-white font-bold flex items-center gap-1.5 mb-1">
                <Zap className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>GSAP Animation Timelines</span>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
                  <span className="text-[#00F0FF] font-bold block">ScrollTrigger Pin Scrub</span>
                  <span className="text-[#667783] text-[10px]">scrub: 0.8s, start: "top top"</span>
                  <p className="text-white/80 text-[10px] pt-1">
                    Pins section while scrubbing horizontal gallery transforms smoothly.
                  </p>
                </div>

                <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
                  <span className="text-[#00F0FF] font-bold block">SVG Route Path Draw</span>
                  <span className="text-[#667783] text-[10px]">strokeDashoffset: 0, ease: "power1.inOut"</span>
                  <p className="text-white/80 text-[10px] pt-1">
                    Animate SVG lines along shipping vectors during scroll progression.
                  </p>
                </div>

                <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
                  <span className="text-[#00F0FF] font-bold block">Split Text Motion</span>
                  <span className="text-[#667783] text-[10px]">stagger: 0.04s, duration: 0.9s</span>
                  <p className="text-white/80 text-[10px] pt-1">
                    Word-by-word reveal effect for editorial titles.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
