import React, {  useState } from "react";
import scss from './Select.module.scss';
import Option from "../Option/Option";

interface Tours{
    name:string
    option:any[]
    valueIndex : number
    status : boolean
    id:number;
    select:boolean
}

const Select : React.FC<Tours> = ({name,option,valueIndex,select}) => {

    const [arrow,setArrow] = useState(false)

    const click = ():void => {
        setArrow(!arrow)
    }

    return (
        <div>
            <div onClick = {click} className={scss.select}>
                <span className={scss.span}>{name}</span>
                <div className={scss.arrowDown}></div>
            </div>
            {
            arrow && (
            <Option valueIndex={valueIndex}  select={select} value={option} />

            )}
        </div>
    )
}

export default Select