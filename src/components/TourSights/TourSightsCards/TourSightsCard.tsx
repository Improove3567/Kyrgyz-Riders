import React, { FC } from "react";
import scss from "./TourSightsCard.module.scss";
import { TourSightsArrProps } from "../../../constants/TourSitghts";

const TourSightsCard: FC<TourSightsArrProps> = ({ img, title, category }) => {
  return (
    <div className={scss.card}>
      <div className={scss.front}>
          <img src={img} alt={title} width={280} height={280} />
        <div className={scss.btm}>
          <p>{title}</p>
          <p>zxczxc</p>
        </div>
      </div>
    </div>
  );
};

export default TourSightsCard;
