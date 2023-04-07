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
    const submit = (e:React.FormEvent) => {
        e.preventDefault()
    }
    return (
        <div className={scss.wrapper}>
            <form onSubmit={submit}>
                <div>
                    <div className={scss.progressWrapper}>
                        {progressData.map((el, index) => (
                            <ProgressStep title={el} key={index} />
                        ))}
                    </div>
                    {children}
                </div>
            </form>
        </div>
    );
};

export default CreateTour;
