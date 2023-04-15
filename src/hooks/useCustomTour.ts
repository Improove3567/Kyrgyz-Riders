import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const useCustom = () => {
  const addCustomTour = async (data: object) => {
    const res = await addDoc(collection(db, "cusomTours"), {
      ...data,
      createdAt: Timestamp.fromDate(new Date()),
    });
    return res;
  };

  return {
    addCustomTour,
  };
};

export default useCustom;
