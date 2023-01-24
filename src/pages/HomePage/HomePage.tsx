import React from "react";
import Divider from "../../components/Divider/Divider";
import FilterTour from "../../components/Tour filter/FilterTour";
import Main from "../../components/main/Main";
import Sights from "../../components/Sights/Sights";
import YourTours from "../../components/yourTour/YourTours";
import OurTeam from "../../components/Our team/OurTeam";
import Feedback from "../../components/FeedBack/Feedback";
import Footer from "../../components/Footer/Footer";


const HomePage = () => {
  return (
    <>
      <Main />
      <YourTours />
      <OurTeam />
      <Sights />
      <Divider title="Select Tours" variant="light">
        <FilterTour />
      </Divider>
      <Feedback />
      <YourTours />
      <Footer />
    </>
  );
};

export default HomePage;
