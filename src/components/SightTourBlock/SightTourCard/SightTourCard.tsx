import React, { FC } from "react";
import scss from "./SightTourCard.module.scss";
import TourInfoTypes from "../../../constants/SightTourBlock";

interface SightTourProps {
  image?: string;
  title?: string;
  subtitle?: string;
  tourInfo?: TourInfoTypes;
}

const SightTourCard: FC<SightTourProps> = ({ image, title, subtitle, tourInfo }) => {
  return (
    <div className={scss.card}>
      <div className={scss.front}>
        <div className={scss.img}>
          <img src={image} alt={title} width={280} height={280} />
          <div className={scss.days}>
            <span>{tourInfo?.duration.days} days</span>
          </div>
        </div>
        <div className={scss.btm}>
          <p>{title}</p>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default SightTourCard;
