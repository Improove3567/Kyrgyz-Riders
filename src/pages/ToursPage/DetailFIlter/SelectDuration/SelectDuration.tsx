import React, { useState } from "react";
import scss from './SelectDuration.module.scss';




const SelectDuration : React.FC = () => {


    const [index,setIndex] = useState(false)

    const click = () => {
        setIndex(!index)
    }

    return (
        <div>
            <div onClick = {click} className={scss.select}>
                <span className={scss.span}>Duration</span>
                <div className={index ? scss.arrowUp : scss.arrowDown}></div>
            </div>
        </div>
    )
}

export default SelectDuration