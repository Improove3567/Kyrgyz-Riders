import React, { FC } from "react";
import { TourFilterCards } from "../../constants/TourFilterCard";
import FilterCads from "./FilterCards/FilterCards";
import scss from "./TourFilterCard.module.scss";

const TourFilterCard: FC = () => {
  const CardList = React.useMemo(
    () => TourFilterCards.map((el) => <FilterCads {...el} key={el.id} />),
    [TourFilterCards]
  );
  return (
    <div className={scss.tour_card}>
      <div className={scss.tour_container}>
        {CardList}
        <div className={scss.btn_more}>
          <button>More Tours</button>
        </div>
      </div>
    </div>
  );
};

export default TourFilterCard;
