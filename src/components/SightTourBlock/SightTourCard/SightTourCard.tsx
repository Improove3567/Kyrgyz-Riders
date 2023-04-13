import React, { FC } from "react";
import scss from "./SightTourCard.module.scss";
import TourInfoTypes from "../../../constants/SightTourBlock";
import Link from "next/link";

interface SightTourProps {
  image?: string;
  title?: string;
  subtitle?: string;
  tid?: string;
  tourInfo?: TourInfoTypes;
}

const SightTourCard: FC<SightTourProps> = ({ image, title, subtitle, tourInfo, tid }) => {
  const days = tourInfo?.duration?.days
  return (
    <Link href={`/tour/${tid}`}>
    <div className={scss.card}>
      <div className={scss.front}>
        <div className={scss.img}>
          <img src={image} alt={title} width={280} height={280} />
          <div className={scss.days}>
            <span>{days} days</span>
          </div>
        </div>
        <div className={scss.btm}>
          <p>{title}</p>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default SightTourCard;
