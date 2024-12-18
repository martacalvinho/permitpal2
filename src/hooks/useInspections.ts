import { useState, useEffect } from 'react';
import { RestaurantInspection, fetchRestaurantInspections } from '@/lib/api/inspections';

export function useInspections(zipCode?: string, radius?: number) {
  const [inspections, setInspections] = useState<RestaurantInspection[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadInspections = async () => {
      setLoading(true);
      try {
        const results = await fetchRestaurantInspections(zipCode, radius);
        setInspections(results);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch inspections');
      } finally {
        setLoading(false);
      }
    };

    loadInspections();
  }, [zipCode, radius]);

  return { inspections, loading, error };
}