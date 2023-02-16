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
        <p className={scss.days_title}>{days} days</p>
      </div>
      <div className={scss.front}>
        <div className={scss.bottomContent}>
          <div className={scss.textContainer}>
            <p className={scss.title}>{title}</p>
            <p className={scss.subtitle}>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
