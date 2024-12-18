import { Card } from "@/components/ui/card";
import { SetupStep } from "@/types/setup";

interface SetupStepContentProps {
  step: SetupStep;
}

const SetupStepContent = ({ step }: SetupStepContentProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{step.title}</h3>
      <p className="text-muted-foreground">{step.description}</p>
      
      <div className="grid gap-4">
        {step.items.map((item, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                {index + 1}
              </div>
              <div>
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SetupStepContent;