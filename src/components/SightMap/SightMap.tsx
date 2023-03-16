import React from "react";
import scss from "./SightMap.module.scss";
import Divider from "../Divider/Divider";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";

const SightMap = () => {
  return (
    <div className={scss.wrapper}>
      <div className="container">
      <Divider title="Map" variant="dark" />
      <div className={scss.map}>
        <PhotoProvider>
          <PhotoView src={"/assets/images/map.jpg"}>
            <Image src={"/assets/images/map.jpg"} width={780} height={376} alt={"map"} />
          </PhotoView>
        </PhotoProvider>
      </div>
      </div>
    </div>
  );
};

export default SightMap;
