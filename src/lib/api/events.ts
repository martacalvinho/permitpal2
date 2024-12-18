import { API_CONFIG } from "@/config/api";

export interface NYCEvent {
  event_id: string;
  event_name: string;
  event_type: string;
  start_date_time: string;
  end_date_time: string;
  location: string;
  borough: string;
  latitude?: number;
  longitude?: number;
}

export async function fetchNearbyEvents(latitude: number, longitude: number, radiusInMiles: number = 1): Promise<NYCEvent[]> {
  try {
    const url = new URL(API_CONFIG.NYC_OPEN_DATA.ENDPOINTS.PERMITTED_EVENTS);
    url.searchParams.append("$$app_token", API_CONFIG.NYC_OPEN_DATA.APP_TOKEN);
    
    // Add spatial query parameters
    // Note: This is a simplified version - you might need to adjust based on the actual API requirements
    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }

    const events: NYCEvent[] = await response.json();
    return filterEventsByDistance(events, latitude, longitude, radiusInMiles);
  } catch (error) {
    console.error('Error fetching nearby events:', error);
    return [];
  }
}

function filterEventsByDistance(
  events: NYCEvent[], 
  centerLat: number, 
  centerLng: number, 
  radiusInMiles: number
): NYCEvent[] {
  // Implementation of distance filtering
  // This would use the Haversine formula to calculate distances
  return events.filter(event => {
    if (!event.latitude || !event.longitude) return false;
    return calculateDistance(
      centerLat, 
      centerLng, 
      event.latitude, 
      event.longitude
    ) <= radiusInMiles;
  });
}

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3963.19; // Earth's radius in miles
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

function toRad(degrees: number): number {
  return degrees * Math.PI / 180;
}