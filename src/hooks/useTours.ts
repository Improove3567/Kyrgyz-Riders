import { useState } from 'react';
import {
    collection,
    doc,
    DocumentData,
    getDoc,
    getDocs,
    query,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const useTours = () => {
    const [tours, setTours] = useState<Array<object>>([]);
    const [tourDetail, setTourDetail] = useState<object>();

    const getTours = async () => {
        const touSliderData: Array<object> | ((prevState: never[]) => never[]) = []
        const getFireStore = query(collection(db, "tours"))
        const querySnapshot = await getDocs(getFireStore);
        querySnapshot.forEach((doc: DocumentData) => touSliderData.push({ tid: doc.id, ...doc.data() }));
        setTours(touSliderData);
    }


    const getTourDetail = async (id: string) => {
        const docRef = doc(db, "tours", id);
        const res = await getDoc(docRef);
        if (res.exists()) {
            setTourDetail(res.data());
        }
    };

    return {
        tours,
        getTours,
        getTourDetail,
        tourDetail
    };
};

export default useTours;