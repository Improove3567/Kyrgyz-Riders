import React, { useMemo } from "react";
import scss from "./seeShow.module.scss";
import SeeShowCards from "./cards/SeeShowCards";
import { SeeShowConsts } from "../../../../constants/SeeShowCT";

interface ISeeShow {
    dispatch: any;
}

const SeeShows: React.FC<ISeeShow> = ({ dispatch }) => {

    const renderCard = useMemo(() => SeeShowConsts.map((el: any, i) => <SeeShowCards indx={i} key={el.tid} {...el} dispatch={dispatch} />), [SeeShowConsts])

    return (
        <div className={scss.wrapper}>
            <header>
                <h1>Which of the shows do you want to watch?</h1>
            </header>
            <main>
                {renderCard}
            </main>
            <div className={scss.purple}></div>
            <div className={scss.ownVersion}>
                <div className={scss.header}>
                    <h1>Your own version</h1>
                </div>
                <textarea onChange={(e) => dispatch({ type: "ownWatchShows", payload: e })}>
                </textarea>
            </div>
        </div>
    )
}

export default SeeShows;
