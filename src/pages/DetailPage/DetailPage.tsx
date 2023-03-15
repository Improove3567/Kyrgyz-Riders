import React from 'react';
import Header from '../../components/Header/Header';
import YourTours from '../../components/yourTour/YourTours';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/main/Main';
import DetailPageMonica from '../../components/DetailPage/DetailPage';
import OurTeam from '../../components/Our team/OurTeam';
import { ourTeamSlider } from '../../constants/MainSliders';
const DetailPage = () => {

    return (
        <>
            <Header isMain={true} />
            <Main imgPageSliders={ourTeamSlider} />
            <DetailPageMonica />
            <OurTeam />
            <YourTours />
            <Footer />
        </>
    );
};

export default DetailPage;