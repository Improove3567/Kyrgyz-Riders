import React from "react";
import { ISights } from "../Sights";
import scss from "./SightCard.module.scss";
import Link from "next/link";

const SightCard: React.FC<ISights> = ({
  img,
  title,
  tours,
  tid
}) => {

  return (
    <div className={scss.card}>
      <Link href={`sight/${tid}`}>
        <div className={scss.front}>
          {/* eslint-disable-next-line no-use-before-define */}
          <img src={img} alt="image" />
          <div className={scss.btm}>
            <p>{title}</p>
            <p>{tours?.length} tours</p>
          </div>
        </div>
      </Link>
    </div >

  );
};

export default SightCard;
