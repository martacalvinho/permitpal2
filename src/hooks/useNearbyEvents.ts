import { useState, useEffect } from 'react';
import { NYCEvent, fetchNearbyEvents } from '@/lib/api/events';

export function useNearbyEvents(latitude: number, longitude: number, radius: number) {
  const [events, setEvents] = useState<NYCEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);
      try {
        const nearbyEvents = await fetchNearbyEvents(latitude, longitude, radius);
        setEvents(nearbyEvents);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch events');
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, [latitude, longitude, radius]);

  return { events, loading, error };
}