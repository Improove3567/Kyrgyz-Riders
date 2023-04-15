import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [secondCLicker, setClicker] = useState(0);

  function next(e: any) {
    e.preventDefault();
    setClicker(secondCLicker + 1);
    setCurrentStepIndex((i): any => {
      switch (secondCLicker) {
        case 0:
          return i + 1;
        case 1:
          return i + 1;
        case 2:
          return i + 1;
        case 3:
          return i;
        case 4:
          return i;
        case 5:
          return i;
        case 6:
          return i;
        case 7:
          return i + 1;
        case 8:
          return i;
        case 9:
          return i;
      }
    });
  }

  function back(e: any) {
    e.preventDefault();
    if (secondCLicker > 0) {
      setClicker(secondCLicker - 1);
    }
    setCurrentStepIndex((i): any => {
      switch (secondCLicker) {
        case 0:
          return (i = 0);
        case 1:
          return i - 1;
        case 2:
          return i - 1;
        case 3:
          return i - 1;
        case 4:
          return i;
        case 5:
          return i;
        case 6:
          return i;
        case 7:
          return i;
        case 8:
          return i - 1;
        case 9:
          return i;
      }
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
    setClicker(index);
  }
  return {
    currentStepIndex,
    secondCLicker,
    step: steps[secondCLicker],
    goTo,
    next,
    back,
    steps,
    setCurrentStepIndex,
  };
}
