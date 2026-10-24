"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  FileText,
  Download,
  CheckCircle2,
  Send,
  Building2,
  ShieldCheck,
  Check,
  Compass,
} from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: initialService || "Full Technical Management",
    message: "",
  });

  const services = [
    "Full Technical Management",
    "RPSL Crew Logistics",
    "Commercial Chartering",
    "Port Agency & Husbandry",
  ];

  // Lock body scroll and pause Lenis while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if ((window as any).lenis) {
        (window as any).lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "";
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownloadBrochure = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = "/Oceanic_Star_Company_Brochure.pdf";
    link.download = "Oceanic_Star_Company_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 4000);
    }, 800);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Proposal submission error:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setLoading(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent
        className="fixed inset-0 z-50 bg-[#071A2B]/65 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto overscroll-contain"
        onClick={(e) => {
          if (e.target === e.currentTarget) handleReset();
        }}
      >
        <motion.div
          data-lenis-prevent
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="bg-[#FAFAF7] border border-slate-200/90 rounded-3xl max-w-2xl w-full text-[#071A2B] shadow-2xl relative my-auto font-sans max-h-[92vh] flex flex-col overflow-hidden"
        >
          {/* Fixed Header */}
          <div className="p-5 sm:p-6 pb-3.5 border-b border-slate-200/80 bg-[#FAFAF7] shrink-0 relative">
            {/* Close button */}
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 text-slate-400 hover:text-[#071A2B] p-2 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors shadow-sm cursor-pointer z-10"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1 pr-10">
              <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs font-bold text-[#007CD6] tracking-widest uppercase">
                <Compass className="w-3.5 h-3.5 text-[#01666A] animate-spin-slow" />
                <span>// COMMERCIAL PROPOSAL &amp; FLEET PROFILE</span>
              </div>
              <h3 className="font-syne text-xl sm:text-2xl font-extrabold text-[#071A2B] tracking-tight leading-tight">
                Get Oceanic Star Proposal
              </h3>
              <p className="font-manrope text-xs text-[#667783] leading-relaxed">
                Download our official corporate brochure &amp; fleet matrix or submit a quick request for a customized proposal.
              </p>
            </div>
          </div>

          {/* Scrollable Modal Body */}
          <div
            data-lenis-prevent
            className="p-5 sm:p-6 pt-4 overflow-y-auto space-y-4 overscroll-contain flex-1"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#CBD5E1 transparent",
            }}
          >
            {!submitted ? (
              <div className="space-y-4">
                {/* 1. INSTANT DOWNLOAD BROCHURE CARD */}
                <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200 shadow-sm hover:border-[#007CD6]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 text-[#007CD6] flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-syne font-bold text-xs sm:text-sm text-[#071A2B]">
                          Corporate Profile &amp; Fleet Deck
                        </span>
                        <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase">
                          2026 EDITION
                        </span>
                      </div>
                      <p className="text-[11px] font-manrope text-[#667783] leading-tight">
                        65 Managed Ships • 6 Global Hubs • RPSL-MUM-506 &amp; ISO 9001:2015
                      </p>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 pt-0.5">
                        <span>Official PDF</span>
                        <span>•</span>
                        <span>Instant Download</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleDownloadBrochure}
                    disabled={downloading}
                    className={`shrink-0 px-4 py-2 rounded-xl font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm ${
                      downloaded
                        ? "bg-emerald-600 text-white shadow-emerald-500/20"
                        : "bg-[#007CD6] hover:bg-[#0068B7] text-white hover:shadow-md"
                    }`}
                  >
                    {downloaded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Downloaded</span>
                      </>
                    ) : downloading ? (
                      <>
                        <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Downloading...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Divider */}
                <div className="relative flex items-center justify-center my-1.5">
                  <div className="w-full h-px bg-slate-200" />
                  <span className="absolute bg-[#FAFAF7] px-3 font-mono text-[9px] sm:text-[10px] font-bold tracking-widest text-[#667783] uppercase">
                    OR REQUEST A CUSTOM PROPOSAL
                  </span>
                </div>

                {/* 2. SIMPLE, CLEAN PROPOSAL FORM */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono font-bold text-[#071A2B] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Captain James Vance"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-[#071A2B] placeholder:text-slate-400 focus:outline-none focus:border-[#007CD6] focus:ring-2 focus:ring-[#007CD6]/10 transition-all font-manrope"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold text-[#071A2B] mb-1">
                        Work Email or Phone *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="vance@shipping.com / +971..."
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-[#071A2B] placeholder:text-slate-400 focus:outline-none focus:border-[#007CD6] focus:ring-2 focus:ring-[#007CD6]/10 transition-all font-manrope"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono font-bold text-[#071A2B] mb-1">
                        Company / Vessel Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vance Shipping LLC"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-[#071A2B] placeholder:text-slate-400 focus:outline-none focus:border-[#007CD6] focus:ring-2 focus:ring-[#007CD6]/10 transition-all font-manrope"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold text-[#071A2B] mb-1">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-[#071A2B] focus:outline-none focus:border-[#007CD6] focus:ring-2 focus:ring-[#007CD6]/10 transition-all font-manrope cursor-pointer"
                      >
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-[#071A2B] mb-1">
                      Vessel Specifics / Comments (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Provide vessel type, DWT, trading area, or specific requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-[#071A2B] placeholder:text-slate-400 focus:outline-none focus:border-[#007CD6] focus:ring-2 focus:ring-[#007CD6]/10 transition-all font-manrope resize-none"
                    />
                  </div>

                  {/* Submit & Trust Badges */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-3 text-[10px] font-mono text-[#667783]">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#007CD6]" />
                        <span>RPSL-MUM-506</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-[#01666A]" />
                        <span>24/7 Global Dispatch</span>
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-5 py-2.5 bg-[#071A2B] hover:bg-[#007CD6] text-white rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Request Custom Proposal</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* SUCCESS STATE */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 sm:py-8 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div className="space-y-1 max-w-md mx-auto">
                  <h4 className="font-syne text-xl sm:text-2xl font-extrabold text-[#071A2B]">
                    Proposal Request Received
                  </h4>
                  <p className="font-manrope text-xs sm:text-sm text-[#667783] leading-relaxed">
                    Thank you{formData.name ? `, ${formData.name}` : ""}. Our commercial superintendent from the nearest command hub will review your specifications and dispatch a tailored proposal within 24 hours.
                  </p>
                </div>

                {/* Download Brochure Secondary Prompt */}
                <div className="max-w-md mx-auto bg-white rounded-2xl p-3.5 border border-slate-200 shadow-sm text-left flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-sky-50 text-[#007CD6]">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-syne font-bold text-xs text-[#071A2B]">
                        Download Corporate Brochure
                      </p>
                      <p className="text-[10px] font-mono text-[#667783]">
                        Official Fleet &amp; Capabilities Deck (PDF)
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleDownloadBrochure}
                    className="px-3 py-1.5 bg-[#007CD6] hover:bg-[#0068B7] text-white rounded-xl font-mono text-[10px] sm:text-[11px] font-bold uppercase flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Download className="w-3 h-3" />
                    <span>Download</span>
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#071A2B] font-mono text-xs font-bold uppercase transition-all cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
