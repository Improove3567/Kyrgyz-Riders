import React, { Suspense, lazy } from "react";
import { mainSlider } from "../../constants/MainSliders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Preloader from "../../components/Preloader/Preloader";
import Modal2 from "../../components/Modal/Modal2";

const Header = lazy(() => import("../../components/Header/Header"));
const Main = lazy(() => import("../../components/main/Main"));
const TourSlider = lazy(() => import("../../components/Tour slider/TourSLider"));
const Sights = lazy(() => import("../../components/Sights/Sights"));
const Feedback = lazy(() => import("../../components/FeedBack/Feedback"));
const OurTeam = lazy(() => import("../../components/Our team/OurTeam"));
const YourTours = lazy(() => import("../../components/yourTour/YourTours"));
const Footer = lazy(() => import("../../components/Footer/Footer"));

const HomePage = () => {

  return (
    <Suspense fallback={<Preloader full />}>
      <Header isMain={true} />
      <ToastContainer />
      <Main imgPageSliders={mainSlider} />
      <TourSlider />
      <Sights />
      <Feedback />
      <OurTeam />
      <YourTours />
      <Footer />
      <Modal2/>
    </Suspense>
  );
};

export default React.memo(HomePage);
