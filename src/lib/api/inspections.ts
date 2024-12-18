import { API_CONFIG } from "@/config/api";

export interface RestaurantInspection {
  camis: string;
  dba: string;
  boro: string;
  building: string;
  street: string;
  zipcode: string;
  phone: string;
  cuisine_description: string;
  inspection_date: string;
  action: string;
  violation_code: string;
  violation_description: string;
  critical_flag: string;
  score: number;
  grade: string;
  grade_date: string;
  record_date: string;
  inspection_type: string;
  latitude: number;
  longitude: number;
}

export async function fetchRestaurantInspections(
  zipCode?: string,
  radius?: number,
  startDate?: string
): Promise<RestaurantInspection[]> {
  try {
    const url = new URL(API_CONFIG.NYC_OPEN_DATA.ENDPOINTS.RESTAURANT_INSPECTIONS);
    url.searchParams.append("$$app_token", API_CONFIG.NYC_OPEN_DATA.APP_TOKEN);

    // Add query parameters based on provided filters
    if (zipCode) {
      url.searchParams.append("zipcode", zipCode);
    }
    if (startDate) {
      url.searchParams.append("inspection_date", `>=${startDate}`);
    }

    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error('Failed to fetch restaurant inspections');
    }

    const inspections: RestaurantInspection[] = await response.json();
    return inspections;
  } catch (error) {
    console.error('Error fetching restaurant inspections:', error);
    return [];
  }
}

export function analyzeInspectionTrends(inspections: RestaurantInspection[]) {
  const trends = {
    averageScore: 0,
    commonViolations: new Map<string, number>(),
    gradeDistribution: {
      A: 0,
      B: 0,
      C: 0,
      P: 0,
      Z: 0
    }
  };

  // Calculate trends
  inspections.forEach(inspection => {
    // Add to average score
    if (inspection.score) {
      trends.averageScore += inspection.score;
    }

    // Count violations
    if (inspection.violation_code) {
      const count = trends.commonViolations.get(inspection.violation_code) || 0;
      trends.commonViolations.set(inspection.violation_code, count + 1);
    }

    // Count grades
    if (inspection.grade) {
      trends.gradeDistribution[inspection.grade as keyof typeof trends.gradeDistribution]++;
    }
  });

  // Calculate final average
  trends.averageScore = trends.averageScore / inspections.length;

  return trends;
}