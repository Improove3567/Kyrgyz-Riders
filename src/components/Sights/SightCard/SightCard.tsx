import React from "react";
import { ISights } from "../Sights";
import scss from "./SightCard.module.scss";
import Image from "next/image";

const SightCard: React.FC<ISights> = ({
  img,
  title,
  tours,
  isEdgeRight,
  isEdgeLeft,
}) => {
  const isBack = (): string => {
    if (isEdgeLeft) {
      return "SightbackLeft";
    } else if (isEdgeRight) {
      return "SightBackRight";
    } else {
      return "SightBack";
    }
  };


  return (
    <div className={scss.card}>
      <div className={isBack()}></div>
      <div className={scss.front}>
        {/* eslint-disable-next-line no-use-before-define */}
        <img src={img} alt="image" />
        {/* <Image src={img} alt="test" width={50} height={50} /> */}
        <div className={scss.btm}>
          <p>{title}</p>
          <p>{tours.length} tours</p>
        </div>
      </div>
    </div>
  );
};

export default SightCard;
