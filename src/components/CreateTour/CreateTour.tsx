import React, { useReducer } from "react";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import scss from "./CreateTour.module.scss"
import ProgressStep from "./ProgressStep/ProgressStep";
import Layout from "./layout/layout";
import GroupSize from "./forms/groupsize/groupsize";
import GroupData from "./forms/groupdata/GroupData";
import StartEnd from "./forms/start-end/start_end";
import { Reducer, initialState } from "../../hooks/useCreateTour";

import SightsStep from "./forms/sightsStep/sightsStep";
import ActivitesStep from "./forms/activitesStep/activitesStep";
import DiscribeTripDetails from "./forms/discribeTripDetails/DiscribeTripDetails";
import YourDetails from "./forms/yourDetails/YourDetails";
import DetailsEnd from "./forms/detailsEnd/DetailsEnd";
import AnythingAdd from "./forms/anythingAdd/AnythingAdd";
import SeeShows from "./forms/seeShows/SeeShows";


const CreateTour: React.FC = () => {
    const progressData = [" Group size", " Travel dates", " Start/End", " Trip details", " Details"]
    const [state, dispatch] = useReducer(Reducer, initialState);

    console.log(state);

    const { step, currentStepIndex, next, back, setCurrentStepIndex } = useMultiStepForm([<GroupSize state={state} dispatch={dispatch} key={"firstElem"} />, <GroupData key={"secondElem"} />,
    <StartEnd state={state} dispatch={dispatch} key={"thirthElem"} />,
    <SightsStep key={"heuwheqjehj"} dispatch={dispatch} />,
    <ActivitesStep dispatch={dispatch} />,
    <SeeShows key={"hehehaoheo"} dispatch={dispatch} />,
    <DiscribeTripDetails key={"hheheheheheheh"} dispatch={dispatch} />,
    <AnythingAdd key={"ksdafnl"} />,
    <YourDetails key={"lsdmad"} />,
    <DetailsEnd key={"jsadfkjhalf"} />])

    return (
        <div className={scss.wrapper}>
            <div>
                <div>
                    <div className={scss.progressWrapper}>
                        {progressData.map((el, index) => (
                            <ProgressStep currentStepIndex={currentStepIndex} i={index} title={el} key={index} />
                        ))}
                    </div>
                    <Layout next={next} back={back} currentStepIndex={currentStepIndex} setCurrentStepIndex={setCurrentStepIndex}>{step}</Layout>
                </div>
            </div>
        </div>
    );
};

export default CreateTour;
