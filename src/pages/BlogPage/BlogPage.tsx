import Main from "../../components/main/Main";
import React from "react";
import BlogMain from "../../components/BlogAndNews/BlogMain";
import Header from "../../components/Header/Header";
import BlogNewsText from "../../components/BlogNewsTextBlock/BlogNewsText";

const BlogPage = () => {
    return (
        <>
            <Header />
            <Main backgroundClassName="blog" />
            <BlogMain />
            <BlogNewsText/>
        </>
    );
};

export default BlogPage;
