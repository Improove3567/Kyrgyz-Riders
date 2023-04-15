import React, { FC } from 'react';
import scss from './TourSightsCard.module.scss'
import { TourSightsArrProps } from '../../../constants/TourSitghts';
import Link from 'next/link';
const TourSightsCard: FC<TourSightsArrProps> = ({ img, title, category, tid }) => {
  return (
    <div className={scss.card}>
      <Link href={`${tid}`}>
        <div className={scss.front}>
          <img src={img} alt={title} />
          <div className={scss.btm}>
            <p>{title}</p>
            <p>{category}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TourSightsCard;