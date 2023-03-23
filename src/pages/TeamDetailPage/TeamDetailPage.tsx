import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import YourTours from '../../components/yourTour/YourTours';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/main/Main';
import TeamDetailBlock from '../../components/TeamDetailBlock/TeamDetailBlock';
import OurTeam from '../../components/Our team/OurTeam';
import { ourTeamSlider } from '../../constants/MainSliders';
import { useRouter } from 'next/router';
import useTeam from '../../hooks/useTeam';
const TeamDetailPage = () => {
    const router = useRouter();
    const { id }: any = router.query
    const { getTeamDetail, teamDetail } = useTeam();
    useEffect(() => {
        getTeamDetail(id);
    }, [])
    return (
        <>
            <Header isMain={true} />
            <Main imgPageSliders={ourTeamSlider} />
            <TeamDetailBlock teamDetail={teamDetail} />
            <OurTeam />
            <YourTours />
            <Footer />
        </>
    );
};

export default TeamDetailPage;