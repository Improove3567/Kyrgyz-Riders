import React from "react";
import scss from "./TourMapBlock.module.scss";
import TourMap from "./TourMap/MapSelect";
import Divider from "../Divider/Divider";
import { TourSelectMap } from "../../constants/TourMapBlock";


const TourMapsBlock: React.FC = () => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.header}>
        <Divider title="Maps" variant="light" />
      </div>
      {TourSelectMap.map( (el) => <TourMap key={el.id} {...el}/> )}
    </div>
  );
};

export default TourMapsBlock;
