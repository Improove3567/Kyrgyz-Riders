import React from "react";
import scss from "./anything.module.scss";
interface IAnything {
    dispatch: any;
}

const AnythingAdd: React.FC<IAnything> = ({ dispatch }) => {
    return (
        <div className={scss.wrapper}>
            <header>
                <h1>Anything else you'd like to add?</h1>
            </header>
            <textarea placeholder="Hola/" onChange={(e) => dispatch({ type: "anythinAdd", payload: e })} ></textarea>
        </div>
    )
}

export default AnythingAdd;