import React, {  useState,useMemo, useEffect } from "react";
import scss from './Select.module.scss';
import Option from "../Option/Option";
import Image from "next/image";


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

    const result = useMemo( () => {
        return arrow ? <Image src={'assets/images/arrow.svg'} width={10} height={5} alt={"arrow"}/> : <Image src={'assets/images/arrowUp.svg'} width={10} height={5} alt={"arrow"}/>
    },[arrow]);

    const click = ():void => {
        setArrow(!arrow)
    }

    return (
        <div>
            <div onClick = {click} className={scss.select}>
                <span className={scss.span}>{name}</span>
                {result}
            </div>
            {
            arrow && (
            <Option valueIndex={valueIndex}  select={select} value={option} />

            )}
        </div>
    )
}

export default Select