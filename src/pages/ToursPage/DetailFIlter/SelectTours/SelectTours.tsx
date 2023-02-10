import React, { useState } from "react";
import scss from './SelectTours.module.scss';
import OptionD from "../OptionD/OptionD";



const SelectTours : React.FC = () => {


    const [index,setIndex] = useState(false)

    const click = () => {
        setIndex(!index)
    }

    return (
        <div>
            <div onClick = {click} className={scss.select}>
                <span className={scss.span}>Places i want to visit</span>
                <div className={index ? scss.arrowUp : scss.arrowDown}></div>
            </div>
            {index && (
            <OptionD />

            )}
        </div>
    )
}

export default SelectTours