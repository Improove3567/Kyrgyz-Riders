import { useState } from 'react';
import {
    collection,
    DocumentData,
    getDocs,
    limit,
    query,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const useSights = () => {
    const [sights, setSights] = useState<Array<object>>([]);
    const getSights = async () => {
        const touSliderData: Array<object> | ((prevState: never[]) => never[]) = []
        const getFireStore = query(collection(db, "sights"), limit(4))
        const querySnapshot = await getDocs(getFireStore);
        querySnapshot.forEach((doc: DocumentData) => touSliderData.push(doc.data()));
        setSights(touSliderData);
    }

    return {
        sights,
        getSights,
    };
};

export default useSights;