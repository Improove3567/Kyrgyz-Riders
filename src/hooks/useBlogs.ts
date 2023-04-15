import { useState } from "react";
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebase-config";

const useBlogs = () => {
  const [blogs, setBlogs] = useState<Array<object>>([]);
  const [blogDetail, setBlogDetail] = useState<object>();
  const [isLoading, setLoading] = useState(true);
  const [len, setLen] = useState<Array<object>>([]);
  const [news, setNews] = useState<Array<object>>([]);

  const getBlogs = async (lmt?: number | any) => {
    const touSliderData: Array<object> | ((prevState: never[]) => never[]) = [];
    const getFireStore = query(collection(db, "blogs"), lmt && limit(lmt));
    const querySnapshot = await getDocs(getFireStore);
    querySnapshot.forEach((doc: DocumentData) =>
      touSliderData.push({ tid: doc.id, ...doc.data() })
    );
    const tourData: Array<object> | ((prevState: never[]) => never[]) = [];
    const getStore = query(collection(db, "blogs"));
    const querySnap = await getDocs(getStore);
    querySnap.forEach((doc: DocumentData) =>
      tourData.push({ tid: doc.id, ...doc.data() })
    );
    const newsData: Array<object> | ((prevState: never[]) => never[]) = [];
    const getNews = query(
      collection(db, "blogs"),
      where("type", "==", "News")
    );
    const q = await getDocs(getNews);
    q.forEach((doc: DocumentData) =>
      newsData.push({ tid: doc.id, ...doc.data() })
    );
    setLen(tourData);
    setBlogs(touSliderData);
    setLoading(false);
    setNews(newsData)
  };

  const getBlogsDetail = async (id: string) => {
    const docRef = doc(db, "blogs", id);
    const res = await getDoc(docRef);
    setLoading(false);
    if (res.exists()) {
      setBlogDetail(res.data());
    }
  };
  return {
    blogs,
    getBlogs,
    getBlogsDetail,
    blogDetail,
    isLoading,
    len,
    setBlogs,
    news
  };
};

export default useBlogs;
