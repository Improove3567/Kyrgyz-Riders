import React, { useMemo } from "react";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import scss from "./CreateTour.module.scss"
import ProgressStep from "./ProgressStep/ProgressStep";
import GroupSize from "./subcomponents/GroupSize";

const CreateTour: React.FC = () => {
    const progressData = ["Group size", "Travel dates", "Start/End", "Trip details", "Details"]
    const { steps, currentStepIndex } = useMultiStepForm([])
    return (
        <div className={scss.wrapper}>
            <form>
                <div>
                    <div className={scss.progressWrapper}>
                        {progressData.map((el) => (
                            <ProgressStep title={el} />
                        ))}
                    </div>
                    <GroupSize />
                </div>
            </form>
        </div>
    );
};

export default CreateTour;
