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


const TourPage = () => {

    return (
        <>
            <Header />
            <Main />
            <TourAbout/>
            <TourAboutText />
            <PriceIncludes/>
            <ItineraryBlock />
            <SendARequest />
            <TourFeatures />
            <PriceDoesntInclude />
        </>
    );
};

export default TourPage;