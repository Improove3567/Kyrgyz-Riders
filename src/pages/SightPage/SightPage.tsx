import React from 'react';
import Header from '../../components/Header/Header';
import YourTours from '../../components/yourTour/YourTours';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/main/Main';
import { OneSightSlider, ourTeamSlider } from '../../constants/MainSliders';
import SightsPage from '../../components/SightsPage/SightsPage';
import SightMap from '../../components/SightMap/SightMap';
const SightPage = () => {

    return (
        <>
            <Header isMain={true} />
            <Main imgPageSliders={OneSightSlider} />
            <SightsPage />
            <SightMap/>
            <YourTours />
            <Footer />
        </>
    );
};

export default SightPage;