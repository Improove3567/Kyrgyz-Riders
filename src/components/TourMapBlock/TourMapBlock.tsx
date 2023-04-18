import React, { useMemo } from "react";
import scss from "./TourMapBlock.module.scss";
import TourMap from "./TourMap/MapSelect";
import Divider from "../Divider/Divider";


export interface TourMapTypesI{
  title?: string,
  image?: string
}

interface TourMapI {
  map : TourMapTypesI[]
}

const TourMapsBlock: React.FC<TourMapI> = ({map}) => {
  const tourSelectMap = useMemo(
    () => 
      map?.map((el) => <TourMap key={el.title} {...el} />)
  , [map]);

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
