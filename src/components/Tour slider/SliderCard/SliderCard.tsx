import React from "react";
import scss from './SliderCard.module.scss';

interface CardProps {
  title?: string,
  subtitle?: string,
  days?: number,
  img: string;
}

const SliderCard: React.FC<CardProps> = ({
  title,
  subtitle,
  days,
  img
}) => {
  return (
    <div className={scss.card}>
      <div className={scss.days}>
        <p className={scss.days_title}>{days} days</p>
      </div>
      <div className={scss.front}>
        {/* eslint-disable-next-line no-use-before-define */}
        <img src={img} alt="bcakground-image" />
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
