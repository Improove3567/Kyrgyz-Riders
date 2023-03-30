import React from "react";
import { ISights } from "../Sights";
import scss from "./SightCard.module.scss";
import Image from "next/image";

const SightCard: React.FC<ISights> = ({
  img,
  title,
  tours,
}) => {

  return (
    <div className={scss.card}>
      <div className={scss.front}>
        {/* eslint-disable-next-line no-use-before-define */}
        <img src={img} alt="image" />
        <div className={scss.btm}>
          <p>{title}</p>
          <p>{tours?.length} tours</p>
        </div>
      </div>
    </div>
  );
};

export default SightCard;
