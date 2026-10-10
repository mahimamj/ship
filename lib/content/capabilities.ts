export interface Capability {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  vesselTypes?: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    id: "technical",
    number: "01",
    title: "TECHNICAL MANAGEMENT",
    description: "Class-1 engineer led planned maintenance, drydock supervision, hull condition audits, and emergency technical dispatch.",
    image: "/images/capabilities/1.webp",
  },
  {
    id: "crew-diversity",
    number: "02",
    title: "ALL-VESSEL CREW MANAGEMENT",
    description: "RPSL licensed crewing across Oil & Chemical Tankers, Container Ships, Bulk Carriers, Gas Carriers, RoRo & Offshore DP vessels with 100% fair recruitment.",
    image: "/images/capabilities/2.webp",
    vesselTypes: ["Tankers", "Containers", "Bulkers", "Gas Carriers", "Ro-Ro", "Offshore"],
  },
  {
    id: "vessel-ops",
    number: "03",
    title: "VESSEL OPERATIONS & DISPATCH",
    description: "24/7 voyage monitoring, bunkering optimization, port call coordination, and laytime management tailored for all vessel classes.",
    image: "/images/capabilities/3.webp",
  },
  {
    id: "chartering",
    number: "04",
    title: "CHARTERING & FLEET FIXTURES",
    description: "Spot market fixtures and long-term time-charters for tankers, dry bulk, container fleets, and specialized offshore DP vessels.",
    image: "/images/capabilities/4.webp",
  },
  {
    id: "fairness-welfare",
    number: "05",
    title: "FAIRNESS & SEAFARER WELFARE",
    description: "Equal opportunity hiring, preference-based vessel assignment, structured rotation cycles, and authentic Indian cuisine onboard for seafarer morale.",
    image: "/images/capabilities/5.webp",
  },
  {
    id: "compliance",
    number: "06",
    title: "COMPLIANCE & SAFETY",
    description: "ISM, ISPS, SOLAS, DG Shipping RPSL-MUM-506, and international flag state adherence with zero compromise.",
    image: "/images/capabilities/6.webp",
  },
  {
    id: "fleet-opt",
    number: "07",
    title: "FLEET OPTIMIZATION & CII",
    description: "Fuel efficiency monitoring, hull fouling analytics, carbon intensity reduction, and AI weather passage routing.",
    image: "/images/capabilities/7.webp",
  },
];
