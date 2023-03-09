import React from "react";
import scss from "./SightMap.module.scss";
import Divider from "../Divider/Divider";
import { PhotoProvider, PhotoView } from "react-photo-view";

const SightMap = () => {
  return (
    <div className={scss.wrapper}>
      <Divider title="Map" variant="dark" />
      <div className={scss.map}>
        <PhotoProvider>
          <PhotoView src={"/assets/images/map.jpg"}>
            <img src={"/assets/images/map.jpg"} />
          </PhotoView>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default SightMap;
