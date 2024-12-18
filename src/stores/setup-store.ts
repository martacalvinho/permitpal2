import { atom, useAtom } from 'jotai';

const progressAtom = atom(0);

export function useSetupStore() {
  const [progress, setProgress] = useAtom(progressAtom);

  const updateProgress = (newProgress: number) => {
    setProgress(newProgress);
  };

  return {
    progress,
    updateProgress,
  };
}