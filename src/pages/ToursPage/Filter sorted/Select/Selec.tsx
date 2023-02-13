import React, { useEffect, useState } from "react";
import scss from './select.module.scss';
import Option from "../Option/Option";

interface Tours{
    name:string
    option:any[]
    valueIndex : number
    status : boolean
    id:number;
    change: (id:number) => void
}

const Select : React.FC<Tours> = ({name,option,id,valueIndex,status,change}) => {

    


    const click = ():void => {
        change(id)
    }

    return (
        <div>
            <div onClick = {click} className={scss.select}>
                <span className={scss.span}>{name}</span>
                <div className={status ? scss.arrowUp : scss.arrowDown}></div>
            </div>
            {
            status && (
            <Option valueIndex={valueIndex}  value={option} />

            )}
        </div>
    )
}

export default Select