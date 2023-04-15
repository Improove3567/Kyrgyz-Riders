import React, { useEffect, useMemo, useState } from "react";
import Filter from "../Filter sorted/Filter/Filter";
import TourFilterCard from "../../../components/TourFilterCard/TourFilterCard";
import scss from './FilterCardBlock.module.scss'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import { useRouter } from "next/router";
import useTours from "../../../hooks/useTours";

interface Select {
    index: number
}

const FilterToursCardBlock: React.FC<Select> = ({ index }) => {
    const [data, setData] = useState<Array<Object>>([])
    const router = useRouter();
    const { getTours, tours } = useTours();
    const { tour, duration, places, activities, startFrom }: any = router.query;

    useEffect(() => {
        if (!tour && !places && !activities && !startFrom) {
            setData(tours)
        }
    }, [tours])

    const newFilter = async ({ places, startFrom, duration, activities }: any) => {
        const arr = []
        if (tour) {
            arr.push(where("tourInfo.category", "==", tour))
        }
        if (places) {
            const p = places.split(',')
            arr.push(where("tourInfo.itinerary", "array-contains-any", p))
        }
        if (startFrom) {
            arr.push(where("tourInfo.startFrom", "==", startFrom))
        }
        if (duration) {
            arr.push(where("tourInfo.duration.days", "==", duration))
        }
        if (activities && !places) {
            const activitiesArr = activities.split(',')
            arr.push(where("tourInfo.activities", "array-contains-any", activitiesArr))
        }

        const q = query(collection(db, "tours"), ...arr)
        const data: { tid: string; }[] = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let obj: any = {
                tid: doc.id,
                ...doc.data(),
            };
            data.push(obj);
        });
        setData(data);

        if (activities && places) {
            const newArr = [...arr]
            newArr.shift()
            const activitiesArr = activities.split(',')
            newArr.push(where("tourInfo.activities", "array-contains-any", activitiesArr))
            const q = query(collection(db, "tours"), ...newArr)
            const data: { tid: string; }[] = []
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                let obj: any = {
                    tid: doc.id,
                    ...doc.data(),
                };
                data.push(obj);
            });
            setData(data);

        }
    }

    useMemo(() => {
        newFilter({ places, startFrom, duration, activities })
        getTours();
    }, [duration, tour, places, activities, startFrom])

    return (
        <div className={scss.container}>
            <Filter value={index} />
            <TourFilterCard data={data} />
        </div>
    )
}

export default FilterToursCardBlock