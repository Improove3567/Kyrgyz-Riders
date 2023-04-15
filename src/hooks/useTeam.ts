import { useState } from "react";
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
  const [isLoading, setLoading] = useState(true);

  const getTeam = async () => {
    const touSliderData: Array<object> | ((prevState: never[]) => never[]) = [];
    const getFireStore = query(collection(db, "our-team"));
    const querySnapshot = await getDocs(getFireStore);
    querySnapshot.forEach((doc: DocumentData) =>
      touSliderData.push({ tid: doc.id, ...doc.data() })
    );
    setTeam(touSliderData);
    setLoading(false);
  };

  const getTeamDetail = async (id: string) => {
    const docRef = doc(db, "our-team", id);
    const res = await getDoc(docRef);
    setLoading(false);
    if (res.exists()) {
      setTeamDetail(res.data());
    }
  };
  return {
    team,
    getTeam,
    getTeamDetail,
    teamDetail,
    isLoading,
  };
};

export default useTeam;
