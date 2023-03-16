import React, { useEffect, useMemo } from "react";
import { TourSightsArr } from "../../constants/TourSitghts";
import useSights from "../../hooks/useSights";
import Divider from "../Divider/Divider";
import SightCard from "../Sights/SightCard/SightCard";
import scss from "./TourSights.module.scss";
import TourSightsCard from "./TourSightsCards/TourSightsCard";
const TourSights = () => {
  const renderCards = useMemo(() => (
    TourSightsArr.map((el) => (
        <TourSightsCard {...el} key={el.title}/>
    ))
  ), [])
  return (
    <div className={scss.Toursights}>
      <div className='container'>
        <Divider title="Sights visited on this tour" variant="dark" />
        <div className={scss.Tourcards}>{renderCards}</div>
      </div>
    </div>
  );
};

export default TourSights;
