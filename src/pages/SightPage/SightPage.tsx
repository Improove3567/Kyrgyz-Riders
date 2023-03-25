import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import YourTours from '../../components/yourTour/YourTours';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/main/Main';
import { OneSightSlider } from '../../constants/MainSliders';
import SightsPage from '../../components/SightsPage/SightsPage';
import SightMap from '../../components/SightMap/SightMap';
import PhotoesSlider from '../../components/PhotoesSlider/PhotoesSlider';
import SightTourBlock from '../../components/SightTourBlock/SightTourBlock';
import useSights from '../../hooks/useSights';
import { useRouter } from 'next/router';
const SightPage = () => {
    const router = useRouter()
    const { id }: any = router.query
    const { getSightsDetail, sightsDetail } = useSights();
    useEffect(() => {
        if (id != undefined) {
            getSightsDetail(id)
        }
    }, [id])
    return (
        <>
            <Header isMain={false} />
            <Main imgPageSliders={OneSightSlider} />
            <SightsPage aboutSight={sightsDetail?.aboutSight} />
            <SightTourBlock tours={sightsDetail?.tour} />
            <PhotoesSlider photos={sightsDetail?.photos} />
            <SightMap />
            <YourTours />
            <Footer />
        </>
    );
};

export default SightPage;