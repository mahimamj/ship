"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Globe, Ship, Clock, Users, Phone, Mail, Plus, Minus, Navigation } from "lucide-react";

type HubKey = "dubai" | "mumbai" | "colombo";

interface HubInfo {
  id: HubKey;
  pillLabel: string;
  badgeLabel: string;
  city: string;
  country: string;
  entity: string;
  coords: [number, number]; // [lat, lng]
  roles: string[];
  address: string;
  phone: string;
  email: string;
  licenseBadge: string;
}

export const GlobalPresenceMap: React.FC = () => {
  const [activeHub, setActiveHub] = useState<HubKey>("colombo");
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);
  const markersRef = useRef<Record<string, any>>({});

  const hubs: Record<HubKey, HubInfo> = {
    dubai: {
      id: "dubai",
      pillLabel: "DUBAI // UAE",
      badgeLabel: "DUBAI\nUAE",
      city: "Dubai",
      country: "United Arab Emirates",
      entity: "Oceanic Star Fleet Ship Management LLC",
      coords: [25.2048, 55.2708],
      roles: ["Global Fleet Management", "Technical Operations", "Commercial Chartering"],
      address: "Suite 1402, Commercial Tower, Business Bay, P.O. Box 48802, Dubai, UAE",
      phone: "+971 4 399 0000",
      email: "dubai@oceanicstar.com",
      licenseBadge: "UAE Commercial License #789402 Approved",
    },
    mumbai: {
      id: "mumbai",
      pillLabel: "MUMBAI // INDIA",
      badgeLabel: "MUMBAI\nINDIA",
      city: "Mumbai",
      country: "India",
      entity: "Oceanic Star Shipping Pvt. Ltd.",
      coords: [19.076, 72.8777],
      roles: ["Crew Management", "STCW Seafarer Training", "Indian Operations"],
      address: "Fort Maritime Center, 4th Floor, SBS Road, Mumbai - 400001, India",
      phone: "+91 22 6800 0000",
      email: "mumbai@oceanicstar.com",
      licenseBadge: "DG Shipping RPSL-MUM-245 Approved",
    },
    colombo: {
      id: "colombo",
      pillLabel: "COLOMBO // SRI LANKA",
      badgeLabel: "COLOMBO\nSRI LANKA",
      city: "Colombo",
      country: "Sri Lanka",
      entity: "Oceanic Star Lanka Pvt Ltd",
      coords: [6.9271, 79.8612],
      roles: ["South Asia Port Agency & Launch Operations", "Husbandry & Spares"],
      address: "Maritime House, 2nd Floor, Janadhipathi Mawatha, Colombo 01, Sri Lanka",
      phone: "+94 11 245 0000",
      email: "colombo@oceanicstar.com",
      licenseBadge: "Sri Lanka Merchant Shipping Approved",
    },
  };

  const selected = hubs[activeHub];

  // Initialize Leaflet Map on mount
  useEffect(() => {
    let mapInstance: any;

    const initMap = async () => {
      if (typeof window === "undefined" || !mapContainerRef.current) return;
      const L = (await import("leaflet")).default;

      // Ensure container doesn't re-initialize
      if (mapContainerRef.current.dataset.leafletInitialized) return;
      mapContainerRef.current.dataset.leafletInitialized = "true";

      // Initial center over Indian Ocean / Middle East
      mapInstance = L.map(mapContainerRef.current, {
        center: [16.5, 67.5],
        zoom: 4,
        zoomControl: false,
        attributionControl: false,
      });

      leafletMapRef.current = mapInstance;

      // Add CartoDB Positron Light Basemap Tile Layer
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 18,
        subdomains: "abcd",
      }).addTo(mapInstance);

      // Add Markers
      Object.entries(hubs).forEach(([key, hub]) => {
        const customIcon = L.divIcon({
          className: "custom-map-pin-badge",
          html: `
            <div class="relative group cursor-pointer flex flex-col items-center">
              <div class="px-2.5 py-1 bg-[#071A2B] text-white text-[10px] font-bold font-sans rounded-md shadow-md mb-1 whitespace-pre text-center leading-tight">
                ${hub.city.toUpperCase()}<br/><span class="text-[8px] text-sky-200 font-normal">${hub.country.toUpperCase()}</span>
              </div>
              <div class="w-7 h-7 rounded-full bg-[#176B87] text-white flex items-center justify-center shadow-lg border-2 border-white animate-pulse">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
            </div>
          `,
          iconSize: [80, 60],
          iconAnchor: [40, 55],
        });

        const marker = L.marker(hub.coords, { icon: customIcon }).addTo(mapInstance);
        marker.on("click", () => handleSelectHub(key as HubKey));
        markersRef.current[key] = marker;
      });

      // Draw dashed maritime shipping route lines
      const dubaiCoords = hubs.dubai.coords;
      const mumbaiCoords = hubs.mumbai.coords;
      const colomboCoords = hubs.colombo.coords;

      // Curved routes
      L.polyline([dubaiCoords, mumbaiCoords], {
        color: "#176B87",
        weight: 2.5,
        dashArray: "6, 8",
        opacity: 0.8,
      }).addTo(mapInstance);

      L.polyline([mumbaiCoords, colomboCoords], {
        color: "#176B87",
        weight: 2.5,
        dashArray: "6, 8",
        opacity: 0.8,
      }).addTo(mapInstance);

      L.polyline([dubaiCoords, colomboCoords], {
        color: "#071A2B",
        weight: 1.5,
        dashArray: "4, 6",
        opacity: 0.4,
      }).addTo(mapInstance);
    };

    initMap();

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  const handleSelectHub = (key: HubKey) => {
    setActiveHub(key);
    if (leafletMapRef.current) {
      const targetCoords = hubs[key].coords;
      leafletMapRef.current.flyTo(targetCoords, 5, {
        duration: 1.2,
      });
    }
  };

  const handleZoomIn = () => {
    if (leafletMapRef.current) leafletMapRef.current.zoomIn();
  };

  const handleZoomOut = () => {
    if (leafletMapRef.current) leafletMapRef.current.zoomOut();
  };

  return (
    <section id="presence" className="py-20 sm:py-32 bg-[#F5F5F2] text-[#071A2B] border-b border-[rgba(7,26,43,0.12)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-mono tracking-widest text-[#176B87] uppercase font-bold block mb-2">
            GLOBAL PRESENCE
          </span>
          <h2 className="font-jakarta text-3xl sm:text-5xl font-extrabold text-[#071A2B] tracking-tight">
            Three Hubs. One Connected Network.
          </h2>
          <p className="text-sm font-manrope text-[#667783] mt-2 font-light max-w-xl">
            Strategically located across key maritime regions to deliver seamless support and global reach.
          </p>
        </div>

        {/* Location Selection Controls (Pill Buttons) */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {(["dubai", "mumbai", "colombo"] as const).map((key) => {
            const hub = hubs[key];
            const isActive = activeHub === key;
            return (
              <button
                key={key}
                onClick={() => handleSelectHub(key)}
                className={`px-6 py-3 rounded-full font-mono text-xs tracking-widest transition-all duration-300 border ${
                  isActive
                    ? "bg-[#071A2B] text-white border-[#071A2B] font-bold shadow-md"
                    : "bg-[#FFFFFF] text-[#071A2B] border-[rgba(7,26,43,0.12)] hover:border-[#071A2B]"
                }`}
                data-cursor
                data-cursor-text="SELECT"
              >
                {hub.pillLabel}
              </button>
            );
          })}
        </div>

        {/* Desktop Side-by-Side: Map (65%) | Info Panel (35%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Surface Container */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="relative bg-[#FFFFFF] border border-[rgba(7,26,43,0.12)] rounded-3xl h-[460px] sm:h-[540px] lg:h-[580px] overflow-hidden shadow-sm">
              {/* Leaflet Tile Map Surface */}
              <div ref={mapContainerRef} className="w-full h-full z-0" />

              {/* Bottom Left Compass Widget */}
              <div className="absolute bottom-6 left-6 z-10 w-9 h-9 rounded-full bg-white border border-[rgba(7,26,43,0.12)] shadow-md flex items-center justify-center text-[#071A2B] font-bold text-xs font-mono">
                <Navigation className="w-4 h-4 text-[#071A2B] transform -rotate-45" />
              </div>

              {/* Bottom Right Zoom Controls */}
              <div className="absolute bottom-6 right-6 z-10 flex flex-col bg-white border border-[rgba(7,26,43,0.12)] rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={handleZoomIn}
                  className="p-2.5 text-[#071A2B] hover:bg-slate-100 border-b border-slate-100 transition"
                  aria-label="Zoom in"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="p-2.5 text-[#071A2B] hover:bg-slate-100 transition"
                  aria-label="Zoom out"
                >
                  <Minus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 4 Quick Operational Metrics Bar Underneath Map */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-[rgba(7,26,43,0.12)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[rgba(7,26,43,0.12)] flex items-center justify-center text-[#176B87]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-jakarta font-extrabold text-lg text-[#071A2B] block leading-none">3</span>
                  <span className="text-[10px] font-mono tracking-wider text-[#667783] uppercase">STRATEGIC HUBS</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[rgba(7,26,43,0.12)] flex items-center justify-center text-[#176B87]">
                  <Ship className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-jakarta font-extrabold text-lg text-[#071A2B] block leading-none">59+</span>
                  <span className="text-[10px] font-mono tracking-wider text-[#667783] uppercase">VESSELS MANAGED</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[rgba(7,26,43,0.12)] flex items-center justify-center text-[#176B87]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-jakarta font-extrabold text-lg text-[#071A2B] block leading-none">24/7</span>
                  <span className="text-[10px] font-mono tracking-wider text-[#667783] uppercase">GLOBAL SUPPORT</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[rgba(7,26,43,0.12)] flex items-center justify-center text-[#176B87]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-jakarta font-extrabold text-lg text-[#071A2B] block leading-none">GLOBAL</span>
                  <span className="text-[10px] font-mono tracking-wider text-[#667783] uppercase">CONNECTED NETWORK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location Information Panel (35%) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="bg-[#FFFFFF] border border-[rgba(7,26,43,0.12)] rounded-3xl p-8 flex-grow flex flex-col justify-between shadow-sm relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6 flex-grow flex flex-col justify-between"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#176B87] shrink-0">
                      <Compass className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-jakarta text-xl font-bold text-[#071A2B] leading-tight">
                        {selected.entity}
                      </h3>
                      <p className="text-xs font-manrope font-semibold text-[#176B87] mt-1">
                        {selected.city}, {selected.country}
                      </p>
                    </div>
                  </div>

                  <hr className="border-t border-slate-100" />

                  {/* Command Role */}
                  <div>
                    <span className="font-mono text-[10px] tracking-widest text-[#667783] uppercase block mb-2 font-bold">
                      COMMAND ROLE
                    </span>
                    <ul className="space-y-1.5 text-xs font-manrope font-semibold text-[#071A2B]">
                      {selected.roles.map((r, idx) => (
                        <li key={idx} className="leading-snug">
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <hr className="border-t border-slate-100" />

                  {/* Headquarters */}
                  <div>
                    <span className="font-mono text-[10px] tracking-widest text-[#667783] uppercase block mb-2 font-bold">
                      HEADQUARTERS
                    </span>
                    <p className="text-xs font-manrope text-[#071A2B] font-light leading-relaxed">
                      {selected.address}
                    </p>
                  </div>

                  {/* Phone & Email Boxes */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-[9px] font-mono text-[#667783] uppercase block mb-0.5 font-bold">PHONE</span>
                      <a href={`tel:${selected.phone}`} className="text-xs font-bold text-[#071A2B] hover:text-[#176B87] block truncate">
                        {selected.phone}
                      </a>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-[9px] font-mono text-[#667783] uppercase block mb-0.5 font-bold">EMAIL</span>
                      <a href={`mailto:${selected.email}`} className="text-xs font-bold text-[#176B87] hover:underline block truncate">
                        {selected.email}
                      </a>
                    </div>
                  </div>

                  {/* Bottom Blue Highlight Badge */}
                  <div className="p-3.5 bg-sky-50 rounded-xl border border-sky-100 flex items-center gap-2.5 text-xs font-mono font-semibold text-[#176B87]">
                    <Compass className="w-4 h-4 shrink-0" />
                    <span className="truncate">{selected.licenseBadge}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
