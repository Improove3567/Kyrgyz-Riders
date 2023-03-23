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

const useTeam = () => {
    const [team, setTeam] = useState<Array<object>>([]);
    const [teamDetail, setTeamDetail] = useState<object>();
    const getTeam = async () => {
        const touSliderData: Array<object> | ((prevState: never[]) => never[]) = []
        const getFireStore = query(collection(db, "our-team"))
        const querySnapshot = await getDocs(getFireStore);
        querySnapshot.forEach((doc: DocumentData) => touSliderData.push({ tid: doc.id, ...doc.data() }));
        setTeam(touSliderData);
    }

    const getTeamDetail = async (id: string) => {
        const docRef = doc(db, "our-team", id);
        const res = await getDoc(docRef);
        if (res.exists()) {
            setTeamDetail(res.data());
        }
    };
    return {
        team,
        getTeam,
        getTeamDetail,
        teamDetail
    };
};

export default useTeam;