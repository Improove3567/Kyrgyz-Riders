import React from "react";
import Main from "../../components/main/Main";
import Sights from "../../components/Sights/Sights";
import YourTours from "../../components/yourTour/YourTours";

const HomePage = () => {
  return (
    <>
      <Main />
      <YourTours />
      <Sights/>
    </>
  );
};

export default HomePage;
