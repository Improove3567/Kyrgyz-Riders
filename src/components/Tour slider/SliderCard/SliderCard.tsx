import React from "react";
import scss from "./SliderCard.module.scss";
import Link from "next/link";

interface CardProps {
  title?: string;
  subtitle?: string;
  days?: number;
  image?: string;
}

const SliderCard: React.FC<CardProps> = ({ title, subtitle, days, image}) => {
  return (
    <Link href={'/our-team/id'} >
      <div className={scss.card}>
        <div className={scss.days}>
          <p className={scss.days_title}>{days} days</p>
        </div>
        <div className={scss.front}>
          {/* eslint-disable-next-line no-use-before-define */}
          <img src={image}  alt="background-image" height={280} />
          <div className={scss.bottomContent}>
            <div className={scss.textContainer}>
              <p className={scss.title}>{title}</p>
              <p className={scss.subtitle}>{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>  
  );
};

export default SliderCard;
