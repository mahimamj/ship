"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceCategory: string;
  entityPreference: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-[#F5F5F2] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[rgba(7,26,43,0.12)] pb-10 mb-16 gap-8">
          <div>
            <span className="label-mono text-[#176B87] mb-3 block font-semibold">
              // DISPATCH & INQUIRIES
            </span>
            <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#071A2B] leading-none">
              CONTACT OPERATIONS
            </h2>
          </div>

          <p className="text-sm font-manrope text-[#667783] max-w-md leading-relaxed">
            Reach out directly for technical vessel proposals, RPSL crewing assessments, drydock planning, or port agency dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Office Contacts */}
          <div className="lg:col-span-5 space-y-6">
            {/* Dubai HQ Card */}
            <div className="bg-white rounded-3xl p-8 border border-[rgba(7,26,43,0.12)] shadow-sm space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#176B87] flex items-center justify-center font-bold">
                  🇦🇪
                </div>
                <div>
                  <h3 className="font-syne text-lg font-bold text-[#071A2B]">
                    Oceanic Star Fleet Ship Management LLC
                  </h3>
                  <p className="text-xs font-mono text-[#176B87] font-semibold">Dubai Operations HQ</p>
                </div>
              </div>

              <div className="text-xs font-manrope text-[#667783] space-y-2.5 pt-4 border-t border-[rgba(7,26,43,0.12)]">
                <p className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#176B87] shrink-0 mt-0.5" />
                  <span>Suite 1402, Commercial Tower, Business Bay, P.O. Box 48802, Dubai, UAE</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#176B87] shrink-0" />
                  <a href="tel:+97143990000" className="hover:text-[#071A2B] transition font-bold">+971 4 399 0000</a>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#176B87] shrink-0" />
                  <a href="mailto:dubai@oceanicstar.com" className="hover:text-[#071A2B] transition font-bold">dubai@oceanicstar.com</a>
                </p>
              </div>
            </div>

            {/* India HQ Card */}
            <div className="bg-white rounded-3xl p-8 border border-[rgba(7,26,43,0.12)] shadow-sm space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#176B87] flex items-center justify-center font-bold">
                  🇮🇳
                </div>
                <div>
                  <h3 className="font-syne text-lg font-bold text-[#071A2B]">
                    Oceanic Star Shipping Pvt. Ltd.
                  </h3>
                  <p className="text-xs font-mono text-[#176B87] font-semibold">Mumbai HQ & Crewing Center</p>
                </div>
              </div>

              <div className="text-xs font-manrope text-[#667783] space-y-2.5 pt-4 border-t border-[rgba(7,26,43,0.12)]">
                <p className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#176B87] shrink-0 mt-0.5" />
                  <span>Fort Maritime Center, 4th Floor, SBS Road, Mumbai - 400001, India</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#176B87] shrink-0" />
                  <a href="tel:+912268000000" className="hover:text-[#071A2B] transition font-bold">+91 22 6800 0000</a>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#176B87] shrink-0" />
                  <a href="mailto:mumbai@oceanicstar.com" className="hover:text-[#071A2B] transition font-bold">mumbai@oceanicstar.com</a>
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Quick Contact */}
            <a
              href="https://wa.me/97143990000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 flex items-center justify-between text-emerald-800 transition group hover:bg-emerald-100"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-syne text-emerald-950">Direct WhatsApp Operations</h4>
                  <p className="text-xs text-emerald-700 font-mono">24/7 Fleet Dispatch Hotline</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold px-4 py-2 bg-emerald-600 text-white rounded-full">
                CHAT NOW
              </span>
            </a>
          </div>

          {/* Right Column: React Hook Form Inquiry */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[rgba(7,26,43,0.12)] shadow-sm space-y-6">
              <div className="border-b border-[rgba(7,26,43,0.12)] pb-4">
                <h3 className="font-syne text-2xl font-extrabold text-[#071A2B]">COMMERCIAL PROPOSAL REQUEST</h3>
                <p className="text-xs font-manrope text-[#667783] mt-1">Submit your specifications for a response within 2 business hours.</p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-sky-50 border border-sky-200 rounded-2xl p-8 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-sky-100 text-[#176B87] flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="font-syne text-xl font-bold text-[#071A2B]">Inquiry Received Successfully</h4>
                  <p className="text-xs font-manrope text-[#667783] max-w-md mx-auto">
                    Thank you for reaching out. Our senior superintendent will review your request and contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full font-mono text-xs font-bold bg-[#071A2B] text-white"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-xs font-manrope">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#071A2B] font-semibold mb-1">Full Name *</label>
                      <input
                        type="text"
                        {...register("fullName", { required: "Full Name is required" })}
                        placeholder="Capt. John Doe"
                        className="w-full bg-[#F5F5F2] border border-[rgba(7,26,43,0.12)] rounded-xl px-4 py-3 text-[#071A2B] focus:outline-none focus:border-[#071A2B]"
                      />
                      {errors.fullName && <span className="text-rose-600 text-[10px]">{errors.fullName.message}</span>}
                    </div>

                    <div>
                      <label className="block text-[#071A2B] font-semibold mb-1">Work Email *</label>
                      <input
                        type="email"
                        {...register("email", {
                          required: "Work Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                        })}
                        placeholder="j.doe@shipping-co.com"
                        className="w-full bg-[#F5F5F2] border border-[rgba(7,26,43,0.12)] rounded-xl px-4 py-3 text-[#071A2B] focus:outline-none focus:border-[#071A2B]"
                      />
                      {errors.email && <span className="text-rose-600 text-[10px]">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#071A2B] font-semibold mb-1">Phone / Mobile *</label>
                      <input
                        type="tel"
                        {...register("phone", { required: "Phone number is required" })}
                        placeholder="+971 50 123 4567"
                        className="w-full bg-[#F5F5F2] border border-[rgba(7,26,43,0.12)] rounded-xl px-4 py-3 text-[#071A2B] focus:outline-none focus:border-[#071A2B]"
                      />
                      {errors.phone && <span className="text-rose-600 text-[10px]">{errors.phone.message}</span>}
                    </div>

                    <div>
                      <label className="block text-[#071A2B] font-semibold mb-1">Company / Vessel Name</label>
                      <input
                        type="text"
                        {...register("companyName")}
                        placeholder="Global Maritime Ltd"
                        className="w-full bg-[#F5F5F2] border border-[rgba(7,26,43,0.12)] rounded-xl px-4 py-3 text-[#071A2B] focus:outline-none focus:border-[#071A2B]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#071A2B] font-semibold mb-1">Service Required *</label>
                      <select
                        {...register("serviceCategory", { required: "Please select a service" })}
                        className="w-full bg-[#F5F5F2] border border-[rgba(7,26,43,0.12)] rounded-xl px-4 py-3 text-[#071A2B] focus:outline-none focus:border-[#071A2B]"
                      >
                        <option value="">Select Service Category</option>
                        <option value="Crew Management">Crew Management</option>
                        <option value="Technical Management">Technical Management</option>
                        <option value="Dry Dock Management">Dry Dock Management</option>
                        <option value="Port Agency & Husbandry">Port Agency & Husbandry</option>
                        <option value="Chartering & Brokering">Chartering & Brokering</option>
                      </select>
                      {errors.serviceCategory && <span className="text-rose-600 text-[10px]">{errors.serviceCategory.message}</span>}
                    </div>

                    <div>
                      <label className="block text-[#071A2B] font-semibold mb-1">Preferred Office Entity</label>
                      <select
                        {...register("entityPreference")}
                        className="w-full bg-[#F5F5F2] border border-[rgba(7,26,43,0.12)] rounded-xl px-4 py-3 text-[#071A2B] focus:outline-none focus:border-[#071A2B]"
                      >
                        <option value="Dubai LLC">Dubai LLC (Oceanic Star Fleet)</option>
                        <option value="India Pvt Ltd">India Pvt Ltd (Oceanic Star Shipping)</option>
                        <option value="Sri Lanka Branch">Sri Lanka Branch</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#071A2B] font-semibold mb-1">Detailed Message / Specifications *</label>
                    <textarea
                      rows={4}
                      {...register("message", { required: "Please describe your request" })}
                      placeholder="Specify vessel type, DWT, port call dates, or crew rank requirements..."
                      className="w-full bg-[#F5F5F2] border border-[rgba(7,26,43,0.12)] rounded-xl px-4 py-3 text-[#071A2B] focus:outline-none focus:border-[#071A2B] resize-none"
                    ></textarea>
                    {errors.message && <span className="text-rose-600 text-[10px]">{errors.message.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-mono font-bold text-xs bg-[#071A2B] text-white hover:bg-[#176B87] transition flex items-center justify-center space-x-2"
                    data-cursor
                    data-cursor-text="SUBMIT"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>SUBMIT DISPATCH REQUEST</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
