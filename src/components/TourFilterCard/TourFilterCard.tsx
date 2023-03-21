import React, { FC, useEffect } from "react";
import { TourFilterCards } from "../../constants/TourFilterCard";
import useTours from "../../hooks/useTours";
import FilterCads from "./FilterCards/FilterCards";
import scss from "./TourFilterCard.module.scss";

const TourFilterCard: FC = () => {
  const { getTours, tours } = useTours();

  useEffect(() => {
    getTours();
  }, [])

  const CardList = React.useMemo(
    () => tours?.slice(0, 4).map((el, index) => <FilterCads {...el} key={index} />),
    [tours]
  );

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
