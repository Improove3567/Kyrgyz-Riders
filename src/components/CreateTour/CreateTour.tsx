import React from "react";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import scss from "./CreateTour.module.scss"
import ProgressStep from "./ProgressStep/ProgressStep";
import Layout from "./layout/layout";
import GroupSize from "./forms/groupsize/groupsize";

const CreateTour: React.FC = () => {
    const progressData = [" Group size", " Travel dates", " Start/End", " Trip details", " Details"]
    const { step, currentStepIndex, next, back } = useMultiStepForm([<GroupSize key={"firstElem"}/>, <div key={"secondElem"}>hello</div>])

    return (
        <div className={scss.wrapper}>
            <div>
                <div>
                    <div className={scss.progressWrapper}>
                        {progressData.map((el, index) => (
                            <ProgressStep currentStepIndex={currentStepIndex} i={index} title={el} key={index} />
                        ))}
                    </div>
                    <Layout next={next} back={back} >{step}</Layout>
                </div>
            </div>
        </div>
    );
};

export default CreateTour;
