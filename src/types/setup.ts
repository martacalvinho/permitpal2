export interface SetupStepItem {
  title: string;
  description: string;
}

export interface SetupStep {
  title: string;
  description: string;
  items: SetupStepItem[];
}