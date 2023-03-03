import Main from "../../components/main/Main";
import React from "react";
import BlogMain from "../../components/BlogAndNews/BlogMain";
import Header from "../../components/Header/Header";
import BlogNewsText from "../../components/BlogNewsTextBlock/BlogNewsText";
import YourTours from "../../components/yourTour/YourTours";
import Footer from "../../components/Footer/Footer";
import { blogNewsSlider } from "../../constants/MainSliders";

const BlogPage = () => {
    return (
        <>
            <Header />
            <Main imgPageSliders={blogNewsSlider} />
            <BlogMain />
            <BlogNewsText/>
           <YourTours/>
           <Footer/>
        </>
    );
};

export default BlogPage;
