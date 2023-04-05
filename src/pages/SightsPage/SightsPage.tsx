import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/main/Main';
import SightsBlock from '../../components/Sights block/SightsBlock';
import YourTours from '../../components/yourTour/YourTours';
import { sightSlider} from '../../constants/MainSliders';
import useSights from '../../hooks/useSights';

const SightsPage = () => {
    return (
        <>
            <Header />
            <Main imgPageSliders={sightSlider} />
            <SightsBlock />
            <YourTours />
            <Footer />
        </>
    );
};

export default SightsPage;