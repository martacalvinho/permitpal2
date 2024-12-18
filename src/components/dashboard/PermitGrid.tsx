import { useMemo } from "react";
import { Permit, PermitStatus } from "@/types/permits";
import PermitCard from "@/components/permits/PermitCard";

interface PermitGridProps {
  permits: Permit[];
  activeFilter: PermitStatus | 'all';
}

const PermitGrid = ({ permits, activeFilter }: PermitGridProps) => {
  const filteredPermits = useMemo(() => {
    if (activeFilter === 'all') return permits;
    return permits.filter(permit => permit.status === activeFilter);
  }, [permits, activeFilter]);

  const sortedPermits = useMemo(() => {
    return [...filteredPermits].sort((a, b) => {
      if (a.expirationDate === "N/A") return 1;
      if (b.expirationDate === "N/A") return -1;
      return new Date(a.expirationDate).getTime() - new Date(b.expirationDate).getTime();
    });
  }, [filteredPermits]);

  if (sortedPermits.length === 0) {
    return (
      <div className="rounded-lg border-2 border-dashed p-8 text-center">
        <p className="text-gray-500">No permits found matching the selected filter.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {sortedPermits.map((permit) => (
        <PermitCard key={permit.id} permit={permit} />
      ))}
    </div>
  );
};

export default PermitGrid;