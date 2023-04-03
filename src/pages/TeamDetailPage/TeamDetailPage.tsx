import React from 'react';
import Header from '../../components/Header/Header';
import YourTours from '../../components/yourTour/YourTours';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/main/Main';
import TeamDetailBlock from '../../components/TeamDetailBlock/TeamDetailBlock';
import OurTeam from '../../components/Our team/OurTeam';
import { ourTeamSlider } from '../../constants/MainSliders';

const TeamDetailPage = () => {
    return (
        <>
            <Header isMain={true} />
            <Main imgPageSliders={ourTeamSlider} />
            <TeamDetailBlock />
            <OurTeam />
            <YourTours />
            <Footer />
        </>
    );
};

export default TeamDetailPage;