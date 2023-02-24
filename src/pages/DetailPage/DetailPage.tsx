import React from 'react';
import Header from '../../components/Header/Header';
import YourTours from '../../components/yourTour/YourTours';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/main/Main';
import DetailPageMonica from '../../components/DetailPage/DetailPage';
import OurTeam from '../../components/Our team/OurTeam';
const DetailPage = () => {

    return (
        <>
            <Header isMain={true} />
            <Main/>
            <DetailPageMonica />
            <OurTeam/>
            <YourTours />
            <Footer />
        </>
    );
};

export default DetailPage;