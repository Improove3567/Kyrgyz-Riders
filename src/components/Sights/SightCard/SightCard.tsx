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
        <Image src={""} alt="img" />
        <div className={scss.btm}>
          <p>{title}</p>
          <p>{tours} tours</p>
        </div>
      </div>
    </div>
  );
};

export default SightCard;
