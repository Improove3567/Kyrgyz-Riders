import React, { FC } from "react";
import scss from './FilterCards.module.scss'
import Image from "next/image";

interface TourFilterCardArr {
  title: string;
  img: string;
  id: number;
  stars: string;
  typeOf: typeOf;
  timeof: typeOf;
  starImg: string;
  activities: typeOf;
  days: string;
  btn: string;
}

interface typeOf {
  title: string;
  text: string;
}

const FilterCads: FC<TourFilterCardArr> = ({
  img,
  title,
  days,
  timeof,
  activities,
  starImg,
  typeOf,
  stars,
  btn,
}) => {
  return (
    <div className={scss.block}>
      <div className={scss.img}>
        <Image src={img} alt="img" width={392} height={293} />
        <div className={scss.days}>
          <span>{days}</span>
        </div>
      </div>
      <div className={scss.textContainer}>
        <div className={scss.title}>
          <h1>{title}</h1>
        </div>
        <div className={scss.typeof}>
          <div className={scss.type}>
            <p>{typeOf.title}</p>
            <span>{typeOf.text}</span>
          </div>
        </div>
        <div className={scss.timeof}>
          <div className={scss.time}>
            <p>{timeof.title}</p>
            <span>{timeof.text}</span>
          </div>
        </div>
        <div className={scss.typeof}>
          <div className={scss.activities}>
            <p>{activities.title}</p>
            <span>{activities.text}</span>
          </div>
        </div>
        <div className={scss.btn}>
          <button>{btn}</button>
        </div>
      </div>
    </div>
  );
};

export default FilterCads;
