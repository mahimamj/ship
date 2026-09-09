"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("oceanic_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("oceanic_cookie_consent", "accepted_all");
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("oceanic_cookie_consent", "accepted_essential");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 max-w-lg w-full select-none"
        >
          <div className="p-6 rounded-3xl bg-[#061B2A]/95 backdrop-blur-xl border border-[#00D9E8]/30 shadow-2xl text-white space-y-4 relative overflow-hidden">
            {/* Background Radial Ambient Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0077B6]/20 rounded-full blur-2xl pointer-events-none" />

            {/* Banner Header */}
            <div className="flex items-start justify-between gap-3 relative z-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-[#00D9E8]/10 text-[#00D9E8] flex items-center justify-center shrink-0 border border-[#00D9E8]/20">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-syne text-sm sm:text-base font-bold text-white tracking-wide">
                    Cookie &amp; Privacy Notice
                  </h4>
                  <span className="font-mono text-[10px] text-sky-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#00D9E8]" /> GDPR &amp; Maritime Data Compliant
                  </span>
                </div>
              </div>

              <button
                onClick={handleAcceptEssential}
                className="text-slate-400 hover:text-white transition p-1 rounded-lg hover:bg-white/10"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Banner Description */}
            <p className="font-manrope text-xs text-slate-300 leading-relaxed relative z-10">
              Oceanic Star Fleet uses cookies to ensure security, optimize vessel dispatch tools, and analyze web traffic. By clicking &ldquo;Accept All&rdquo;, you agree to our cookie practices as outlined in our{" "}
              <Link href="/cookie-policy" className="text-[#00D9E8] font-semibold underline underline-offset-2 hover:text-white transition">
                Cookie Policy
              </Link>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1 relative z-10 font-mono text-xs">
              <button
                onClick={handleAcceptAll}
                className="w-full sm:flex-1 py-2.5 px-4 rounded-xl bg-[#0077B6] hover:bg-[#00D9E8] hover:text-[#061B2A] text-white font-bold transition shadow-md"
              >
                Accept All Cookies
              </button>
              
              <button
                onClick={handleAcceptEssential}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 font-semibold border border-white/10 transition"
              >
                Essential Only
              </button>

              <Link
                href="/cookie-policy"
                className="w-full sm:w-auto text-center py-2.5 px-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition"
              >
                Read Policy
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
