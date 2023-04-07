import React from "react";
import scss from "./ProgressStep.module.scss"

interface progressStepProps {
  title: string;
}

const ProgressStep: React.FC<progressStepProps> = ({ title }) => {
  return (
    <div className={scss.wrapper}>
      <p>{title}</p>
    </div>
  );
};

export default ProgressStep;
