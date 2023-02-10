import React, { useState } from "react";
import scss from './SelectStaticForm.module.scss';




const SelectStaticForm : React.FC = () => {


    const [index,setIndex] = useState(false)

    const click = () => {
        setIndex(!index)
    }

    return (
        <div>
            <div onClick = {click} className={scss.select}>
                <span className={scss.span}>Activities i want to do</span>
                <div className={index ? scss.arrowUp : scss.arrowDown}></div>
            </div>
        </div>
    )
}

export default SelectStaticForm