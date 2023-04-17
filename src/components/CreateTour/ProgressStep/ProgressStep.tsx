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
  const isActive = () => {
    if (i == currentStepIndex) {
      return {
        background: "#8389C9",
        color: "white",
      };
    } else {
      return {
        background: "#ccc",
        color: "#6F6F6F",
      };
    }
  };

  return (
    <div style={isActive()} className={scss.wrapper}>
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
