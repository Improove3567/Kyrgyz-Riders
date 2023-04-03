import Main from "../../components/main/Main";
import React, { useEffect } from "react";
import BlogMain from "../../components/BlogAndNews/BlogMain";
import Header from "../../components/Header/Header";
import BlogNewsText from "../../components/BlogNewsTextBlock/BlogNewsText";
import YourTours from "../../components/yourTour/YourTours";
import Footer from "../../components/Footer/Footer";
import { blogNewsSlider } from "../../constants/MainSliders";
import useBlogs from "../../hooks/useBlogs";
import { useRouter } from "next/router";

const BlogPage = () => {
  const { getBlogsDetail, blogDetail } = useBlogs();
  const router = useRouter();
  const { id }: any = router.query

  useEffect(() => {
    if (id) {
      getBlogsDetail(id)
    }
  }, [id])
  return (
    <>
      <Header />
      <Main imgPageSliders={blogNewsSlider} />
      <BlogMain blogDetail={blogDetail} />
      <BlogNewsText blogDetail={blogDetail} />
      <YourTours />
      <Footer />
    </>
  );
};

export default BlogPage;
