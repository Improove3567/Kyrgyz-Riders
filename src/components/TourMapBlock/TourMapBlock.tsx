import React, { useMemo } from "react";
import scss from "./TourMapBlock.module.scss";
import TourMap from "./TourMap/MapSelect";
import Divider from "../Divider/Divider";
import { TourSelectMap } from "../../constants/TourMapBlock";

const TourMapsBlock: React.FC = () => {
  const tourSelectMap = useMemo(
    () => 
      TourSelectMap.map((el) => <TourMap key={el.id} {...el} />)
  , [TourSelectMap]);

  return (
    <div className={scss.wrapper}>
      <div className="container">
      <div className={scss.header}>
        <Divider title="Maps" variant="light" />
      </div>
      {tourSelectMap}
      </div>
    </div>
  );
};

export default TourMapsBlock;
