import Main from "../../components/main/Main";
import React from "react";
import BlogMain from "../../components/BlogAndNews/BlogMain";
import Header from "../../components/Header/Header";
import BlogNewsText from "../../components/BlogNewsTextBlock/BlogNewsText";
import Footer from "../../components/Footer/Footer";
import YourTours from "../../components/yourTour/YourTours";

const BlogPage = () => {
    return (
        <>
            <Header />
            <Main backgroundClassName="blog" />
            <BlogMain />
            <BlogNewsText/>
            <YourTours/>
            <Footer/>
        </>
    );
};

export default BlogPage;
