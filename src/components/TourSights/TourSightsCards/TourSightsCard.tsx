import React, { FC } from 'react';
import scss from './TourSightsCard.module.scss'
import { TourSightsArrProps } from '../../../constants/TourSitghts';
const TourSightsCard: FC<TourSightsArrProps> = ({ img, title, category }) => {
  return (
    <div className={scss.card}>
      <div className={scss.front}>
        <div className={scss.img}>
          <img src={img} alt={title} width={280} height={280} />
        </div>
        <div className={scss.btm}>
          <p>{title}</p>
          <p>{category}</p>
        </div>
      </div>
    </div>
  );
};

export default TourSightsCard;