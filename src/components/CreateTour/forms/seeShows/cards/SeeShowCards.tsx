import React, { ReactElement, useState } from "react";
import scss from "./seeShowCards.module.scss";
import Link from "next/link";

interface ICard {
    title: string;
    tid: string | number;
    ownVersion?: string;
    dispatch: any;
    indx: number;
}

const SeeShowCards: React.FC<ICard> = ({ title, tid, dispatch, indx }) => {
    const [isActive, setActive] = useState(false);
    const [isVisit, setVisit] = useState(false);

    const onEdit = () => {
        if (isActive) {
            dispatch({ type: "updateWatchShows", payload: { indx, data } })
            setVisit(!isVisit);
        }
    }

    const data = { title: title, visit: isVisit, tid: tid }

    const onSend = () => {
        if (isActive) {
            setActive(false)
            dispatch({ type: "removeWatchShows", payload: tid })
        }
        else {
            dispatch({ type: "addWatchShows", payload: data });
            setActive(true);
            setVisit(false)
        }
    }

    const activeButtons: any | ReactElement = (state: boolean) => {
        if (state) {
            return (
                <>
                    <button onClick={() => onEdit()} className={!isVisit ? scss.niceAc : scss.nice}>
                        Nice to visit
                    </button >
                    <button onClick={() => onEdit()} className={!isVisit ? scss.must : scss.mustAc}>
                        Must visit
                    </button>
                </>
            )

        } else {
            return (
                <>
                    <button className={scss.nice}>Nice to visit</button>
                    <button className={scss.must}>Must visit</button>
                </>
            )
        }
    }



    return (
        <div className={scss.wrapper}>
            <div className={scss.check} onClick={() => onSend()}>
                <div className={isActive ? scss.circleAc : scss.circleNon}></div>
            </div>
            <div className={scss.right}>
                <div className={scss.title}>
                    <p>{title}</p>
                    <Link href={`/`}>Read more about this sight</Link>
                </div>
                <div className={scss.btns}>
                    {activeButtons(isActive)}
                </div>
            </div>
        </div>
    )
}

export default SeeShowCards;