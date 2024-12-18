import { PermitStatus } from "../types/permits";
import { cn } from "@/lib/utils";

interface PermitStatusBadgeProps {
  status: PermitStatus;
}

const PermitStatusBadge = ({ status }: PermitStatusBadgeProps) => {
  const getStatusStyles = (status: PermitStatus) => {
    switch (status) {
      case "active":
        return "bg-success text-success-foreground";
      case "expiring":
        return "bg-warning text-warning-foreground";
      case "expired":
        return "bg-danger text-danger-foreground";
      case "pending":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getStatusText = (status: PermitStatus) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        getStatusStyles(status)
      )}
    >
      {getStatusText(status)}
    </span>
  );
};

export default PermitStatusBadge;