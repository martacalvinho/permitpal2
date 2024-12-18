import { SetupStep } from "@/types/setup";

export const setupSteps: SetupStep[] = [
  {
    title: "Essential Permits",
    description: "Start with these fundamental permits required for all NYC cafes",
    items: [
      {
        title: "Food Service Establishment Permit",
        description: "Required for all food service establishments in NYC",
      },
      {
        title: "Food Protection Certificate",
        description: "Required certification for food service establishment supervisors",
      },
      {
        title: "Sales Tax Certificate",
        description: "Required for collecting sales tax",
      },
    ],
  },
  {
    title: "Location & Safety",
    description: "Ensure your location meets all safety and zoning requirements",
    items: [
      {
        title: "Certificate of Occupancy",
        description: "Confirms your space is approved for restaurant use",
      },
      {
        title: "Fire Safety Permit",
        description: "Required for fire safety compliance",
      },
    ],
  },
  {
    title: "Additional Services",
    description: "Optional permits based on your business needs",
    items: [
      {
        title: "Sidewalk Cafe Permit",
        description: "Required for outdoor seating on city sidewalks",
      },
      {
        title: "Music & Entertainment License",
        description: "Required if you plan to have live music or entertainment",
      },
    ],
  },
];