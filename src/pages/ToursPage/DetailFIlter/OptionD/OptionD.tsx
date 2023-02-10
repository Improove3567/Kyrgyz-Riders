import { useRouter } from "next/router";
import { it } from "node:test";
import { parse } from "path";
import React, { useEffect, useMemo, useState } from "react";
import InputD from "../InputD/InputD";
import scss from './OptionD.module.scss'

export interface Option{
    name : string;
    id : number | string;
    status: boolean;
}

const OptionD: React.FC = () => {
    const arrayOptions:Option[]  = [
        {
            name: "Cholpon - Ata",
            id: 1,
            status:true
        },
        {
            name: "Bosteri",
            id: 2,
            status : false
        },
        {
            name: "Ala - Archa",
            id: 3,
            status : false
        },
        {
            name: "San - Tash",
            id: 4,
            status : false
        },
        {
            name: "Akbulung",
            id: 5,
            status : false
        },
        {
            name: "Batken",
            id: 6,
            status : false
        },
        {
            name: "Bokonbay",
            id: 7,
            status : false
        },
        {
            name: "Saimaluu - Tash",
            id: 8,
            status : false
        },
        {
            name: "Kochkor",
            id: 9,
            status : false
        },
        {
            name: "Issik - Kol lake",
            id: 10,
            status : false
        },
        {
            name: "Naryn Town",
            id: 11,
            status : false
        },
        {
            name: "Sary - Chelek lake",
            id: 12,
            status : false
        },
        {
            name: "Osh town",
            id: 13,
            status : false
        },
        {
            name: "Bishkek",
            id: 14,
            status : false
        },
        {
            name: "Tash - Rabat Caravasarai",
            id: 15,
            status : false
        },
        {
            name: "Song - Kol lake",
            id: 16,
            status : false
        },
        {
            name: "Kel - Suu lake",
            id: 17,
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
        return <InputD myKey={el.id} value={router.query.tour} key={el.id} name={el.name} inputName="tour" changeStatus={changeStatus} statusEl={el.status}/>
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

export default OptionD;