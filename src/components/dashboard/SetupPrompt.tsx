import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

interface SetupPromptProps {
  onStart: () => void;
}

const SetupPrompt = ({ onStart }: SetupPromptProps) => {
  return (
    <Button
      onClick={onStart}
      variant="outline"
      className="w-full py-8 text-lg"
    >
      <PlusCircle className="mr-2 h-5 w-5" />
      Start Guided Setup for New Cafe Owners
    </Button>
  );
};

export default SetupPrompt;