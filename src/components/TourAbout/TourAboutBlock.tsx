import React, { FC, useMemo } from "react";
import {
  TourAboutArr,
} from "../../constants/TourAboutBlock";
import Divider from "../Divider/Divider";
import MoreBlock from "../Divider/More block/MoreBlock";
import scss from "./TourAbout.module.scss";
import TourAboutCard from "./TourAboutCard/TourAboutCard";
const TourAbout: FC = () => {
  const renderCard = useMemo(
    () =>
      TourAboutArr.map((el) => (
        <TourAboutCard {...el} key={el.id}/>
      )),
    []
  );
  return (
    <div className={scss.content}>
      <Divider title="Tours / Highlights around Isskyk - kol lake" variant="light">
      <MoreBlock title={"More tours"}/>
      </Divider>
      <div className={scss.wrapper}>
        {renderCard}
      </div>
    </div>
  );
};

export default TourAbout;
