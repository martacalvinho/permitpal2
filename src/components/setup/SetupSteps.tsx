import { Button } from "@/components/ui/button";
import { setupSteps } from "@/data/setup";
import { useSetup } from "./SetupContext";
import SetupStepContent from "./SetupStepContent";

const SetupSteps = () => {
  const { currentStep, setCurrentStep, updateProgress } = useSetup();

  const handleNext = () => {
    if (currentStep < setupSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      updateProgress((currentStep + 1) * (100 / setupSteps.length));
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      updateProgress(currentStep * (100 / setupSteps.length));
    }
  };

  return (
    <div className="space-y-6">
      <SetupStepContent step={setupSteps[currentStep]} />
      
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentStep === setupSteps.length - 1}
        >
          {currentStep === setupSteps.length - 1 ? "Complete" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default SetupSteps;