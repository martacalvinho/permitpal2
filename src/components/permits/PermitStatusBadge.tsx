import { cn } from "@/lib/utils";
import { PermitStatus } from "@/types/permits";

interface PermitStatusBadgeProps {
  status: PermitStatus;
}

const PermitStatusBadge = ({ status }: PermitStatusBadgeProps) => {
  const getStatusStyles = (status: PermitStatus) => {
    switch (status) {
      case "active":
        return "bg-success/10 text-success border-success/20";
      case "expiring":
        return "bg-warning/10 text-warning border-warning/20";
      case "expired":
        return "bg-danger/10 text-danger border-danger/20";
      case "pending":
        return "bg-secondary/10 text-secondary border-secondary/20";
      default:
        return "bg-secondary/10 text-secondary border-secondary/20";
    }
  };

  const getStatusText = (status: PermitStatus) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        getStatusStyles(status)
      )}
    >
      {getStatusText(status)}
    </span>
  );
};

export default PermitStatusBadge;