import React from "react";
import scss from "./anything.module.scss";

const AnythingAdd = () => {
    return (
        <div className={scss.wrapper}>
            <header>
                <h1>Anything else you'd like to add?</h1>
            </header>
            <textarea></textarea>
        </div>
    )
}

export default AnythingAdd;