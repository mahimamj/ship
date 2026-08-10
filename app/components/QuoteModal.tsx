"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Calculator } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuoteForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  vesselType: string;
  dwt: string;
  services: string[];
  notes: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<QuoteForm>();

  if (!isOpen) return null;

  const onSubmit = async (data: QuoteForm) => {
    await new Promise((res) => setTimeout(res, 1000));
    setSubmitted(true);
    reset();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="glass-panel rounded-3xl p-8 max-w-xl w-full border border-teal-500/30 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={() => { setSubmitted(false); onClose(); }}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-900 border border-white/10"
          >
            <X size={20} />
          </button>

          <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <Calculator size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-poppins text-white">Commercial Quote Request</h3>
              <p className="text-xs text-teal-400 font-semibold">Oceanic Star Fleet & Technical Management</p>
            </div>
          </div>

          {submitted ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center space-y-4">
              <CheckCircle2 size={48} className="text-emerald-400 mx-auto" />
              <h4 className="text-xl font-bold text-white font-poppins">Quote Request Submitted!</h4>
              <p className="text-xs text-slate-300">
                Our commercial superintendents will evaluate your vessel specifications and issue a customized OPEX estimate within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="btn-primary w-full py-3 rounded-xl text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-xs">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Your Name *</label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Capt. Alexander Vance"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Work Email *</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="a.vance@maritime.com"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    {...register("phone", { required: true })}
                    placeholder="+971 50 000 0000"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Company Name</label>
                  <input
                    type="text"
                    {...register("company")}
                    placeholder="Vance Shipping Ltd"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Vessel Category</label>
                  <select
                    {...register("vesselType")}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                  >
                    <option value="Bulk Carrier">Bulk Carrier</option>
                    <option value="Oil Tanker">Oil Tanker</option>
                    <option value="Chemical Tanker">Chemical Tanker</option>
                    <option value="Container Ship">Container Ship</option>
                    <option value="Offshore OSV/AHTS">Offshore OSV/AHTS</option>
                    <option value="General Cargo">General Cargo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Vessel DWT / TEU</label>
                  <input
                    type="text"
                    {...register("dwt")}
                    placeholder="e.g. 58,000 DWT / 2,500 TEU"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Additional Requirements</label>
                <textarea
                  rows={3}
                  {...register("notes")}
                  placeholder="Specify dry dock timeline, crew nationality preferences, or port call schedule..."
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-4 rounded-xl font-semibold text-xs flex items-center justify-center space-x-2 shadow-xl"
              >
                {isSubmitting ? <span>Calculating Estimate...</span> : <><Send size={16} /><span>Submit Quote Proposal</span></>}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
