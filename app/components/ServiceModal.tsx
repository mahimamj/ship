"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { ServiceItem } from "./ServicesGrid";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onOpenQuote }) => {
  if (!service) return null;
  const Icon = service.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="glass-panel rounded-3xl p-8 max-w-2xl w-full border border-teal-500/30 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-900 border border-white/10"
          >
            <X size={20} />
          </button>

          <div className="flex items-center space-x-4 border-b border-white/10 pb-4 pr-10">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-teal-400 uppercase tracking-widest bg-teal-500/10 px-2.5 py-0.5 rounded-full border border-teal-500/20">
                {service.category}
              </span>
              <h3 className="text-2xl font-bold font-poppins text-white mt-1">{service.title}</h3>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed font-light">
            {service.fullDesc}
          </p>

          <div className="space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-white/5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Technical Scope & Key Deliverables:
            </h4>
            <div className="space-y-2">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-end border-t border-white/10">
            <button
              onClick={onClose}
              className="btn-outline py-3 px-5 rounded-xl text-xs font-semibold"
            >
              Close Technical Scope
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="btn-primary py-3 px-6 rounded-xl text-xs font-semibold flex items-center justify-center space-x-2"
            >
              <span>Request Quote For {service.title}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
