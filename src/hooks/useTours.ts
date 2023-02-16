import { useState } from 'react';
import {
    collection,
    DocumentData,
    getDocs,
    query,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const useTours = () => {
    const [tours, setTours] = useState<Array<object>>([]);
    const getTours = async () => {
        const touSliderData: Array<object> | ((prevState: never[]) => never[]) = []
        const getFireStore = query(collection(db, "tours"))
        const querySnapshot = await getDocs(getFireStore);
        querySnapshot.forEach((doc: DocumentData) => touSliderData.push(doc.data()));
        setTours(touSliderData);
    }
    return {
        tours,
        getTours,
    };
};

export default useTours;