import React from 'react';
import PriceDoesntInclude from '../../components/PriceDoesntIncInclude/PriceDoesntInclude';
import TourAboutText from '../../components/TourAboutText/TourAboutText';
import TourFeatures from '../../components/TourFeatures/TourFeatures';

const TourPage = () => {

    return (
        <>
            <TourAboutText />
            <TourFeatures />
            <PriceDoesntInclude />
        </>
    );
};

export default TourPage;