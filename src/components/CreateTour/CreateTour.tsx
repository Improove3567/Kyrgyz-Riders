import React from "react";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import scss from "./CreateTour.module.scss"
import ProgressStep from "./ProgressStep/ProgressStep";

interface CrateTourProps {
    children: React.ReactElement;
}

const CreateTour: React.FC<CrateTourProps> = ({ children }) => {
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
                    {children}
                </div>
            </form>
        </div>
    );
};

export default CreateTour;
