import React from 'react';
import TourAbout from '../../components/TourAbout/TourAboutBlock';
import TourAboutText from '../../components/TourAboutText/TourAboutText';
import TourFeatures from '../../components/TourFeatures/TourFeatures';

const TourPage = () => {

    return (
        <>
            <TourAbout/>
            <TourAboutText />
            <TourFeatures/>
        </>
    );
};

export default TourPage;