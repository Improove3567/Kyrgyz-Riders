import React from 'react';
import ItineraryBlock from '../../components/ItineraryBlock/ItineraryBlock';
import PriceDoesntInclude from '../../components/PriceDoesntIncInclude/PriceDoesntInclude';
import TourAboutText from '../../components/TourAboutText/TourAboutText';
import Main from '../../components/main/Main';
import Header from '../../components/Header/Header';
import SendARequest from '../../components/SendARequest/SendArequest.tsx/SendARequest';
import TourFeatures from '../../components/TourFeatures/TourFeatures';
import TourAbout from '../../components/TourAbout/TourAboutBlock';
import PriceIncludes from '../../components/TourPriceIncludes/PriceIncludes';
import Footer from '../../components/Footer/Footer';
import YourTours from '../../components/yourTour/YourTours';
import TourSights from '../../components/TourSights/TourSights';
import { tourSlider } from '../../constants/MainSliders';
import TourMapsBlock from '../../components/TourMapBlock/TourMapBlock';


const TourPage = () => {

    return (
        <>
            <Header />
            <Main imgPageSliders={tourSlider} />
            <TourAbout/>
            <TourAboutText />
            <TourSights/>
            <TourFeatures />
            <ItineraryBlock />
            <TourMapsBlock/>
            <PriceIncludes/>
            <PriceDoesntInclude />
            <SendARequest />
            <YourTours/>
            <Footer/>
        </>
    );
};

export default TourPage;