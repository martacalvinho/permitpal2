import { setupSteps } from "@/data/setup";
import SetupProgress from "./SetupProgress";
import SetupSteps from "./SetupSteps";
import { useSetup } from "./SetupContext";

const SetupContent = () => {
  const { currentStep, progress } = useSetup();

  return (
    <>
      <div className="mb-6">
        <SetupProgress
          currentStep={currentStep}
          totalSteps={setupSteps.length}
          progress={progress}
        />
      </div>
      <SetupSteps />
    </>
  );
};

export default SetupContent;