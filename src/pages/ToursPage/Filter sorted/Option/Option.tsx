import { useRouter } from "next/router";
import { it } from "node:test";
import { parse } from "path";
import React, { useEffect, useMemo, useState } from "react";
import Input from "../Input/Input";
import scss from './Option.module.scss'

interface Input{
    value:any[]
    valueIndex:number
}

const Option: React.FC<Input> = ({value,valueIndex}) => {
    const router = useRouter();
    const [arrayO,setArray] = useState(value);
    const changeStatus = (myKey:number) => {
        const newArrOptions = arrayO.map((item) => {
            if (item.id === myKey){
                return {...item,status:true}
            }else{
                return {...item,status:false}
            
            }
            
        })
        setArray(newArrOptions)
    }

    const newArr = arrayO.map((el) => {
        return <Input myKey={el.id} value={router.query.tour} key={el.id} name={el.name} inputName="tour" changeStatus={changeStatus} statusEl={el.status}/>
    })

    

    return(
        <div className={scss.option}>
            <div onChange={(e:React.FormEvent<HTMLInputElement>):void => {
                router.query.tour = (e.target as HTMLButtonElement).value
                router.push(router)
                
            }}>
                {newArr}
            </div>
        </div>
    )
}

export default Option;