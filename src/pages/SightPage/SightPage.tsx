import React from 'react';
import Header from '../../components/Header/Header';
import YourTours from '../../components/yourTour/YourTours';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/main/Main';
import DetailPageMonica from '../../components/DetailPage/DetailPage';
import OurTeam from '../../components/Our team/OurTeam';
import { OneSightSlider, ourTeamSlider } from '../../constants/MainSliders';
import SightsPage from '../../components/SightsPage/SightsPage';
const SightPage = () => {

    return (
        <>
            <Header isMain={true} />
            <Main imgPageSliders={OneSightSlider} />
            <SightsPage />
            <YourTours />
            <Footer />
        </>
    );
};

export default SightPage;