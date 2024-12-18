import { Permit } from "@/types/permits";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PermitStatusBadge from "./PermitStatusBadge";
import PermitInfo from "./PermitInfo";

interface PermitCardProps {
  permit: Permit;
}

const PermitCard = ({ permit }: PermitCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">{permit.name}</CardTitle>
        <PermitStatusBadge status={permit.status} />
      </CardHeader>
      <CardContent>
        <div className="mt-2">
          <PermitInfo permit={permit} />
        </div>
      </CardContent>
    </Card>
  );
};

export default PermitCard;