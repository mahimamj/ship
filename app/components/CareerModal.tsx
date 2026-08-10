"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, CheckCircle2, FileUp, Briefcase } from "lucide-react";

interface CareerModalProps {
  isOpen: boolean;
  jobTitle?: string;
  onClose: () => void;
}

interface ApplicationForm {
  fullName: string;
  email: string;
  phone: string;
  rankApplied: string;
  cocNumber: string;
  seaExperience: string;
}

export const CareerModal: React.FC<CareerModalProps> = ({ isOpen, jobTitle, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<ApplicationForm>();

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const onSubmit = async (data: ApplicationForm) => {
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
          className="glass-panel rounded-3xl p-8 max-w-lg w-full border border-teal-500/30 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={() => { setSubmitted(false); onClose(); }}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-900 border border-white/10"
          >
            <X size={20} />
          </button>

          <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <Briefcase size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-poppins text-white">Seafarer Application</h3>
              <p className="text-xs text-teal-400 font-semibold">{jobTitle || "General Application"}</p>
            </div>
          </div>

          {submitted ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center space-y-4">
              <CheckCircle2 size={48} className="text-emerald-400 mx-auto" />
              <h4 className="text-xl font-bold text-white font-poppins">Application Submitted!</h4>
              <p className="text-xs text-slate-300">
                Your CV has been dispatched to our RPSL crewing desk in Mumbai. Our crew superintendents will verify your CDC & STCW credentials shortly.
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
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Full Name (As per Passport) *</label>
                <input
                  type="text"
                  {...register("fullName", { required: true })}
                  placeholder="Capt. Rahul Sharma"
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Email Address *</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="r.sharma@seafarer.com"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Mobile / WhatsApp *</label>
                  <input
                    type="tel"
                    {...register("phone", { required: true })}
                    placeholder="+91 98 200 00000"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Rank Applied For *</label>
                  <input
                    type="text"
                    {...register("rankApplied", { required: true })}
                    defaultValue={jobTitle || ""}
                    placeholder="e.g. Master / Chief Engineer"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">CoC / License Number</label>
                  <input
                    type="text"
                    {...register("cocNumber")}
                    placeholder="e.g. IND-COC-98765"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Sea Experience Summary</label>
                <input
                  type="text"
                  {...register("seaExperience")}
                  placeholder="e.g. 5 Years rank experience on Oil Tankers & Bulk Carriers"
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                />
              </div>

              {/* Upload Resume Box */}
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Upload Resume (PDF / DOCX) *</label>
                <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-teal-500/40 hover:border-teal-400 rounded-2xl cursor-pointer bg-slate-900/60 transition">
                  <div className="flex flex-col items-center justify-center pt-2 pb-3">
                    <FileUp className="w-8 h-8 text-teal-400 mb-1" />
                    <p className="text-xs text-slate-300">
                      {fileName ? <strong className="text-teal-300">{fileName}</strong> : "Click to select CV document"}
                    </p>
                  </div>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-4 rounded-xl font-semibold text-xs flex items-center justify-center space-x-2 shadow-xl"
              >
                {isSubmitting ? <span>Uploading Credentials...</span> : <><Upload size={16} /><span>Submit Seafarer Application</span></>}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
