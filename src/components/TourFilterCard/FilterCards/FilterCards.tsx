import React, { FC } from "react";
import scss from './FilterCards.module.scss'
import Image from "next/image";
import Link from "next/link";
import TourInfoTypes from "../../../constants/SightTourBlock";

interface TourFilterCardArr {
  title?: string;
  image?: string;
  tourInfo?: TourInfoTypes;
  tid?: string;
}

const FilterCads: FC<TourFilterCardArr> = ({
  title,
  image,
  tourInfo,
  tid,
}) => {
  return (
    <div className={scss.block}>
      <div className={scss.img}>
        <img src={image} alt="img" width={392} height={293} />
        <div className={scss.days}>
          <span>{tourInfo?.duration.days} {tourInfo?.duration.days == "1" ? "day" : "days"}</span>
        </div>
      </div>
      <div className={scss.textContainer}>
        <div className={scss.title}>
          <h1>{title}</h1>
        </div>
        <div className={scss.typeof}>
          <div className={scss.type}>
            <p>Type of tour</p>
            <span>{tourInfo?.category}</span>
          </div>
        </div>
        <div className={scss.timeof}>
          <div className={scss.time}>
            <p>Time of year</p>
            <span>{tourInfo?.time}</span>
          </div>
        </div>
        <div className={scss.typeof}>
          <div className={scss.activities}>
            <p>Activities:</p>
            <span>Activities</span>
          </div>
        </div>
        <div className={scss.btn}>
          <Link href={`/tour/${tid}`}>View trip</Link>
        </div>
      </div>
    </div>
  );
};

export default FilterCads;
