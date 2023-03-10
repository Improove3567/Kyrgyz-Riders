import React, { FC } from "react";
import { SightTourArrProps } from "../../../constants/SightTourBlock";
import scss from "./SightTourCard.module.scss";
import Image from "next/image";
const SightTourCard: FC<SightTourArrProps> = ({ img, title, days, desc }) => {
  return (
    <div className={scss.card}>
      <div className={scss.front}>
        <div className={scss.img}>
          <Image src={img} alt="image" width={280} height={280} />
          <div className={scss.days}>
            <span>{days}</span>
          </div>
        </div>
        <div className={scss.btm}>
          <p>{title}</p>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SightTourCard;
