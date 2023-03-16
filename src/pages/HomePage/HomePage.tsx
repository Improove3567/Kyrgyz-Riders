import React from "react";
import Main from "../../components/main/Main";
import Sights from "../../components/Sights/Sights";
import YourTours from "../../components/yourTour/YourTours";
import OurTeam from "../../components/Our team/OurTeam";
import Feedback from "../../components/FeedBack/Feedback";
import TourSlider from "../../components/Tour slider/TourSLider";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { mainSlider } from "../../constants/MainSliders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {

  return (
    <>
      <Header isMain={true} />
      <ToastContainer />
      <Main imgPageSliders={mainSlider} />
      <TourSlider />
      <Sights />
      <Feedback />
      <OurTeam />
      <YourTours />
      <Footer />
    </>
  );
};

export default HomePage;
