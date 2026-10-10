import React from "react";
import Link from "next/link";
import { ArrowLeft, Cookie, ShieldCheck, CheckCircle2, Lock, HelpCircle, Mail } from "lucide-react";
import { Footer } from "../components/Footer";
import { CinematicNavbar } from "../components/CinematicNavbar";

export const metadata = {
  title: "Cookie Policy | Oceanic Star Fleet Ship Management",
  description: "Learn how Oceanic Star Group uses cookies and tracking technologies to ensure site security, vessel dispatch performance, and operational analytics.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F2] text-[#071A2B] font-sans antialiased selection:bg-[#0077B6] selection:text-white">
      {/* Top Navigation */}
      <div className="bg-[#061B2A] text-white py-4 px-6 md:px-12 border-b border-slate-800">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs font-mono font-bold text-[#00D9E8] hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO MAIN PORTAL</span>
          </Link>
          <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
            OCEANIC STAR GROUP // LEGAL &amp; PRIVACY
          </span>
        </div>
      </div>

      {/* Hero Title Section */}
      <section className="bg-[#061B2A] text-white py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0077B6]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1200px] mx-auto space-y-4 relative z-10">
          <span className="px-3.5 py-1.5 bg-[#00D9E8]/10 text-[#00D9E8] border border-[#00D9E8]/30 rounded-full font-mono text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2">
            <Cookie className="w-3.5 h-3.5" /> DATA TRANSPARENCY &amp; COMPLIANCE
          </span>

          <h1 className="font-syne text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            COOKIE POLICY
          </h1>

          <p className="font-manrope text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
            This Cookie Policy explains how Oceanic Star Fleet Ship Management LLC and Oceanic Star Shipping Pvt. Ltd. use cookies and similar technologies to ensure smooth portal functionality and security.
          </p>

          <div className="pt-2 text-xs font-mono text-slate-400">
            Last Updated: <strong className="text-white">September 2026</strong> | Applicable to: <strong className="text-[#00D9E8]">Global Portals &amp; Dispatch Systems</strong>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 space-y-16">
        
        {/* Section 1: What Are Cookies */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-3 text-[#0077B6]">
            <HelpCircle className="w-6 h-6" />
            <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#071A2B]">1. WHAT ARE COOKIES?</h2>
          </div>
          <p className="font-manrope text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Cookies are small text files placed on your device (computer, tablet, or mobile) when you visit web portals. They are widely used by maritime logistics and corporate platforms to make websites work efficiently, provide secure portal navigation, save user preferences, and report anonymized analytical data to system operators.
          </p>
        </div>

        {/* Section 2: How We Use Cookies */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="font-mono text-xs font-bold text-[#0077B6] tracking-widest uppercase block mb-1">
              // CLASSIFICATION OF COOKIES
            </span>
            <h2 className="font-syne text-3xl font-extrabold text-[#071A2B]">2. CATEGORIES OF COOKIES WE EMPLOY</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Essential Cookies */}
            <div className="bg-white rounded-3xl p-8 border border-sky-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0077B6] flex items-center justify-center font-bold">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-syne text-lg font-bold text-[#071A2B]">Essential &amp; Security Cookies</h3>
              <p className="font-manrope text-xs sm:text-sm text-slate-600 leading-relaxed">
                Strictly necessary for the website to function. They enable core security, network management, commercial proposal submissions, and session authentication.
              </p>
              <span className="inline-block font-mono text-[11px] font-bold text-[#0077B6] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                Always Active
              </span>
            </div>

            {/* Performance Cookies */}
            <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-syne text-lg font-bold text-[#071A2B]">Performance &amp; Analytics</h3>
              <p className="font-manrope text-xs sm:text-sm text-slate-600 leading-relaxed">
                Help us understand how seafarers and vessel owners interact with our portals by collecting aggregated, anonymous data regarding page load times and navigation paths.
              </p>
              <span className="inline-block font-mono text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                User Opt-In
              </span>
            </div>

            {/* Functional Cookies */}
            <div className="bg-white rounded-3xl p-8 border border-amber-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-syne text-lg font-bold text-[#071A2B]">Functional &amp; Preference</h3>
              <p className="font-manrope text-xs sm:text-sm text-slate-600 leading-relaxed">
                Allow our website to remember your selected preferences (such as cookie consent states or form defaults) for a smoother browsing experience.
              </p>
              <span className="inline-block font-mono text-[11px] font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                User Opt-In
              </span>
            </div>

          </div>
        </div>

        {/* Section 3: Detailed Breakdown Table */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="font-syne text-2xl font-extrabold text-[#071A2B]">3. DETAILED COOKIE INVENTORY</h2>
            <p className="text-xs font-manrope text-slate-500 mt-1">Specific cookies utilized across our web infrastructure:</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-manrope text-xs sm:text-sm text-slate-600 border-collapse">
              <thead>
                <tr className="border-b border-slate-200 font-mono text-xs text-[#071A2B] bg-slate-50">
                  <th className="p-4 font-bold">COOKIE NAME</th>
                  <th className="p-4 font-bold">PROVIDER</th>
                  <th className="p-4 font-bold">PURPOSE</th>
                  <th className="p-4 font-bold">EXPIRATION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-mono font-bold text-[#0077B6]">oceanic_cookie_consent</td>
                  <td className="p-4 font-semibold text-[#071A2B]">Oceanic Star Fleet</td>
                  <td className="p-4">Stores your cookie consent selection (essential or all cookies).</td>
                  <td className="p-4 font-mono">1 Year</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono font-bold text-[#0077B6]">__cf_bm</td>
                  <td className="p-4 font-semibold text-[#071A2B]">Cloudflare Security</td>
                  <td className="p-4">Distinguishes between humans and automated bots to protect against DDoS attacks.</td>
                  <td className="p-4 font-mono">30 Minutes</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono font-bold text-[#0077B6]">_ga / _gid</td>
                  <td className="p-4 font-semibold text-[#071A2B]">Google Analytics</td>
                  <td className="p-4">Calculates visitor, session, and campaign data for internal operational reports.</td>
                  <td className="p-4 font-mono">2 Years / 24 Hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Managing Cookie Preferences */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm space-y-4">
          <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-[#071A2B]">4. HOW TO CONTROL &amp; DISABLE COOKIES</h2>
          <p className="font-manrope text-sm text-slate-600 leading-relaxed font-normal">
            You can modify your cookie settings at any time through your web browser preferences. Most web browsers allow you to block or delete cookies:
          </p>

          <ul className="list-disc list-inside space-y-2 font-manrope text-xs sm:text-sm text-slate-600 pl-2">
            <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Third-party cookies.</li>
            <li><strong>Mozilla Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Enhanced Tracking Protection.</li>
            <li><strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Block all cookies.</li>
            <li><strong>Microsoft Edge:</strong> Settings &gt; Site permissions &gt; Cookies and site data.</li>
          </ul>

          <p className="font-manrope text-xs text-slate-500 pt-2">
            * Please note that disabling essential cookies may impact certain interactive features such as submitting commercial proposal requests.
          </p>
        </div>

        {/* Section 5: Data Protection Contact */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#061B2A] text-white shadow-xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-syne text-2xl font-bold text-white">HAVE QUESTIONS ABOUT YOUR DATA PRIVACY?</h3>
            <p className="font-manrope text-xs sm:text-sm text-slate-300">
              For any inquiries regarding our Cookie Policy, GDPR compliance, or data protection practices, please contact our Compliance Department.
            </p>
          </div>

          <a
            href="mailto:info@oceanicstarshipping.com?subject=Cookie%20Policy%20Inquiry"
            className="px-6 py-3.5 rounded-xl bg-[#0077B6] hover:bg-[#00D9E8] hover:text-[#061B2A] text-white font-mono font-bold text-xs tracking-wider uppercase transition shadow-md flex items-center space-x-2 shrink-0"
          >
            <Mail className="w-4 h-4" />
            <span>CONTACT COMPLIANCE OFFICER</span>
          </a>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
