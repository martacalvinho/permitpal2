import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks } from "lucide-react";
import { SetupProvider } from "./SetupContext";
import SetupContent from "./SetupContent";

const GuidedSetup = () => {
  return (
    <SetupProvider>
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center gap-2">
            <ListChecks className="h-6 w-6" />
            <CardTitle>Guided Setup</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <SetupContent />
        </CardContent>
      </Card>
    </SetupProvider>
  );
};

export default GuidedSetup;