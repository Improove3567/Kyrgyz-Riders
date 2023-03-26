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

const useBlogs = () => {
    const [blogs, setBlogs] = useState<Array<object>>([]);
    const [blogDetail, setBlogDetail] = useState<object>();
    const getBlogs = async () => {
        const touSliderData: Array<object> | ((prevState: never[]) => never[]) = []
        const getFireStore = query(collection(db, "blogs"))
        const querySnapshot = await getDocs(getFireStore);
        querySnapshot.forEach((doc: DocumentData) => touSliderData.push({ tid: doc.id, ...doc.data() }));
        setBlogs(touSliderData);
    }

    const getBlogsDetail = async (id: string) => {
        const docRef = doc(db, "blogs", id);
        const res = await getDoc(docRef);
        if (res.exists()) {
            setBlogDetail(res.data());
        }
    };
    return {
        blogs,
        getBlogs,
        getBlogsDetail,
        blogDetail
    };
};

export default useBlogs;