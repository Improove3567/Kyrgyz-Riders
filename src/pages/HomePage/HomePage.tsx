import React from "react";
import Divider from "../../components/Divider/Divider";
import MoreBlock from "../../components/Divider/More block/MoreBlock";
import FilterTour from "../../components/Tour filter/FilterTour";
import Main from "../../components/main/Main";
import YourTours from "../../components/yourTour/YourTours";
import OurTeam from "../../components/Our team/OurTeam";

const HomePage = () => {
  return (
    <>
      <Main />
      <YourTours />
      <OurTeam />
    </>
  );
};

export default HomePage;
