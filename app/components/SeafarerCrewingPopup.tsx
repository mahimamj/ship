"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Anchor, ArrowRight, ShieldCheck, X } from "lucide-react";
import { SEAFARER_APPLY_PATH, SEAFARER_JOB_APPLICATION_URL } from "@/lib/content/careers";

const POPUP_SESSION_KEY = "oceanic_seafarer_crewing_popup_dismissed";

export const SeafarerCrewingPopup: React.FC = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isCrewingPage =
      pathname === SEAFARER_APPLY_PATH ||
      pathname === "/careers/at-sea" ||
      pathname?.startsWith(`${SEAFARER_APPLY_PATH}/`);

    if (isCrewingPage || sessionStorage.getItem(POPUP_SESSION_KEY)) {
      setIsVisible(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 15000);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  const handleDismiss = () => {
    sessionStorage.setItem(POPUP_SESSION_KEY, "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 28, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-[60] sm:max-w-[420px] select-none"
          role="dialog"
          aria-label="Seafarer crewing application prompt"
        >
          <div className="relative overflow-hidden rounded-2xl border border-[#00D9E8]/35 bg-[#061B2A]/95 p-5 text-white shadow-2xl backdrop-blur-xl">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#007CD6]/25 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-2xl pointer-events-none" />

            <button
              onClick={handleDismiss}
              className="absolute right-3 top-3 rounded-lg p-1.5 text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label="Close seafarer crewing popup"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative z-10 space-y-4 pr-8">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#00D9E8]/35 bg-[#00D9E8]/10 text-[#00D9E8]">
                  <Anchor className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#00D9E8]">
                    Seafarer crewing desk
                  </span>
                  <h3 className="font-syne text-lg font-extrabold leading-tight text-white">
                    Ready for your next voyage?
                  </h3>
                </div>
              </div>

              <p className="font-manrope text-sm leading-relaxed text-slate-200">
                Connect directly with Oceanic Star&apos;s crewing team. Submit your rank, certificates, and sailing experience through the official seafarer application portal.
              </p>

              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-sky-100">
                <ShieldCheck className="h-4 w-4 text-[#00D9E8]" />
                DG RPSL-MUM-506 approved crewing
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <a
                  href={SEAFARER_JOB_APPLICATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleDismiss}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#007CD6] px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#00D9E8] hover:text-[#061B2A]"
                >
                  Apply as seafarer
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/careers/at-sea"
                  onClick={handleDismiss}
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-slate-100 transition hover:bg-white/15"
                >
                  View sea roles
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
