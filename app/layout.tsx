import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";
import { CinematicCustomCursor } from "./components/CinematicCustomCursor";
import { SeafarerCrewingPopup } from "./components/SeafarerCrewingPopup";

export const metadata: Metadata = {
  title: "Oceanic Star Shipping | International Maritime Operations & Ship Management",
  description:
    "Oceanic Star Shipping Pvt. Ltd. delivers world-class technical vessel management, crew logistics, and offshore operations across India, Dubai, Sri Lanka, Canada, and Turkey.",
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
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#F5F5F2] text-[#071A2B] font-sans antialiased min-h-screen overflow-x-hidden">
        <CinematicCustomCursor />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <SeafarerCrewingPopup />
      </body>
    </html>
  );
}
