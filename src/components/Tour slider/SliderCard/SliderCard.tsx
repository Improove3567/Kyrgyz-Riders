import React from "react";
import scss from './SliderCard.module.scss';
import Image from "next/image";

interface CardProps {
  title: string,
  subtitle: string,
  days: number,
  stars: number,
  isEdgeRight?: boolean,
  isEdgeLeft?: boolean,
}

const SliderCard: React.FC<CardProps> = ({
  title,
  subtitle,
  days,
  stars,
  isEdgeLeft,
  isEdgeRight,
}) => {

  const isBack = (): string => {
    if (isEdgeLeft) {
      return scss.SightbackLeft;
    } else if (isEdgeRight) {
      return scss.SightBackRight;
    } else {
      return scss.SightBack;
    }
  };
  return (
    <div className={scss.card}>
      <div className={scss.days}>
        <p>5 days</p>
      </div>
      <div className={isBack()}></div>
      <div className={scss.front}>
        <Image src={""} alt="img" className={scss.bgImage} />
        <div className={scss.btm}>
          <div className={scss.textContainer}>
            <p>{title}</p>
            <p>{subtitle}</p>
          </div>
          <hr />
          <div className={scss.stars}>
            <Image src='/images/star.svg' alt="star" width={15} height={15} />
            <Image src='/images/star.svg' alt="star" width={15} height={15} />
            <Image src='/images/star.svg' alt="star" width={15} height={15} />
            <Image src='/images/star.svg' alt="star" width={15} height={15} />
            <Image src='/images/star.svg' alt="star" width={15} height={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
