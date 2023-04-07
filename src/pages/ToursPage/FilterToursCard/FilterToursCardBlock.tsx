import React, { useEffect, useMemo, useState } from "react";
import Filter from "../Filter sorted/Filter/Filter";
import TourFilterCard from "../../../components/TourFilterCard/TourFilterCard";
import scss from './FilterCardBlock.module.scss'
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";

interface Select {
    index: number
}

const FilterToursCardBlock: React.FC<Select> = ({ index }) => {
    const [tour, setTour] = useState('');
    const [duration, setDuration] = useState('');
    const [data, setData] = useState<Array<Object>>([])

    const q = query(collection(db, "tours"),
        where("tourInfo.category", "==", tour),
        where("tourInfo.duration.days", "==", duration),
    )

    const filtering = async () => {
        const data: { tid: string; }[] = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let obj: any = {
                docId: doc.id,
                ...doc.data(),
            };
            data.push(obj);
        });
        setData(data)
    }

    useMemo(() => {
        // console.log(tour, duration)
        filtering()
    }, [duration, tour])

    // useEffect(() => {
    //     test()
    // }, [])

    // const test = async () => {
    //     // const q = query(collection(db, "tours"), orderBy("subtitle"), where("tourInfo.category", "==", "Off-road"));
    //     const q = query(collection(db, "tours"), orderBy("subtitle"));
    //     const data: { tid: string; }[] = []
    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //         let obj: any = {
    //             docId: doc.id,
    //             ...doc.data(),
    //         };
    //         data.push(obj);
    //     });
    //     console.log(data)
    // }

    return (
        <div className={scss.container}>
            <Filter value={index} setTour={setTour} setDuration={setDuration} />
            <TourFilterCard data={data} />
        </div>
    )
}

export default FilterToursCardBlock