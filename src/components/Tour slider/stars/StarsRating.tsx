import React from "react";
import scss from './StarsRating.module.scss';
import Image from "next/image";

interface StarsProps {
  data: number;
}

const StarsRating: React.FC<StarsProps> = ({ data }) => {

  const emptyStars = 5 - data

  return (
    <div className={scss.wrapper}>
      {
        [...Array(data)].map((el) => (
          <Image src='/images/star.svg' alt="star" width={15} height={15} key={el} />
        ))
      }
      {
        [...Array(emptyStars)].map((el) => (
          <Image src='/images/emptyStar.svg' alt="empty star" width={15} height={15} key={el} />
        ))
      }
    </div>


  );
};

export default StarsRating;
