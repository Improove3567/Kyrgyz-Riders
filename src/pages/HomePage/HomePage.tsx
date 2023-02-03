import React from "react";
import Divider from "../../components/Divider/Divider";
import FilterTour from "../../components/Tour filter/FilterTour";
import Main from "../../components/main/Main";
import Sights from "../../components/Sights/Sights";
import YourTours from "../../components/yourTour/YourTours";
import OurTeam from "../../components/Our team/OurTeam";
import Feedback from "../../components/FeedBack/Feedback";
import TourSlider from "../../components/Tour slider/TourSLider";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Modal from "../../components/FeedBack/Feedback modal/Modal";

const HomePage = () => {
  return (
    <>
      <Header isMain={true} id={0} title={""} link={""} />
      <Main />
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
