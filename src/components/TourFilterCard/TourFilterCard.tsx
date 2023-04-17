import React, { FC, useState } from "react";
import useTours from "../../hooks/useTours";
import Preloader from "../Preloader/Preloader";
import FilterCads from "./FilterCards/FilterCards";
import scss from "./TourFilterCard.module.scss";

interface TourProps {
  data: Array<object>
}

const TourFilterCard: FC<TourProps> = ({ data }) => {

  const CardList = React.useMemo(
    () => data?.slice(0, 4).map((el, index) => <FilterCads {...el} key={index} />),
    [data]
  );

  if (!data) return <Preloader full />

  return (
    <div className={scss.tour_card}>
      <div className={scss.tour_back}>
        <div className={scss.tour_container}>
          {CardList}
        </div>
        <div className={scss.btn_more}>
          <button style={{ width: "100%" }}>More Tours</button>
        </div>
      </div>
    </div>
  );
};

export default TourFilterCard;
