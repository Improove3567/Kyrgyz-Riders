import React from "react";
import scss from "./ProgressStep.module.scss"

interface progressStepProps {
  title: string;
  currentStepIndex: number;
  i: number;
}

const ProgressStep: React.FC<progressStepProps> = ({ title, currentStepIndex, i }) => {

  const isActive = () => {
    if (i == currentStepIndex) {
      return {
        background: "#8389C9",
        color: "white"
      }
    } else {
      return {
        background: "#ccc",
        color: "#6F6F6F"
      }
    }
  }

  return (
    <div style={isActive()} className={scss.wrapper}>
      <div>
      {i == currentStepIndex && <h1>.</h1>}
        <p>{i + 1}.</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ProgressStep;
