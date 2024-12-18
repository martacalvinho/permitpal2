import { useState } from "react";
import { PERMITS } from "@/data/permits";
import { PermitStatus } from "@/types/permits";
import PermitGrid from "@/components/dashboard/PermitGrid";
import PermitActions from "@/components/dashboard/PermitActions";
import Timeline from "@/components/permits/Timeline";

const PermitsSection = () => {
  const [activeFilter, setActiveFilter] = useState<PermitStatus | 'all'>('all');

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Permits</h2>
          <p className="text-sm text-gray-500">Manage and track your permits</p>
        </div>
        
        <PermitActions
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        
        <PermitGrid
          permits={PERMITS}
          activeFilter={activeFilter}
        />
      </div>
      <div className="lg:col-span-1">
        <Timeline permits={PERMITS} />
      </div>
    </div>
  );
};

export default PermitsSection;