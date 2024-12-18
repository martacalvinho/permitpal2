import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ListCheck, ArrowRight, CheckCircle } from "lucide-react";
import { PERMITS } from "../data/permits";

const GuidedSetup = () => {
  const [openSection, setOpenSection] = useState<string | null>("essential");

  const sections = [
    {
      id: "essential",
      title: "Essential Permits",
      description: "Start with these fundamental permits",
      permits: PERMITS.slice(0, 5),
    },
    {
      id: "additional",
      title: "Additional Permits",
      description: "Expand your compliance with these permits",
      permits: PERMITS.slice(5),
    },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ListCheck className="h-6 w-6" />
          Guided Setup
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sections.map((section) => (
            <Collapsible
              key={section.id}
              open={openSection === section.id}
              onOpenChange={() =>
                setOpenSection(openSection === section.id ? null : section.id)
              }
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between"
                >
                  <span className="flex items-center gap-2">
                    {openSection === section.id ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <ArrowRight className="h-5 w-5" />
                    )}
                    {section.title}
                  </span>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-4 space-y-4">
                <p className="text-sm text-gray-500">{section.description}</p>
                <div className="space-y-3">
                  {section.permits.map((permit) => (
                    <div
                      key={permit.id}
                      className="rounded-lg border p-4 hover:bg-gray-50"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{permit.name}</h4>
                          <p className="text-sm text-gray-500">
                            {permit.issuingAgency}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(permit.applicationUrl, "_blank")}
                        >
                          Apply Now
                        </Button>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm">{permit.description}</p>
                        <div className="mt-2 text-sm text-gray-500">
                          <span className="font-medium">Cost:</span> {permit.cost} |{" "}
                          <span className="font-medium">Renewal:</span>{" "}
                          {permit.renewalPeriod}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GuidedSetup;