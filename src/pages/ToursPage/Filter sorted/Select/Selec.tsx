import React, { useState } from "react";
import scss from './select.module.scss';
import Options from "../Option/Option";



const Select : React.FC = () => {


    const [index,setIndex] = useState(false)

    const click = () => {
        setIndex(!index)
    }

    return (
        <div>
            <div onClick = {click} className={scss.select}>
                <span className={scss.span}>Tours</span>
                <div className={index ? scss.arrowUp : scss.arrowDown}></div>
            </div>
            {index && (
            <Options />

            )}
        </div>
    )
}

export default Select