import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import YourTours from '../../components/yourTour/YourTours';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/main/Main';
import TeamDetailBlock from '../../components/TeamDetailBlock/TeamDetailBlock';
import OurTeam from '../../components/Our team/OurTeam';
import { ourTeamSlider } from '../../constants/MainSliders';
import useTeam from '../../hooks/useTeam';
import { useRouter } from 'next/router';

const TeamDetailPage = () => {
    const { getTeamDetail, teamDetail }: any = useTeam();

    const router = useRouter();
    const { id }: any = router.query;
  
    useEffect(() => {
      if (id != undefined) {
        getTeamDetail(id);
      }
    }, [id]);
    return (
        <>
            <Header isMain={true} />
            <Main imgPageSliders={ourTeamSlider} teamDetail={teamDetail} />
            <TeamDetailBlock />
            <OurTeam />
            <YourTours />
            <Footer />
        </>
    );
};

export default TeamDetailPage;