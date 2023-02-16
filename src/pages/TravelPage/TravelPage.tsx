import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/main/Main';
import TravelBlock from '../../components/TravelBlock/TravelBlock';
import YourTours from '../../components/yourTour/YourTours';

const TravelPage = () => {
    return (
        <>
            <Header />
            <Main backgroundClassName='travel' />
            <TravelBlock />
            <YourTours />
            <Footer />
        </>
    );
};

export default TravelPage;