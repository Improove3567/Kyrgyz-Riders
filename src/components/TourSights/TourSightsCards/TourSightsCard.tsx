import React, { FC } from 'react';
import Image from 'next/image';
import scss from './TourSightsCard.module.scss'
import { TourSightsArrProps } from '../../../constants/TourSitghts';
const TourSightsCard: FC<TourSightsArrProps> = ({ img, title, aboutSight }) => {
  return (
    <div className={scss.card}>
      <div className={scss.front}>
        <div className={scss.img}>
          <Image src={img} alt={title} width={280} height={280} />
        </div>
        <div className={scss.btm}>
          <p>{title}</p>
          <p>{aboutSight}</p>
        </div>
      </div>
    </div>
  );
};

export default TourSightsCard;