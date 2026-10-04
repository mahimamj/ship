export interface CommandHub {
  id: "mumbai" | "dubai" | "colombo" | "turkey";
  city: string;
  country: string;
  pillLabel: string;
  commandTitle: string;
  role: string;
  description: string;
  operations: string[];
  latitude: number;
  longitude: number;
  coordLabel: string;
  destinationRoutes: {
    name: string;
    longitude: number;
    latitude: number;
    label: string;
  }[];
}

export const COMMAND_HUBS: CommandHub[] = [
  {
    id: "mumbai",
    city: "MUMBAI",
    country: "INDIA",
    pillLabel: "MUMBAI // INDIA",
    commandTitle: "SOUTH ASIA COMMAND HUB",
    role: "South Asia Command Hub",
    description:
      "Our Mumbai command centre coordinates maritime operations across South Asia and surrounding shipping corridors.",
    operations: ["Crew Management", "Vessel Support", "Maritime Coordination"],
    latitude: 19.076,
    longitude: 72.8777,
    coordLabel: "LAT 19°04'N // LON 72°52'E",
    destinationRoutes: [
      { name: "South Asia", longitude: 78.0, latitude: 12.0, label: "SOUTH ASIA" },
    ],
  },
  {
    id: "dubai",
    city: "DUBAI",
    country: "UAE",
    pillLabel: "DUBAI // UAE",
    commandTitle: "MIDDLE EAST COMMAND HUB",
    role: "Middle East Command Hub",
    description:
      "Coordinating operations across the Gulf, Middle East and surrounding maritime markets.",
    operations: ["Fleet Superintendency", "Drydock Management", "Commercial Chartering"],
    latitude: 25.2048,
    longitude: 55.2708,
    coordLabel: "LAT 25°12'N // LON 55°16'E",
    destinationRoutes: [
      { name: "East Africa", longitude: 40.0, latitude: -5.0, label: "EAST AFRICA" },
    ],
  },
  {
    id: "colombo",
    city: "COLOMBO",
    country: "SRI LANKA",
    pillLabel: "COLOMBO // SRI LANKA",
    commandTitle: "INDIAN OCEAN COMMAND HUB",
    role: "Indian Ocean Command Hub",
    description:
      "Strategically positioned for Indian Ocean shipping and regional maritime operations.",
    operations: ["Port Agency Dispatch", "Husbandry & Spares", "Launch Operations"],
    latitude: 6.9271,
    longitude: 79.8612,
    coordLabel: "LAT 06°55'N // LON 79°51'E",
    destinationRoutes: [
      { name: "Southeast Asia", longitude: 103.8, latitude: 1.35, label: "SOUTHEAST ASIA" },
    ],
  },
  {
    id: "turkey",
    city: "ISTANBUL",
    country: "TURKEY",
    pillLabel: "ISTANBUL // TURKEY",
    commandTitle: "EUROPE & MEDITERRANEAN COMMAND HUB",
    role: "Europe & Mediterranean Command Hub",
    description:
      "Connecting European, Mediterranean and Black Sea maritime operations.",
    operations: ["Bosphorus Transit Agency", "Mediterranean Logistics", "Eurasia Technical Support"],
    latitude: 41.0082,
    longitude: 28.9784,
    coordLabel: "LAT 41°00'N // LON 28°57'E",
    destinationRoutes: [
      { name: "Europe", longitude: 15.0, latitude: 50.0, label: "EUROPE" },
      { name: "Mediterranean", longitude: 18.0, latitude: 35.0, label: "MEDITERRANEAN" },
    ],
  },
];
