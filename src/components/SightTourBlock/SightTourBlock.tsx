import React, { useMemo } from "react";
import Divider from "../Divider/Divider";
import MoreBlock from "../Divider/More block/MoreBlock";
import scss from "./SightTourBlock.module.scss";
import SightTourCard from "./SightTourCard/SightTourCard";

interface TourProps {
  tours: Array<object>;
}

const SightTourBlock: React.FC<TourProps> = ({ tours }) => {
  const renderCards = useMemo(
    () => tours?.map((el, index) => <SightTourCard {...el} key={index} />),
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
