import { Button } from "@/components/ui/button";
import { PermitStatus } from "@/types/permits";

interface PermitFiltersProps {
  activeFilter: PermitStatus | 'all';
  onFilterChange: (filter: PermitStatus | 'all') => void;
}

const PermitFilters = ({ activeFilter, onFilterChange }: PermitFiltersProps) => {
  const filters: Array<{ value: PermitStatus | 'all'; label: string }> = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'expiring', label: 'Expiring' },
    { value: 'expired', label: 'Expired' },
    { value: 'pending', label: 'Pending' },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={activeFilter === filter.value ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default PermitFilters;