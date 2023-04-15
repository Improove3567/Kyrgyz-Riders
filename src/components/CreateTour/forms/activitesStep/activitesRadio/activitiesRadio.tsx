import React from "react";
import scss from "./activitiesRadio.module.scss";

interface IRadio {
    title: string,
    active: boolean;
    handleClick: any;
    id: string | number;
    dispatch: any;
    i: number;
    updatedActivities: any;
}

const Radio: React.FC<IRadio> = ({ title, active, handleClick, id, dispatch, i, updatedActivities }) => {

    const onSave = () => {
        handleClick(id, "toActive");
        dispatch({ type: "durationActivities", payload: title })
        dispatch({ type: "updateActivities", payload: { i, updatedActivities } })
    }

    return (
        <div className={scss.wrapper}>
            <div onClick={() => onSave()} className={active ? scss.active : scss.nonAc}></div>
            <p>{title}</p>
        </div>
    )
}

export default Radio;