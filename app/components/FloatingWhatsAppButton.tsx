"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export const FloatingWhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/912268000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group border border-white/20"
      aria-label="Chat on WhatsApp"
      data-cursor
      data-cursor-text="WHATSAPP"
    >
      <div className="relative flex items-center justify-center">
        <span className="absolute -inset-1 rounded-full bg-white/40 animate-ping opacity-75"></span>
        <MessageSquare className="w-5 h-5 fill-white text-[#25D366] relative z-10" />
      </div>
      <span className="text-xs font-mono font-bold tracking-wider hidden sm:inline-block">
        CHAT NOW // INDIA
      </span>
      <span className="text-xs font-mono font-bold tracking-wider inline-block sm:hidden">
        CHAT NOW
      </span>
    </a>
  );
};
