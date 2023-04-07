import React from "react";
import { useMultiStepForm } from "../../../hooks/useMultiStepForm";
import scss from "./GroupSize.module.scss";
const GroupSize: React.FC = () => {
    const { steps, currentStepIndex } = useMultiStepForm([])
    return (
        <div className={scss.wrapper}>
            <div className={scss.content}></div>
        </div>
    );
};

export default GroupSize;
