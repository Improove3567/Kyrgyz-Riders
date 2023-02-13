import React from 'react';
import AboutUsText from '../../components/AboutUsText/AboutUsText';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/main/Main';
import OurTeam from '../../components/Our team/OurTeam';
import YourTours from '../../components/yourTour/YourTours';

const AboutUsPage = () => {
    return (
        <>
            <Header />
            <Main backgroundClassName='about' />
            <AboutUsText />
            <OurTeam />
            <YourTours />
            <Footer />
        </>
    );
};

export default AboutUsPage;