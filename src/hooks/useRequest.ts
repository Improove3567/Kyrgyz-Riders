import {
    addDoc,
    collection,
    Timestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const useRequest = () => {
    const addRequest = async (data: object) => {
        const res = await addDoc(collection(db, "requests"), {
            ...data,
            createdAt: Timestamp.fromDate(new Date()),
        });
        return res;
    };

    return {
        addRequest
    };
};

export default useRequest;