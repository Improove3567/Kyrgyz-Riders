import { useState } from 'react';
import {
    collection,
    DocumentData,
    getDocs,
    query,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const useTeam = () => {
    const [team, setTeam] = useState<Array<object>>([]);
    const getTeam = async () => {
        const touSliderData: Array<object> | ((prevState: never[]) => never[]) = []
        const getFireStore = query(collection(db, "our-team"))
        const querySnapshot = await getDocs(getFireStore);
        querySnapshot.forEach((doc: DocumentData) => touSliderData.push(doc.data()));
        setTeam(touSliderData);
        console.log(team)
    }
    return {
        team,
        getTeam,
    };
};

export default useTeam;