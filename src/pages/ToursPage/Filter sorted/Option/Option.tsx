import { useRouter } from "next/router";
import { it } from "node:test";
import { parse } from "path";
import React, { useEffect, useMemo, useState } from "react";
import Input from "../Input/Input";
import scss from './option.module.scss'

export interface Option{
    name : string;
    id : number | string;
    status: boolean;
}

const Option: React.FC = () => {
    const arrayOptions:Option[]  = [
        {
            name: "All tours",
            id: 1,
            status:true
        },
        {
            name: "Most popular",
            id: 2,
            status : false
        },
        {
            name: "Upcoming",
            id: 3,
            status : false
        },
        {
            name: "Multi-active",
            id: 4,
            status : false
        },
        {
            name: "Horse riding",
            id: 5,
            status : false
        },
        {
            name: "Off-road",
            id: 6,
            status : false
        },
        {
            name: "Road",
            id: 7,
            status : false
        },
        {
            name: "Cultural",
            id: 8,
            status : false
        },
        {
            name: "Treking",
            id: 9,
            status : false
        },
        {
            name: "Winter tours",
            id: 10,
            status : false
        }
    ]
    const router = useRouter();
    const [arrayO,setArray] = useState(arrayOptions);


    

    

    

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
        <div className={scss.options}>
            <div className={scss.option} onChange={(e:React.FormEvent<HTMLInputElement>):void => {
                router.query.tour = (e.target as HTMLButtonElement).value
                router.push(router)
                
            }}>
                {newArr}
            </div>
        </div>
    )
}

export default Option;