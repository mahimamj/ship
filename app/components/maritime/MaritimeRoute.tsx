"use client";

import React from "react";

interface MaritimeRouteProps {
  id: string;
  d: string;
  isHighlighted: boolean;
  isDimmed: boolean;
  particleDelay?: number;
}

export const MaritimeRoute: React.FC<MaritimeRouteProps> = ({
  id,
  d,
  isHighlighted,
  isDimmed,
  particleDelay = 0,
}) => {
  return (
    <g className="transition-opacity duration-500" style={{ opacity: isDimmed ? 0.25 : 1 }}>
      {/* Background Subtle Glow Line */}
      <path
        d={d}
        fill="none"
        stroke={isHighlighted ? "#00D9FF" : "#0077FF"}
        strokeWidth={isHighlighted ? 2.5 : 1.5}
        strokeOpacity={isHighlighted ? 0.6 : 0.25}
        className="transition-all duration-300"
      />

      {/* Dashed Route Line */}
      <path
        id={id}
        d={d}
        fill="none"
        stroke={isHighlighted ? "#00D9FF" : "#0077FF"}
        strokeWidth={isHighlighted ? 2 : 1.2}
        strokeDasharray="4 6"
        strokeOpacity={isHighlighted ? 0.95 : 0.55}
        className="transition-all duration-300"
      />

      {/* Animated Moving Particle / Dot */}
      <circle r={isHighlighted ? 3 : 2} fill={isHighlighted ? "#00D9FF" : "#0077FF"}>
        <animateMotion
          path={d}
          dur="6s"
          repeatCount="indefinite"
          begin={`${particleDelay}s`}
          rotate="auto"
        />
      </circle>
    </g>
  );
};
