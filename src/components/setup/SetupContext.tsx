import { createContext, useContext, useState, ReactNode } from 'react';
import { SetupStep } from '@/types/setup';

interface SetupContextType {
  currentStep: number;
  progress: number;
  setCurrentStep: (step: number) => void;
  updateProgress: (progress: number) => void;
}

const SetupContext = createContext<SetupContextType | undefined>(undefined);

export function SetupProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const updateProgress = (newProgress: number) => {
    setProgress(newProgress);
  };

  return (
    <SetupContext.Provider
      value={{
        currentStep,
        progress,
        setCurrentStep,
        updateProgress,
      }}
    >
      {children}
    </SetupContext.Provider>
  );
}

export function useSetup() {
  const context = useContext(SetupContext);
  if (context === undefined) {
    throw new Error('useSetup must be used within a SetupProvider');
  }
  return context;
}