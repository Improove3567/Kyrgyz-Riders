import { useState } from 'react';
import {
    collection,
    DocumentData,
    getDocs,
    query,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const useFeedback = () => {
    const [feedback, setFeedback] = useState<Array<object>>([]);
    const [isLoading, setLoading] = useState(true);

    const getFeedback = async () => {
        const touSliderData: Array<object> | ((prevState: never[]) => never[]) = []
        const getFireStore = query(collection(db, "feedback"))
        const querySnapshot = await getDocs(getFireStore);
        querySnapshot.forEach((doc: DocumentData) => touSliderData.push(doc.data()));
        setFeedback(touSliderData);
        setLoading(false)
    }

    return {
        feedback,
        getFeedback,
        isLoading,
    };
};

export default useFeedback;