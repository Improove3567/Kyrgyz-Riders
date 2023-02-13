import React, { useEffect, useState } from "react";
import Select from "../Select/Selec";
import css from "./Filter.module.scss";

interface Index{
    value:number
}


interface Option{
    name : string;
    id : number | string;
    status: boolean;
}



const Filter : React.FC<Index> = ({value}) => {

    

    interface ToursSelect{
        name : string;
        option : any[];
        status: boolean;
        id : number;
    }

    const ToursOptions:Option[]  = [
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
    const PlacesIWantOptions:Option[]  = [
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
    const Tours:ToursSelect[] = [
        {
            name : 'Tours',
            option: ToursOptions,
            status : false,
            id:1
        },
        {
            name : 'Duration',
            option: [],
            status : false,
            id: 2

        }

    ]
    const DetailTours: ToursSelect[]= [
        {
            name : 'Places i want to visit',
            option: PlacesIWantOptions,
            status : false,
            id: 1
        },
        {
            name : 'Activities i want to do',
            option: [],
            status : false,
            id: 2
        },
        {
            name : 'Duration',
            option: [],
            status : false,
            id : 3
        },
        {
            name : 'Start form',
            option: [],
            status : false,
            id:4
        },
    ]
    const [status,setStatus] = useState(Tours)
    const [statusD,setStatusD] = useState(DetailTours)

    const statusChangeTours = (id:number):void => {
        const newTours = status.map((el) => {
            if (id === el.id){
                return {...el,status: !el.status}
            }
            return {...el,status:false}
        })
        setStatus(newTours)
    }
    const statusChangeDetailTours = (id:number):any => {
        const newDetailTours = statusD.map((el)=> {
            if (id === el.id){
                return {...el,status: !el.status}
            }
            return {...el,status:false}
        })
        setStatusD(newDetailTours)
    }
    return(
        <div className={css.filter}>
            <div className={value == 1 ? 'hideSelect' : ''}>
                {status.map ((el)=> <Select {...el} valueIndex={value} change={statusChangeTours}/>)}
            </div>
             <div className={value == 0 ? 'hideSelect' : ''}>
               {statusD.map((el) => <Select {...el} valueIndex = {value } change={statusChangeDetailTours}/>)}
            </div>
        </div>
    )
}

export default Filter 