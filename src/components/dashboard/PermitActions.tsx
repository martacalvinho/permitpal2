import DocumentUpload from "@/components/upload/DocumentUpload";
import PermitFilters from "./PermitFilters";
import { PermitStatus } from "@/types/permits";

interface PermitActionsProps {
  activeFilter: PermitStatus | 'all';
  onFilterChange: (filter: PermitStatus | 'all') => void;
}

const PermitActions = ({ activeFilter, onFilterChange }: PermitActionsProps) => {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <PermitFilters activeFilter={activeFilter} onFilterChange={onFilterChange} />
      <DocumentUpload />
    </div>
  );
};

export default PermitActions;