import { Permit } from "../types/permits";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineProps {
  permits: Permit[];
}

const Timeline = ({ permits }: TimelineProps) => {
  const sortedPermits = [...permits].sort(
    (a, b) => new Date(a.nextRenewalDate).getTime() - new Date(b.nextRenewalDate).getTime()
  );

  const upcomingPermits = sortedPermits.filter(
    (permit) => permit.nextRenewalDate !== "N/A"
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Renewals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
          <div className="space-y-6">
            {upcomingPermits.map((permit) => (
              <div key={permit.id} className="relative pl-10">
                <div className="absolute left-2 top-2 h-4 w-4 rounded-full bg-primary"></div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">{permit.name}</h3>
                  <p className="text-sm text-gray-500">
                    Due: {new Date(permit.nextRenewalDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Timeline;