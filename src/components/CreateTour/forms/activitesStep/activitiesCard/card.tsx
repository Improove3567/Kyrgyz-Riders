import React, { useMemo, useState } from "react";
import scss from "./activitiesCard.module.scss";
import Radio from "../activitesRadio/activitiesRadio";

interface IActivitesCard {
    dispatch: any,
    index: number,
    title: string;
    i: number;
}

const ActivitiesCard: React.FC<IActivitesCard> = ({ dispatch, index, title, i }) => {
    const [isActive, setActive] = useState(false);
    const [isVisit, setVisit] = useState(false);
    const [modalDuration, setDuration] = useState(false);
    const [days, setDays] = useState([
        {
            id: 1,
            title: "1 Day",
            active: false
        },
        {
            id: 2,
            title: "2 Days",
            active: false

        },
        {
            id: 3,
            title: "3 Days",
            active: false

        },
        {
            id: 4,
            title: "4 Days",
            active: false

        },
        {
            id: 5,
            title: "5 Days",
            active: false

        },
        {
            id: 6,
            title: "6 Days",
            active: false

        },
        {
            id: 7,
            title: "7 Days",
            active: false

        }
    ]);

    const updatedActivities = { title: title, visit: isVisit, tid: index, duration: "" }

    const handleClick = (id: any, state: any) => {
        const filtered: any = [...days].find((comment) => comment.id === id);
        if (state === "toActive") {
            const arr = days.map((el) => {
                if (el.id === filtered.id) {
                    return { ...filtered, active: true };
                }
                return { ...el, active: false };
            });
            setDays(arr);

        } else {
            const arr = days.map((el) => {
                if (el.id === filtered.id) {
                    return { ...filtered, active: false };
                }
                return { ...el, active: false };
            });
            setDays(arr);
        }
        dispatch({ type: "updateActivities", payload: { i, updatedActivities } })
    };

    const renderRadio = useMemo(() => days.map((el) => <Radio dispatch={dispatch} i={i} updatedActivities={updatedActivities} id={el.id} title={el.title} active={el.active} key={el.id}
        handleClick={handleClick} />), [days, modalDuration, handleClick])

    const onEdit = () => {
        if (isActive) {
            dispatch({ type: "updateActivities", payload: { i, updatedActivities } })
            setVisit(!isVisit);
        }
    }


    const onSend = () => {
        if (isActive) {
            setActive(false)
            dispatch({ type: "removeActivities", payload: index })
        }
        else {
            dispatch({ type: "addActivities", payload: updatedActivities });
            setActive(true);
            setVisit(false)
        }
    }

    const activeButtons: any = (state: boolean) => {
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

    const openModal = () => {
        setDuration(!modalDuration)
    }

    return (
        <div className={scss.wrapper}>
            <div className={scss.check} onClick={() => onSend()}>
                <div className={isActive ? scss.circleAc : scss.circleNon}></div>
            </div>
            <div className={scss.right}>
                <div className={scss.title} onMouseLeave={() => setDuration(false)}>
                    <p>{title}</p>
                    <h5 onClick={() => openModal()}>Duration</h5>
                    {modalDuration && <div className={scss.modal}>{renderRadio}</div>}
                </div>
                <div className={scss.btns}>
                    {activeButtons(isActive)}
                </div>
            </div>
        </div>
    )
}

export default ActivitiesCard;