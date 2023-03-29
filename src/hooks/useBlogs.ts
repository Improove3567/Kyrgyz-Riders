import { useState } from 'react';
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

const useBlogs = () => {
    const [blogs, setBlogs] = useState<Array<object>>([]);
    const [blogDetail, setBlogDetail] = useState<object>();
    const [isLoading, setLoading] = useState(true);

    const getBlogs = async (lmt?:number  |any) => {
        const touSliderData: Array<object> | ((prevState: never[]) => never[]) = []
        const getFireStore = query(collection(db, "blogs"), lmt && limit(lmt))
        const querySnapshot = await getDocs(getFireStore);
        querySnapshot.forEach((doc: DocumentData) => touSliderData.push({ tid: doc.id, ...doc.data() }));
        setBlogs(touSliderData);
        setLoading(false)
    }

    const getBlogsDetail = async (id: string) => {
        const docRef = doc(db, "blogs", id);
        const res = await getDoc(docRef);
        setLoading(false)
        if (res.exists()) {
            setBlogDetail(res.data());
        }
    };
    return {
        blogs,
        getBlogs,
        getBlogsDetail,
        blogDetail,
        isLoading
    };
};

export default useBlogs;