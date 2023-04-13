import React from "react";
import scss from "./town.module.scss";

interface IProps {
    title: string;
    handleClickEnd: any;
    id: number;
    active: boolean;
    dispatch: any;
}


const TownEnd: React.FC<IProps> = ({ title, handleClickEnd, id, active, dispatch }) => {

    const isCoorect = () => {
        if (active) {
            return scss.wrapper
        } else {
            return scss.wrapperNonActive
        }
    }
    const onSave = () => {
        handleClickEnd(id, "toActive");
        dispatch({ type: "addEnd", payload: Object.values(title).join('') });
    }

    return (
        <div onClick={() => onSave()} className={isCoorect()}>
            <p>{title}</p>
        </div>
    )
}

export default TownEnd;