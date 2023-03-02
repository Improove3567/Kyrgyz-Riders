import Main from "../../components/main/Main";
import React from "react";
import BlogMain from "../../components/BlogAndNews/BlogMain";
import Header from "../../components/Header/Header";
import BlogNewsText from "../../components/BlogNewsTextBlock/BlogNewsText";
import YourTours from "../../components/yourTour/YourTours";
import Footer from "../../components/Footer/Footer";
import { BlogsCardArr } from "../../constants/BlogsCard";

const BlogPage = () => {
    return (
        <>
            <Header />
            <Main backgroundClassName="blog" />
            <BlogMain/>
            <BlogNewsText description={BlogsCardArr}/>
           <YourTours/>
           <Footer/>
        </>
    );
};

export default BlogPage;
