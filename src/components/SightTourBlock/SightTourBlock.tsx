import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import useSights from "../../hooks/useSights";
import Divider from "../Divider/Divider";
import MoreBlock from "../Divider/More block/MoreBlock";
import scss from "./SightTourBlock.module.scss";
import SightTourCard from "./SightTourCard/SightTourCard";
import useTours from "../../hooks/useTours";
import { SightTourArrProps } from "../../constants/SightTourBlock";
import TourInfoTypes from "../../constants/SightTourBlock";


interface TourProps {
  tours: string[];
}

const SightTourBlock: React.FC<TourProps> = ({ tours }) => {

  const renderCards = useMemo(
    () => tours?.map((el: any) => <SightTourCard {...el} key={el.createdAt} />),
    [tours]
  );

  return (
    <div className={scss.wrapper}>
      <div className="container">
        <div className={scss.container}>
          <Divider title="Tours in Cholpon-Ata" variant="dark">
            <MoreBlock title="More tours" />
          </Divider>
          <div className={scss.cards}>{renderCards}</div>
        </div>
      </div>
    </div>
  );
};

export default SightTourBlock;
