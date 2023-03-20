import { useState } from 'react';
import {
    collection,
    doc,
    DocumentData,
    getDoc,
    getDocs,
    limit,
    query,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const useSights = () => {
    const [sights, setSights] = useState<Array<object>>([]);
    const [sightsDetail, setSightsDetail] = useState<DocumentData>()
    const getSights = async () => {
        const touSliderData: Array<object> | ((prevState: never[]) => never[]) = []
        const getFireStore = query(collection(db, "sights"), limit(4))
        const querySnapshot = await getDocs(getFireStore);
        querySnapshot.forEach((doc: DocumentData) => touSliderData.push({ tid: doc.id, ...doc.data() }));
        setSights(touSliderData);
    }

    const getSightsDetail = async (id: string) => {
        const docRef = doc(db, "sights", id);
        const res = await getDoc(docRef);
        if (res.exists()) {
            setSightsDetail(res.data());
        }
    };

    return {
        sights,
        getSights,
        getSightsDetail,
        sightsDetail,
    };
};

export default useSights;