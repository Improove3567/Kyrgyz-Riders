import React from "react";
import Divider from "../../components/Divider/Divider";
import MoreBlock from "../../components/Divider/More block/MoreBlock";
import FilterTour from "../../components/Tour filter/FilterTour";
import Main from "../../components/main/Main";
import YourTours from "../../components/yourTour/YourTours";

const HomePage = () => {
  return (
    <>
      <Main />
      <YourTours />
      <Divider title="Select Tours" variant="light">
        <FilterTour />
      </Divider>
      <Divider title="Sights" variant="light">
        <MoreBlock title="More Sights" />
      </Divider>
    </>
  );
};

export default HomePage;
