"use client";

import React from "react";
import { COMMAND_HUBS, CommandHub } from "@/app/data/commandHubs";
import { Compass } from "lucide-react";

interface HubSelectorProps {
  activeHubId: CommandHub["id"];
  onSelectHub: (hubId: CommandHub["id"]) => void;
}

export const HubSelector: React.FC<HubSelectorProps> = ({ activeHubId, onSelectHub }) => {
  return (
    <div className="w-full flex items-center justify-center overflow-x-auto no-scrollbar py-2 px-1">
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {COMMAND_HUBS.map((hub) => {
          const isActive = activeHubId === hub.id;
          return (
            <button
              key={hub.id}
              onClick={() => onSelectHub(hub.id)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2 shrink-0 border ${
                isActive
                  ? "bg-[#071A2B] text-white border-[#071A2B] font-bold shadow-lg"
                  : "bg-white/90 text-[#071A2B] border-[#8B94A3]/30 hover:border-[#071A2B] hover:bg-white"
              }`}
            >
              <Compass
                className={`w-3.5 h-3.5 transition-colors ${
                  isActive ? "text-[#00D9FF] animate-spin-slow" : "text-[#0077FF]"
                }`}
              />
              <span>{hub.pillLabel}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
