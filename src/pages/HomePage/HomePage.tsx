import React from "react";
import Divider from "../../components/Divider/Divider";
import MoreBlock from "../../components/Divider/More block/MoreBlock";
import Header from "../../components/Header/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      HomePage
      <Divider title="Sights" variant="light">
        <MoreBlock title="More Sights" />
      </Divider>
    </div>
  );
};

export default HomePage;
