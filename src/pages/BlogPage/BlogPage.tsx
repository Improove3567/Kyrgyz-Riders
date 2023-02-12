import Main from "../../components/main/Main";
import React from "react";
import BlogMain from "../../components/BlogAndNews/BlogMain";
import Header from "../../components/Header/Header";

const BlogPage = () => {
    return (
        <>
            <Header />
            <Main backgroundClassName="blog" />
            <BlogMain />
        </>
    );
};

export default BlogPage;
