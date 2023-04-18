import React, { useEffect } from "react";
import ItineraryBlock from "../../components/ItineraryBlock/ItineraryBlock";
import PriceDoesntInclude from "../../components/PriceDoesntIncInclude/PriceDoesntInclude";
import TourAboutText from "../../components/TourAboutText/TourAboutText";
import Main from "../../components/main/Main";
import Header from "../../components/Header/Header";
import SendARequest from "../../components/SendARequest/SendArequest.tsx/SendARequest";
import TourFeatures from "../../components/TourFeatures/TourFeatures";
import TourAbout from "../../components/TourAbout/TourAboutBlock";
import PriceIncludes from "../../components/TourPriceIncludes/PriceIncludes";
import Footer from "../../components/Footer/Footer";
import YourTours from "../../components/yourTour/YourTours";
import TourSights from "../../components/TourSights/TourSights";
import { tourSlider } from "../../constants/MainSliders";
import PhotoesSlider from "../../components/PhotoesSlider/PhotoesSlider";
import TourMapsBlock from "../../components/TourMapBlock/TourMapBlock";
import { useRouter } from "next/router";
import useTours from "../../hooks/useTours";
import Preloader from "../../components/Preloader/Preloader";
import TourNotes from "../../components/TourNotes/TourNotes";

const TourPage = () => {
  const router = useRouter();
  const { id }: any = router.query;
  const { getTourDetail, tourDetail, isLoading }: any = useTours();
  
  useEffect(() => {
    if (id != undefined) {
      getTourDetail(id);
    }
  }, [id, tourDetail]);
  if (isLoading) return <Preloader full />;
  return (
    <>
      <Header />
      <Main imgPageSliders={tourSlider} tourDetail={tourDetail} />
      <TourAbout tour={tourDetail} />
      <TourAboutText aboutTour={tourDetail?.tourInfo?.aboutTour} />
      <TourSights sights={tourDetail?.tourInfo?.sights} />
      <TourFeatures reasons={tourDetail?.tourInfo?.loveReasons} />
      <PhotoesSlider photos={tourDetail?.tourInfo?.photoes} />
      <ItineraryBlock itineraries={tourDetail?.tourInfo?.itenerariesDays} />
      <TourMapsBlock map = {tourDetail?.tourInfo?.tourMap} />
      <PriceIncludes />
      <PriceDoesntInclude />
      <TourNotes notes={tourDetail?.tourInfo?.notes}/>
      <SendARequest tour={tourDetail} />
      <YourTours />
      <Footer />
    </>
  );
};

export default React.memo(TourPage);
