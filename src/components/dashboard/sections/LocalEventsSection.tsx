import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocalEventsSection = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Nearby Events Map
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Map integration coming soon</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Coming soon: View upcoming events in your neighborhood
              </p>
              <Button className="w-full">
                <Bell className="mr-2 h-4 w-4" />
                Set Up Event Notifications
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Event Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Coming soon: Detailed calendar view of all upcoming events
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocalEventsSection;