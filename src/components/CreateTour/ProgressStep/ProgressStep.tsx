import React from "react";
import scss from "./ProgressStep.module.scss";

interface progressStepProps {
  title: string;
  currentStepIndex: number;
  i: number;
}

const ProgressStep: React.FC<progressStepProps> = ({
  title,
  currentStepIndex,
  i,
}) => {
  

  return (
    <div className={i == currentStepIndex ? scss.wrapper : scss.active }>
      <div className={scss.main}>
        {i == currentStepIndex && <h1>.</h1>}
        <p className={scss.number}>{i + 1}.</p>
        <p className={scss.title}>{title}</p>
      </div>
      <div className={scss.forAdaptive}>
        <p className={scss.number}>{i + 1}</p>
        <p className={scss.title}>{title}</p>
      </div>
    </div>
  );
};

export default ProgressStep;
