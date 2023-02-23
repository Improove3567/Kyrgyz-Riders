import React from 'react';
import ItineraryBlock from '../../components/ItineraryBlock/ItineraryBlock';
import PriceDoesntInclude from '../../components/PriceDoesntIncInclude/PriceDoesntInclude';
import TourAboutText from '../../components/TourAboutText/TourAboutText';

import Main from '../../components/main/Main';
import Header from '../../components/Header/Header';
import SendARequest from '../../components/SendARequest/SendArequest.tsx/SendARequest';

import TourFeatures from '../../components/TourFeatures/TourFeatures';


const TourPage = () => {

    return (
        <>
            <Header />
            <Main />
            <TourAboutText />
            <TourFeatures />
            <ItineraryBlock />
            <SendARequest />
            <TourFeatures />
            <PriceDoesntInclude />
        </>
    );
};

export default TourPage;