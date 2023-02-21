import React, { FC, useMemo } from "react";
import {
  TourAboutArr,
} from "../../constants/TourAboutBlock";
import scss from "./TourAbout.module.scss";
import TourAboutCard from "./TourAboutCard/TourAboutCard";
const TourAbout: FC = () => {
  const renderCard = useMemo(
    () =>
      TourAboutArr.map((el) => (
        <TourAboutCard {...el}/>
      )),
    []
  );
  return (
    <div className={scss.content}>
      <div className={scss.wrapper}>
        {renderCard}
      </div>
    </div>
  );
};

export default TourAbout;
