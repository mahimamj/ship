import type { Metadata } from "next";
import { Bebas_Neue, Syne, Inter, Manrope } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

const syne = Syne({
  weight: ["700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Oceanic Star Fleet | International Maritime Operations & Ship Management",
  description:
    "Oceanic Star Fleet Ship Management LLC delivers world-class technical vessel management, crew logistics, and offshore operations from Dubai, India, and Sri Lanka.",
  keywords: [
    "International Ship Management",
    "Technical Vessel Management",
    "Dubai Ship Management LLC",
    "Maritime Engineering",
    "Global Fleet Logistics",
    "RPSL Approved Crewing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${syne.variable} ${inter.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="bg-[#F5F5F2] text-[#071A2B] font-sans antialiased min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
