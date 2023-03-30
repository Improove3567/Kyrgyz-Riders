import { useState } from "react";
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
  const [sightsDetail, setSightsDetail] = useState<DocumentData>();
  const [isLoading, setLoading] = useState(true);
  const [len, setLen] = useState<Array<object>>([]);

  const getSights = async (lmt?: number | any) => {
    const touSliderData: Array<object> | ((prevState: never[]) => never[]) = [];
    const getFireStore = query(collection(db, "sights"), lmt && limit(lmt));

    const querySnapshot = await getDocs(getFireStore);
    querySnapshot.forEach((doc: DocumentData) =>
      touSliderData.push({ tid: doc.id, ...doc.data() })
    );
    const tourData: Array<object> | ((prevState: never[]) => never[]) = [];
    const getStore = query(collection(db, "sights"));
    const querySnap = await getDocs(getStore);
    querySnap.forEach((doc: DocumentData) =>
      tourData.push({ tid: doc.id, ...doc.data() })
    );
    setLen(tourData);
    setSights(touSliderData);
    setLoading(false);
  };

  const getSightsDetail = async (id: string) => {
    const docRef = doc(db, "sights", id);
    const res = await getDoc(docRef);
    setLoading(false);
    if (res.exists()) {
      setSightsDetail(res.data());
    }
  };

  return {
    sights,
    getSights,
    getSightsDetail,
    sightsDetail,
    isLoading,
    setSights,
    len,
  };
};

export default useSights;
