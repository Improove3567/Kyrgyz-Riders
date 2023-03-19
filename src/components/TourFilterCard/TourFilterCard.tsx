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
    () => tours?.slice(0, 4).map((el: any) => <FilterCads {...el} key={el.tid} id={el.tid} />),
    [tours]
  );

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
