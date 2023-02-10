import React, { useState } from "react";
import scss from './Input.module.scss'

interface Iname {
    name:string, 
    changeStatus: any,
    statusEl:boolean,
    myKey : string | number;
    inputName: string;
    value?: string | string[]
}
const InputD: React.FC<Iname> = ({name , inputName,  changeStatus ,myKey,statusEl, value}) => {
    

    const [index,setIndex] = useState(false)

    const click = () => {
        changeStatus(myKey)
        setIndex(statusEl)
    }

    return(
        <label className={scss.label}>
            <div className={scss.input}>
                <div className={value === myKey.toString() || (!value && myKey === 1) ? scss.inputB : scss.inputW}></div>
            </div>
            <input className={'hide'} type={"radio"} name={inputName} value={myKey} />
            <span className={scss.span}>{name}</span>

        </label>
    )
}


export default InputD