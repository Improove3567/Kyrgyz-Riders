import React, { useReducer } from "react";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import scss from "./CreateTour.module.scss"
import ProgressStep from "./ProgressStep/ProgressStep";
import Layout from "./layout/layout";
import GroupSize from "./forms/groupsize/groupsize";
import GroupData from "./forms/groupdata/GroupData";
import StartEnd from "./forms/start-end/start_end";
import { Reducer, initialState } from "../../hooks/useCreateTour";


const CreateTour: React.FC = () => {
    const progressData = [" Group size", " Travel dates", " Start/End", " Trip details", " Details"]
    const [state, dispatch] = useReducer(Reducer, initialState);
    const { step, currentStepIndex, next, back } = useMultiStepForm([<GroupSize state={state} dispatch={dispatch} key={"firstElem"} />, <GroupData key={"secondElem"}, <StartEnd state={state} dispatch={dispatch} key={"thirthElem"} />])

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
