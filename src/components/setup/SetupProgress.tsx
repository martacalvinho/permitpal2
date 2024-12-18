import { Progress } from "@/components/ui/progress";

interface SetupProgressProps {
  currentStep: number;
  totalSteps: number;
  progress: number;
}

const SetupProgress = ({ currentStep, totalSteps, progress }: SetupProgressProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Setup Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="h-2" />
      <div className="text-sm text-muted-foreground">
        Step {currentStep + 1} of {totalSteps}
      </div>
    </div>
  );
};

export default SetupProgress;