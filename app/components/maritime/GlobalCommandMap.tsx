"use client";

import React, { useMemo } from "react";
import { geoNaturalEarth1, geoPath, geoGraticule } from "d3-geo";
import * as topojson from "topojson-client";
import worldData from "world-atlas/countries-110m.json";
import { COMMAND_HUBS, CommandHub } from "@/app/data/commandHubs";
import { HubMarker } from "./HubMarker";
import { MaritimeRoute } from "./MaritimeRoute";

interface GlobalCommandMapProps {
  activeHubId: CommandHub["id"];
  onSelectHub: (hubId: CommandHub["id"]) => void;
}

export const GlobalCommandMap: React.FC<GlobalCommandMapProps> = ({
  activeHubId,
  onSelectHub,
}) => {
  // SVG Canvas Dimensions
  const width = 960;
  const height = 440;

  // 1. Setup D3 Natural Earth 1 Geographic Projection (Centered to crop out Antarctica)
  const projection = useMemo(() => {
    return geoNaturalEarth1()
      .scale(175)
      .center([25, 18]) // Centered over global trade routes, cropping out Antarctica bottom
      .translate([width / 2, height / 2 - 10]);
  }, [width, height]);

  // SVG Path Generator from D3 Projection
  const pathGenerator = useMemo(() => {
    return geoPath().projection(projection);
  }, [projection]);

  // 2. Extract and precompute Real Country Features from TopoJSON
  const countryPaths: Array<{ id: string | number; d: string }> = useMemo(() => {
    const geojson = topojson.feature(
      worldData as any,
      worldData.objects.countries as any
    ) as any;
    const features = geojson.features || [];
    return features
      .map((feature: any, i: number) => {
        const d = pathGenerator(feature);
        if (!d) return null;
        return {
          id: feature.id || i,
          d,
        };
      })
      .filter((item: any): item is { id: string | number; d: string } => item !== null);
  }, [pathGenerator]);

  // 3. Generate Subtle Latitude / Longitude Graticule Mesh
  const graticulePath = useMemo(() => {
    const graticule = geoGraticule()
      .step([30, 30]);
    return pathGenerator(graticule() as any);
  }, [pathGenerator]);

  // 4. Calculate Projected [x, y] Coordinates for the 4 Command Hubs
  const projectedHubs = useMemo(() => {
    return COMMAND_HUBS.map((hub) => {
      const coords = projection([hub.longitude, hub.latitude]);
      return {
        ...hub,
        x: coords ? coords[0] : 0,
        y: coords ? coords[1] : 0,
      };
    });
  }, [projection]);

  // Map projection helpers for route endpoints
  const getPoint = (lng: number, lat: number) => {
    const pt = projection([lng, lat]);
    return pt ? { x: pt[0], y: pt[1] } : { x: 0, y: 0 };
  };

  // Find projected points for primary hubs
  const istanbulPt = getPoint(28.9784, 41.0082);
  const dubaiPt = getPoint(55.2708, 25.2048);
  const mumbaiPt = getPoint(72.8777, 19.076);
  const colomboPt = getPoint(79.8612, 6.9271);
  const singaporePt = getPoint(103.8198, 1.3521);
  const canadaPt = getPoint(-123.1207, 49.2827);

  // Regional Extension Projected Points
  const europePt = getPoint(15.0, 50.0);
  const medPt = getPoint(18.0, 35.0);
  const eastAfricaPt = getPoint(40.0, -5.0);
  const southAsiaPt = getPoint(78.0, 12.0);
  const seAsiaPt = getPoint(103.8, 1.35);

  // Helper to construct smooth curved quadratic bezier SVG path
  const makeCurvePath = (
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    curvature = 0.15
  ) => {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const cx = (p1.x + p2.x) / 2 - dy * curvature;
    const cy = (p1.y + p2.y) / 2 + dx * curvature;
    return `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  };

  // Curved Route SVG Paths
  const routeIstDxb = makeCurvePath(istanbulPt, dubaiPt, 0.12);
  const routeDxbBom = makeCurvePath(dubaiPt, mumbaiPt, 0.12);
  const routeBomCmb = makeCurvePath(mumbaiPt, colomboPt, 0.12);
  const routeDxbCmb = makeCurvePath(dubaiPt, colomboPt, -0.12);
  const routeCmbSin = makeCurvePath(colomboPt, singaporePt, -0.1);
  const routeSinCan = makeCurvePath(singaporePt, canadaPt, 0.18);

  const extIstEur = makeCurvePath(istanbulPt, europePt, -0.15);
  const extIstMed = makeCurvePath(istanbulPt, medPt, 0.15);
  const extDxbEA = makeCurvePath(dubaiPt, eastAfricaPt, 0.2);
  const extBomSA = makeCurvePath(mumbaiPt, southAsiaPt, -0.15);
  const extCmbSEA = makeCurvePath(colomboPt, seAsiaPt, -0.12);

  // Active Hub status
  const isIstanbulActive = activeHubId === "turkey";
  const isDubaiActive = activeHubId === "dubai";
  const isMumbaiActive = activeHubId === "mumbai";
  const isColomboActive = activeHubId === "colombo";
  const isSingaporeActive = activeHubId === "singapore";
  const isCanadaActive = activeHubId === "canada";

  return (
    <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[420px] bg-[#F8F8F5] border border-[#8B94A3]/30 rounded-xl overflow-hidden shadow-inner select-none font-sans">
      
      {/* Real Geographic SVG Map Canvas */}
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Ocean Background (#F8F8F5) */}
        <rect width={width} height={height} fill="#F8F8F5" />

        {/* Latitude / Longitude Graticule Mesh */}
        {graticulePath && (
          <path
            d={graticulePath}
            fill="none"
            stroke="#8791A0"
            strokeWidth="0.75"
            strokeDasharray="3 3"
            opacity="0.12"
          />
        )}

        {/* Real World Countries Polygon Paths (#E8DDC4 / #8791A0) */}
        <g className="countries-layer">
          {countryPaths.map((country: { id: string | number; d: string }) => (
            <path
              key={country.id}
              d={country.d}
              fill="#E8DDC4"
              stroke="#8791A0"
              strokeWidth="0.7"
              className="transition-colors duration-300 hover:fill-[#DFCFA9]"
            />
          ))}
        </g>

        {/* Curved Maritime Routes Layer */}
        <g className="routes-layer">
          {/* Primary Inter-Hub Routes */}
          <MaritimeRoute
            id="route-ist-dxb"
            d={routeIstDxb}
            isHighlighted={isIstanbulActive || isDubaiActive}
            isDimmed={Boolean(activeHubId && !isIstanbulActive && !isDubaiActive)}
            particleDelay={0}
          />
          <MaritimeRoute
            id="route-dxb-bom"
            d={routeDxbBom}
            isHighlighted={isDubaiActive || isMumbaiActive}
            isDimmed={Boolean(activeHubId && !isDubaiActive && !isMumbaiActive)}
            particleDelay={1.5}
          />
          <MaritimeRoute
            id="route-bom-cmb"
            d={routeBomCmb}
            isHighlighted={isMumbaiActive || isColomboActive}
            isDimmed={Boolean(activeHubId && !isMumbaiActive && !isColomboActive)}
            particleDelay={3.0}
          />
          <MaritimeRoute
            id="route-dxb-cmb"
            d={routeDxbCmb}
            isHighlighted={isDubaiActive || isColomboActive}
            isDimmed={Boolean(activeHubId && !isDubaiActive && !isColomboActive)}
            particleDelay={2.0}
          />

          {/* Regional Extensions */}
          <MaritimeRoute
            id="ext-ist-eur"
            d={extIstEur}
            isHighlighted={isIstanbulActive}
            isDimmed={Boolean(activeHubId && !isIstanbulActive)}
            particleDelay={0.5}
          />
          <MaritimeRoute
            id="ext-ist-med"
            d={extIstMed}
            isHighlighted={isIstanbulActive}
            isDimmed={Boolean(activeHubId && !isIstanbulActive)}
            particleDelay={1.2}
          />
          <MaritimeRoute
            id="ext-dxb-ea"
            d={extDxbEA}
            isHighlighted={isDubaiActive}
            isDimmed={Boolean(activeHubId && !isDubaiActive)}
            particleDelay={2.5}
          />
          <MaritimeRoute
            id="ext-bom-sa"
            d={extBomSA}
            isHighlighted={isMumbaiActive}
            isDimmed={Boolean(activeHubId && !isMumbaiActive)}
            particleDelay={3.5}
          />
          <MaritimeRoute
            id="ext-cmb-sea"
            d={extCmbSEA}
            isHighlighted={isColomboActive || isSingaporeActive}
            isDimmed={Boolean(activeHubId && !isColomboActive && !isSingaporeActive)}
            particleDelay={4.0}
          />
          <MaritimeRoute
            id="route-cmb-sin"
            d={routeCmbSin}
            isHighlighted={isColomboActive || isSingaporeActive}
            isDimmed={Boolean(activeHubId && !isColomboActive && !isSingaporeActive)}
            particleDelay={4.4}
          />
          <MaritimeRoute
            id="route-sin-can"
            d={routeSinCan}
            isHighlighted={isSingaporeActive || isCanadaActive}
            isDimmed={Boolean(activeHubId && !isSingaporeActive && !isCanadaActive)}
            particleDelay={4.8}
          />
        </g>

        {/* Small Regional Destination Nodes */}
        <g className="destination-nodes-layer">
          {[
            { pt: europePt, label: "EUROPE" },
            { pt: medPt, label: "MEDITERRANEAN" },
            { pt: eastAfricaPt, label: "EAST AFRICA" },
            { pt: southAsiaPt, label: "SOUTH ASIA" },
            { pt: seAsiaPt, label: "SOUTHEAST ASIA" },
          ].map((dest, idx) => (
            <g key={idx} transform={`translate(${dest.pt.x}, ${dest.pt.y})`}>
              <circle r="2.5" fill="#0077FF" opacity="0.8" />
              <text
                x="5"
                y="3"
                fill="#687384"
                fontSize="8"
                fontFamily="monospace"
                fontWeight="600"
                letterSpacing="1px"
              >
                {dest.label}
              </text>
            </g>
          ))}
        </g>
      </svg>

      {/* Technical Annotations */}
      <div className="absolute top-2.5 left-3.5 z-10 pointer-events-none font-mono text-[9px] text-[#687384] space-y-0.5">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse" />
          <span className="font-bold text-[#071A2B] tracking-widest uppercase">
            GLOBAL MARITIME NETWORK
          </span>
        </div>
        <div className="tracking-wider">
          {COMMAND_HUBS.find((h) => h.id === activeHubId)?.coordLabel || "NETWORK ACTIVE"}
        </div>
      </div>

      {/* Top Right Chart Badge */}
      <div className="absolute top-2.5 right-3.5 z-10 pointer-events-none font-mono text-[9px] text-[#687384]">
        <span className="px-2 py-0.5 bg-[#071A2B] text-white rounded font-bold uppercase tracking-wider shadow-sm">
          REAL GEOJSON D3 PROJECTION
        </span>
      </div>

      {/* 4 Command Hub Markers */}
      {projectedHubs.map((hub) => (
        <HubMarker
          key={hub.id}
          hub={hub}
          isActive={activeHubId === hub.id}
          onSelect={onSelectHub}
        />
      ))}
    </div>
  );
};
