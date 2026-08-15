"use client";

import React, { useState } from "react";
import { Bot, X, Send, Sparkles, Ship, ArrowRight, ShieldCheck } from "lucide-react";

interface OceanicAIChatbotWidgetProps {
  onOpenQuote: () => void;
}

export function OceanicAIChatbotWidget({ onOpenQuote }: OceanicAIChatbotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: "ai" | "user"; text: string }[]>([
    {
      sender: "ai",
      text: "Hello! I am your Oceanic AI Maritime Assistant. How can I help you today with vessel management, freight rates, container tracking, or RPSL crew logistics?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (userText?: string) => {
    const textToSend = userText || input;
    if (!textToSend.trim()) return;

    const newMsgs = [...messages, { sender: "user" as const, text: textToSend }];
    setMessages(newMsgs);
    if (!userText) setInput("");

    // Simulate intelligent AI maritime response
    setTimeout(() => {
      let aiReply = "Thank you for reaching out! Our operations team in Dubai, India, and Sri Lanka can handle this custom request. You can also generate an instant proposal quote.";
      const queryLower = textToSend.toLowerCase();

      if (queryLower.includes("freight") || queryLower.includes("rate") || queryLower.includes("quote") || queryLower.includes("cost")) {
        aiReply = "Our freight rates depend on cargo volume (TEU/CBM) and route distance. You can use our interactive Freight Calculator or open the 4-step Instant Quote Wizard to get an automated cost proposal preview right now!";
      } else if (queryLower.includes("crew") || queryLower.includes("rpsl") || queryLower.includes("logistics")) {
        aiReply = "Oceanic Star Fleet operates DG Shipping approved RPSL recruitment agencies in India and Sri Lanka, managing over 1,200+ certified officers, marine engineers, and ratings with 99.8% compliance.";
      } else if (queryLower.includes("track") || queryLower.includes("vessel") || queryLower.includes("location") || queryLower.includes("eta")) {
        aiReply = "You can track live vessel coordinates and container Bill of Lading (BL) status using our interactive Track & Trace tool directly on the homepage hero section.";
      } else if (queryLower.includes("charter") || queryLower.includes("bulk") || queryLower.includes("tanker")) {
        aiReply = "We provide full technical vessel management, dry dock supervision, and chartering for Supramax, Aframax tankers, container vessels, and offshore support tugs.";
      }

      setMessages((prev) => [...prev, { sender: "ai", text: aiReply }]);
    }, 600);
  };

  const quickPrompts = [
    "Calculate Freight Rates",
    "RPSL Crew Verification",
    "Track Container Location",
    "Vessel Management Specs",
  ];

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[999] flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#0F2C59] to-[#176B87] text-white shadow-2xl hover:shadow-[#176B87]/50 border border-[#176B87]/50 hover:scale-105 active:scale-95 transition-all group"
        aria-label="Open AI Maritime Assistant"
      >
        <div className="relative">
          <Bot className="w-5 h-5 text-[#00D26A]" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00D26A] animate-ping"></span>
        </div>
        <span className="text-xs font-bold tracking-wide uppercase font-mono">AI Advisor</span>
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-[999] w-96 max-w-[calc(100vw-2rem)] bg-[#071A2B] border border-[#176B87]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[520px] animate-in slide-in-from-bottom-5 duration-200 text-white">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-[#0F2C59] border-b border-[#176B87]/30">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#176B87]/20 border border-[#176B87]/40">
                <Sparkles className="w-4 h-4 text-[#00D26A]" />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">Oceanic AI Advisor</div>
                <div className="text-[10px] text-[#00D26A] flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D26A]"></span> 24/7 Live Maritime Intelligence
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#071A2B]/95 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.sender === "ai" && (
                  <div className="w-6 h-6 rounded-full bg-[#176B87]/30 border border-[#176B87] flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5 text-[#00D26A]" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    m.sender === "user"
                      ? "bg-[#176B87] text-white rounded-br-none font-medium"
                      : "bg-[#0F2C59] text-slate-200 rounded-bl-none border border-[#176B87]/30"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-[#0F2C59]/60 border-t border-[#176B87]/20 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => handleSend(p)}
                className="px-2.5 py-1 rounded-full bg-[#176B87]/20 border border-[#176B87]/40 text-[10px] text-slate-300 hover:text-white hover:bg-[#176B87] hover:border-[#176B87] whitespace-nowrap transition-all"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Action Footer */}
          <div className="p-3 bg-[#071A2B] border-t border-[#176B87]/30 space-y-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenQuote();
              }}
              className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#176B87] to-[#00D26A] text-white text-xs font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md"
            >
              <Ship className="w-3.5 h-3.5" /> Launch 4-Step Freight Quote Wizard <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about rates, crewing, ports..."
                className="flex-1 bg-[#0F2C59] border border-[#176B87]/30 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#176B87]"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 rounded-xl bg-[#176B87] hover:bg-[#176B87]/80 text-white transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
