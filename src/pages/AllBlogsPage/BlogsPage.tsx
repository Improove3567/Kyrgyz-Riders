import React from 'react';
import BlogMain from '../../components/BlogMain/BlogMain';
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import Main from '../../components/main/Main';
import YourTours from '../../components/yourTour/YourTours';

const BlogsPage = () => {
    return (
        <>
            <Header/>      
            <Main  backgroundClassName='blog'/>  
            <BlogMain/>    
            <YourTours/>
            <Footer/>
        </>
    );
};

export default BlogsPage;