import React, { FC, useEffect } from "react";
import useTours from "../../hooks/useTours";
import Preloader from "../Preloader/Preloader";
import FilterCads from "./FilterCards/FilterCards";
import scss from "./TourFilterCard.module.scss";

const TourFilterCard: FC = () => {
  const { getTours, tours, isLoading } = useTours();

  useEffect(() => {
    getTours();
  }, [])

  const CardList = React.useMemo(
    () => tours?.slice(0, 4).map((el, index) => <FilterCads {...el} key={index} />),
    [tours]
  );

  if (isLoading) return <Preloader full />

  return (
    <div className={scss.tour_card}>
      <div className={scss.tour_container}>
        {CardList}
        <div className={scss.btn_more}>
          <button style={{ width: "208%" }}>More Tours</button>
        </div>
      </div>
    </div>
  );
};

export default TourFilterCard;
