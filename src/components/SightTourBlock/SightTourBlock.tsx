import React, { useEffect, useMemo } from "react";
import { SightTourArr } from "../../constants/SightTourBlock";
import useSights from "../../hooks/useSights";
import Divider from "../Divider/Divider";
import MoreBlock from "../Divider/More block/MoreBlock";
import scss from "./SightTourBlock.module.scss";
import SightTourCard from "./SightTourCard/SightTourCard";
const SightTourBlock = () => {
  const renderCards = useMemo(
    () => SightTourArr.map((el) => <SightTourCard {...el} key={el.title} />),
    [SightTourArr]
  );
  return (
    <div className={scss.wrapper}>
      <div className={scss.container}>
        <Divider title="Tours in Cholpon-Ata" variant="dark">
          <MoreBlock title="More tours" />
        </Divider>

        <div className={scss.cards}>{renderCards}</div>
      </div>
    </div>
  );
};

export default SightTourBlock;
