import React from 'react';
import AboutUsText from '../../components/AboutUsText/AboutUsText';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/main/Main';
import OurTeam from '../../components/Our team/OurTeam';
import YourTours from '../../components/yourTour/YourTours';
import { aboutSlider } from '../../constants/MainSliders';

const AboutUsPage = () => {
    return (
        <>
            <Header />
            <Main imgPageSliders={aboutSlider} />
            <AboutUsText />
            <OurTeam />
            <YourTours />
            <Footer />
        </>
    );
};

export default AboutUsPage;