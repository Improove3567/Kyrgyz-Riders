import React, { useMemo } from "react";
import Divider from "../Divider/Divider";
import scss from "./TourSights.module.scss";
import TourSightsCard from "./TourSightsCards/TourSightsCard";

interface SightsTypes {
  sights: Array<object>;
}

const TourSights: React.FC<SightsTypes> = ({ sights }) => {
  const renderCards = useMemo(() => (
    sights?.map((el: any) => (
      <TourSightsCard img={""} title={""} aboutSight={""} {...el} key={el.createdAt} />
    ))
  ), [sights])
  console.log(sights)
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
