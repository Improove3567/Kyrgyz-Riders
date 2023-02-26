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
import TourSlider from '../../components/Tour slider/TourSLider';
import SliderCard from '../../components/Tour slider/SliderCard/SliderCard';
import TourSights from '../../components/TourSights/TourSights';


const TourPage = () => {

    return (
        <>
            <Header />
            <Main />
            <TourAbout/>
            <TourAboutText />
            <TourSights/>
            <TourFeatures />
            <ItineraryBlock />
            <PriceIncludes/>
            <PriceDoesntInclude />
            <SendARequest />
            <YourTours/>
            <Footer/>
        </>
    );
};

export default TourPage;