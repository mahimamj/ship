"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Calculator, ArrowRight, ArrowLeft, Shield, FileText, Download } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "Technical Management",
    vesselCategory: "Bulk Carrier",
    capacity: "2500 TEU / 58k DWT",
    originPort: "Dubai DP World",
    destPort: "JNPT Mumbai",
    targetDate: "Immediate (Within 7 Days)",
    notes: "",
  });

  if (!isOpen) return null;

  const steps = [
    { num: 1, label: "Service" },
    { num: 2, label: "Cargo Specs" },
    { num: 3, label: "Route & Date" },
    { num: 4, label: "Proposal Summary" },
  ];

  // Dynamic estimate calculation based on state
  const isTanker = formData.vesselCategory.includes("Tanker");
  const baseCost = isTanker ? 18500 : 12400;
  const crewFee = 3200;
  const TotalEstimate = baseCost + crewFee;

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmitFinal = () => {
    setSubmitted(true);
  };

  const resetModal = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-[#071A2B]/85 backdrop-blur-md flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-[#0F2C59] border border-[#176B87]/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full text-white shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={resetModal}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl bg-[#071A2B] border border-white/10 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div className="flex items-center space-x-3 border-b border-[#176B87]/30 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-[#176B87]/30 border border-[#176B87] text-[#00D26A] flex items-center justify-center shrink-0">
              <Calculator size={24} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-jakarta text-white">4-Step Freight &amp; Vessel Quote Wizard</h3>
              <p className="text-xs text-[#00D26A] font-mono font-semibold">Instant Commercial Proposal Engine</p>
            </div>
          </div>

          {/* Stepper Header Bar */}
          {!submitted && (
            <div className="grid grid-cols-4 gap-2 border-b border-[#176B87]/20 pb-4">
              {steps.map((s) => (
                <div
                  key={s.num}
                  onClick={() => setStep(s.num)}
                  className={`cursor-pointer p-2 rounded-xl border text-center transition-all ${
                    step === s.num
                      ? "bg-[#176B87] border-[#00D26A] text-white shadow-lg"
                      : step > s.num
                      ? "bg-[#071A2B] border-[#00D26A]/50 text-[#00D26A]"
                      : "bg-[#071A2B]/40 border-white/10 text-slate-400"
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase font-bold text-slate-300">Step {s.num}</div>
                  <div className="text-xs font-bold truncate">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Submission Success Screen */}
          {submitted ? (
            <div className="bg-[#071A2B] border border-[#00D26A]/40 rounded-2xl p-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#00D26A]/20 text-[#00D26A] flex items-center justify-center mx-auto border border-[#00D26A]/50">
                <CheckCircle2 size={40} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white font-jakarta">Official Quote Proposal Issued!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                  Your reference ID <span className="font-mono font-bold text-[#00D26A]">#OSF-QUOTE-{(Math.random() * 8999 + 1000).toFixed(0)}</span> has been dispatched to our Dubai &amp; India superintendents.
                </p>
              </div>

              {/* Estimate Breakdown Card */}
              <div className="p-4 rounded-xl bg-[#0F2C59] border border-[#176B87]/30 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-[#176B87]/20 pb-2">
                  <span className="text-slate-400">Selected Service:</span>
                  <span className="font-bold text-white">{formData.serviceType}</span>
                </div>
                <div className="flex justify-between border-b border-[#176B87]/20 pb-2">
                  <span className="text-slate-400">Vessel / Capacity:</span>
                  <span className="font-bold text-white">{formData.vesselCategory} ({formData.capacity})</span>
                </div>
                <div className="flex justify-between border-b border-[#176B87]/20 pb-2">
                  <span className="text-slate-400">Route:</span>
                  <span className="font-bold text-white">{formData.originPort} → {formData.destPort}</span>
                </div>
                <div className="flex justify-between pt-1 text-sm font-bold">
                  <span className="text-[#00D26A]">Est. Commercial OPEX:</span>
                  <span className="text-[#00D26A] font-mono">${TotalEstimate.toLocaleString()} USD / Month</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <button
                  onClick={() => alert("Downloading PDF Proposal Summary...")}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#176B87] hover:bg-[#176B87]/80 text-white text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Download size={16} /> Download Proposal PDF
                </button>
                <button
                  onClick={resetModal}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#0F2C59] hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-bold"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5 text-xs">
              {/* STEP 1: Service Selection */}
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-200">Select Primary Maritime Service Required</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: "Technical Management", label: "Full Technical Vessel Management", desc: "Superintendence, OPEX & Drydocking" },
                      { id: "Crew Logistics", label: "RPSL Approved Crew Logistics", desc: "Certified Officers & Marine Engineers" },
                      { id: "Container Freight", label: "Container & Liner Freight Charter", desc: "FCL / LCL Container Cargo Shipping" },
                      { id: "Offshore Tug", label: "Offshore & Tugboat Chartering", desc: "AHTS, Barges & Port Towage" },
                    ].map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceType: s.id })}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          formData.serviceType === s.id
                            ? "bg-[#176B87] border-[#00D26A] text-white shadow-lg"
                            : "bg-[#071A2B]/60 border-[#176B87]/30 text-slate-300 hover:border-[#176B87]"
                        }`}
                      >
                        <div className="text-sm font-bold">{s.label}</div>
                        <div className="text-[11px] text-slate-400 mt-1">{s.desc}</div>
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Company / Organization Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Vance Shipping LLC"
                      className="w-full bg-[#071A2B] border border-[#176B87]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#176B87]"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Cargo & Vessel Specs */}
              {step === 2 && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-200">Vessel Category &amp; Payload Specs</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Vessel Type</label>
                      <select
                        value={formData.vesselCategory}
                        onChange={(e) => setFormData({ ...formData, vesselCategory: e.target.value })}
                        className="w-full bg-[#071A2B] border border-[#176B87]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#176B87]"
                      >
                        <option value="Bulk Carrier">Bulk Carrier (Handymax/Supramax)</option>
                        <option value="Oil Tanker">Oil / Aframax Tanker</option>
                        <option value="Chemical Tanker">Chemical & Product Tanker</option>
                        <option value="Container Ship">Container Ship (Feeder/Panamax)</option>
                        <option value="Offshore OSV">Offshore OSV / Tugboat</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Payload Capacity (TEU / DWT)</label>
                      <input
                        type="text"
                        value={formData.capacity}
                        onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                        placeholder="e.g. 58,000 DWT or 2,500 TEU"
                        className="w-full bg-[#071A2B] border border-[#176B87]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#176B87]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Special Operational Notes</label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify flag requirements, dry dock schedule, or cargo hazards..."
                      className="w-full bg-[#071A2B] border border-[#176B87]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#176B87] resize-none"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* STEP 3: Route & Schedule */}
              {step === 3 && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-200">Origin, Destination &amp; Schedule</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Origin Port / PIN Code</label>
                      <input
                        type="text"
                        value={formData.originPort}
                        onChange={(e) => setFormData({ ...formData, originPort: e.target.value })}
                        placeholder="Port of Origin e.g. Dubai / JNPT"
                        className="w-full bg-[#071A2B] border border-[#176B87]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#176B87]"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Destination Port</label>
                      <input
                        type="text"
                        value={formData.destPort}
                        onChange={(e) => setFormData({ ...formData, destPort: e.target.value })}
                        placeholder="Destination Port e.g. Colombo / Singapore"
                        className="w-full bg-[#071A2B] border border-[#176B87]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#176B87]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Target Commencement Date</label>
                    <select
                      value={formData.targetDate}
                      onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                      className="w-full bg-[#071A2B] border border-[#176B87]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#176B87]"
                    >
                      <option value="Immediate (Within 7 Days)">Immediate (Within 7 Days)</option>
                      <option value="Next 30 Days">Next 30 Days</option>
                      <option value="Q3/Q4 Charter Schedule">Q3/Q4 Charter Schedule</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Contact Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Capt. Vance"
                        className="w-full bg-[#071A2B] border border-[#176B87]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#176B87]"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Work Email / WhatsApp *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vance@maritime.com"
                        className="w-full bg-[#071A2B] border border-[#176B87]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#176B87]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Live Proposal Preview */}
              {step === 4 && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#071A2B] border border-[#176B87]/40 space-y-3">
                    <div className="flex items-center justify-between border-b border-[#176B87]/20 pb-2">
                      <span className="font-bold text-white text-sm">Commercial Proposal Summary</span>
                      <span className="text-[#00D26A] font-mono text-xs">COMMERCIAL ENGINE READY</span>
                    </div>

                    <div className="space-y-1.5 text-slate-300">
                      <div className="flex justify-between">
                        <span>Requested Service:</span>
                        <span className="font-bold text-white">{formData.serviceType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Vessel Specification:</span>
                        <span className="font-bold text-white">{formData.vesselCategory} ({formData.capacity})</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Route Corridor:</span>
                        <span className="font-bold text-white">{formData.originPort} → {formData.destPort}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Timeline:</span>
                        <span className="font-bold text-white">{formData.targetDate}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#176B87]/30 flex justify-between items-center text-sm font-bold">
                      <span>Est. Monthly Commercial Fee:</span>
                      <span className="text-xl font-mono text-[#00D26A]">${TotalEstimate.toLocaleString()} USD</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Button Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#176B87]/20">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-4 py-2.5 rounded-xl bg-[#071A2B] border border-[#176B87]/40 text-slate-300 hover:text-white flex items-center gap-2"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                ) : (
                  <div></div>
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-2.5 rounded-xl bg-[#176B87] hover:bg-[#176B87]/80 text-white font-bold flex items-center gap-2 shadow-lg"
                  >
                    Next Step <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmitFinal}
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#176B87] to-[#00D26A] text-white font-black text-sm flex items-center gap-2 shadow-xl hover:opacity-90 transition-all"
                  >
                    <Send size={16} /> Dispatch Official Proposal
                  </button>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
