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
    const getFeedback = async () => {
        const touSliderData: Array<object> | ((prevState: never[]) => never[]) = []
        const getFireStore = query(collection(db, "feedback"))
        const querySnapshot = await getDocs(getFireStore);
        querySnapshot.forEach((doc: DocumentData) => touSliderData.push(doc.data()));
        setFeedback(touSliderData);
        console.log(feedback)
    }

    return {
        feedback,
        getFeedback,
    };
};

export default useFeedback;