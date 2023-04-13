import React from "react";
import scss from "./town.module.scss";

interface IProps {
    title: string;
    handleClick: any;
    id: number;
    active: boolean;
    dispatch: any;
}

const TownStart: React.FC<IProps> = ({ title, handleClick, id, active, dispatch }) => {

    const isCoorect = () => {
        if (active) {
            return scss.wrapper
        } else {
            return scss.wrapperNonActive
        }
    }

    const onSave = () => {
        handleClick(id, "toActive");
        dispatch({ type: "addStart", payload: Object.values(title).join('') });
    }

    return (
        <div onClick={() => onSave()} className={isCoorect()}>
            <p>{title}</p>
        </div>
    )
}

export default TownStart;