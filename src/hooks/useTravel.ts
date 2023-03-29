import { useState } from "react";
import {
  collection,
  DocumentData,
  getDocs,
  limit,
  query,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const useTravel = () => {
  const [travel, setTravel] = useState<Array<object>>([]);
  const [isLoading, setLoading] = useState(true);

  const getTravel = async (lmt: number) => {
    const travelData: Array<object> | ((prevState: never[]) => never[]) = [];
    const getFireStore = query(collection(db, "travel"), limit(lmt));
    const querySnapshot = await getDocs(getFireStore);
    querySnapshot.forEach((doc: DocumentData) =>
      travelData.push({ tid: doc.id, ...doc.data() })
    );
    setTravel(travelData);
    setLoading(false);
  };

  return {
    travel,
    getTravel,
    isLoading,
  };
};

export default useTravel;
