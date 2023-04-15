import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const useFilter = () => {
    const q = query(collection(db, "tours"),
        where("tourInfo.category", "array-contains", 'Off road'),
        where("requests", "==", 4))


    const citiesRef = collection(db, "tours");

    const q1 = query(citiesRef, where("requests", "==", 4), where("tourInfo.itinerary", 'array-contains', "Ош"));
    const request = async () => {
        const data: { tid: string; }[] = []
        const querySnapshot = await getDocs(q1);
        querySnapshot.forEach((doc) => {
            let obj: any = {
                docId: doc.id,
                ...doc.data(),
            };
            data.push(obj);
        });
8
    }
    return {
        request
    };
};

export default useFilter;
