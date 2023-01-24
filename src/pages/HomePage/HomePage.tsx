import React from "react";
import Divider from "../../components/Divider/Divider";
import FilterTour from "../../components/Tour filter/FilterTour";
import Main from "../../components/main/Main";
import Sights from "../../components/Sights/Sights";
import YourTours from "../../components/yourTour/YourTours";
import Feedback from "../../components/FeedBack/Feedback";
import TourSlider from "../../components/Tour slider/TourSLider";

const HomePage = () => {
  return (
    <>
      <Main />
      <Sights />
      <YourTours />
      <Feedback />
      <TourSlider />
    </>
  );
};

export default HomePage;
