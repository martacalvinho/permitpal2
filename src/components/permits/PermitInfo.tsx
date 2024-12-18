import { Permit } from "@/types/permits";
import { CalendarIcon, LinkIcon, AlertCircle } from "lucide-react";
import { format } from "date-fns";

interface PermitInfoProps {
  permit: Permit;
}

const PermitInfo = ({ permit }: PermitInfoProps) => {
  const isExpiringSoon = permit.expirationDate !== "N/A" && 
    new Date(permit.expirationDate) <= new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">{permit.description}</p>
      
      {permit.expirationDate !== "N/A" && (
        <div className={`flex items-center space-x-2 text-sm ${
          isExpiringSoon ? 'text-warning' : 'text-gray-500'
        }`}>
          <CalendarIcon className="h-4 w-4" />
          <span>Expires: {format(new Date(permit.expirationDate), 'MMM d, yyyy')}</span>
          {isExpiringSoon && <AlertCircle className="h-4 w-4 text-warning" />}
        </div>
      )}
      
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <span className="font-medium">Renewal:</span>
        <span>{permit.renewalPeriod}</span>
      </div>
      
      <div className="flex items-center space-x-2 text-sm text-gray-500">
        <span className="font-medium">Cost:</span>
        <span>{permit.cost}</span>
      </div>
      
      <a
        href={permit.applicationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-1 text-sm text-primary hover:underline"
      >
        <LinkIcon className="h-4 w-4" />
        <span>Application Link</span>
      </a>
    </div>
  );
};

export default PermitInfo;