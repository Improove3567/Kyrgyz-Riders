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
  const [len, setLen] = useState<Array<object>>([]);

  const getTravel = async (lmt?: number | any) => {
    const travelData: Array<object> | ((prevState: never[]) => never[]) = [];
    const getFireStore = query(collection(db, "travel"), lmt && limit(lmt));
    const querySnapshot = await getDocs(getFireStore);
    querySnapshot.forEach((doc: DocumentData) =>
      travelData.push({ tid: doc.id, ...doc.data() })
    );
    const tourData: Array<object> | ((prevState: never[]) => never[]) = [];
    const getStore = query(collection(db, "sights"));
    const querySnap = await getDocs(getStore);
    querySnap.forEach((doc: DocumentData) =>
      tourData.push({ tid: doc.id, ...doc.data() })
    );
    setLen(tourData);
    setTravel(travelData);
    setLoading(false);
  };

  return {
    travel,
    getTravel,
    isLoading,
    len,
  };
};

export default useTravel;
