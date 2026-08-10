export interface Capability {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

export const CAPABILITIES: Capability[] = [
  {
    id: "technical",
    number: "01",
    title: "TECHNICAL MANAGEMENT",
    description: "Class-1 engineer led planned maintenance, drydock supervision, and machinery condition audits.",
    image: "/images/dry_dock_engineering.png",
  },
  {
    id: "crew",
    number: "02",
    title: "CREW MANAGEMENT",
    description: "RPSL licensed crewing with MLC 2006 compliance, payroll, training, and global rotations.",
    image: "/images/crew_training.png",
  },
  {
    id: "vessel-ops",
    number: "03",
    title: "VESSEL OPERATIONS",
    description: "24/7 voyage monitoring, bunkering optimization, port call coordination, and laytime management.",
    image: "/images/hero_vessel.png",
  },
  {
    id: "chartering",
    number: "04",
    title: "CHARTERING",
    description: "Spot market fixtures and long-term charter agreements for tankers, bulkers, and containers.",
    image: "/images/hero_vessel.png",
  },
  {
    id: "consultancy",
    number: "05",
    title: "MARINE CONSULTANCY",
    description: "Technical inspections, pre-purchase surveys, casualty investigations, and naval advisory.",
    image: "/images/dry_dock_engineering.png",
  },
  {
    id: "compliance",
    number: "06",
    title: "COMPLIANCE",
    description: "ISM, ISPS, flag state regulations, and international maritime law adherence.",
    image: "/images/crew_training.png",
  },
  {
    id: "fleet-opt",
    number: "07",
    title: "FLEET OPTIMIZATION",
    description: "Fuel efficiency monitoring, hull fouling analytics, and carbon intensity reduction.",
    image: "/images/hero_vessel.png",
  },
];
