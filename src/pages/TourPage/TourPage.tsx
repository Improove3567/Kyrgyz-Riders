import React from 'react';
import ItineraryBlock from '../../components/ItineraryBlock/ItineraryBlock';
import TourAboutText from '../../components/TourAboutText/TourAboutText';
import TourFeatures from '../../components/TourFeatures/TourFeatures';

const TourPage = () => {

    return (
        <>
            <TourAboutText />
            <TourFeatures/>
            <ItineraryBlock/>
        </>
    );
};

export default TourPage;