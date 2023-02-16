import { useState } from 'react';
import {
    collection,
    DocumentData,
    getDocs,
    query,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const useSights = () => {
    const [sights, setSights] = useState<Array<object>>([]);
    const getSights = async () => {
        const touSliderData: Array<object> | ((prevState: never[]) => never[]) = []
        const getFireStore = query(collection(db, "sights"))
        const querySnapshot = await getDocs(getFireStore);
        querySnapshot.forEach((doc: DocumentData) => touSliderData.push(doc.data()));
        setSights(touSliderData);
        console.log(sights)
    }

    return {
        sights,
        getSights,
    };
};

export default useSights;