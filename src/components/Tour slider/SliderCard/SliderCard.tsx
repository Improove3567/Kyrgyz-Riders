import React from "react";
import scss from './SliderCard.module.scss';
import Image from "next/image";
import StarsRating from "../stars/StarsRating";

interface CardProps {
  title: string,
  subtitle: string,
  days: number,
  stars: number,
}

const SliderCard: React.FC<CardProps> = ({
  title,
  subtitle,
  days,
  stars,
}) => {
  return (
    <div className={scss.card}>
      <div className={scss.days}>
        <p>{days} days</p>
      </div>
      <div className={scss.front}>
        <Image src={""} alt="img" className={scss.bgImage} />
        <div className={scss.bottomContent}>
          <div className={scss.textContainer}>
            <p>{title}</p>
            <p>{subtitle}</p>
          </div>
          <hr />
          <div className={scss.stars}>
            <StarsRating data={stars} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
