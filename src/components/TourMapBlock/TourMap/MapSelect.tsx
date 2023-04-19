import React, { useState, useMemo } from "react";
import scss from "./TourMap.module.scss";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";
import { TourMapTypesI } from "../TourMapBlock";

const TourMap: React.FC<TourMapTypesI> = ({ title, image }) => {
  const [arrow, setArrow] = useState(false);

  const click = () => setArrow(!arrow);

  

  const result = React.useMemo(() => {
    return arrow ? (
      <Image
        src={"/assets/images/arrow.svg"}
        width={16}
        height={8}
        alt={"arrow"}
      />
    ) : (
      <Image
        src={"/assets/images/arrowUp.svg"}
        width={16}
        height={8}
        alt={"arrow"}
      />
    );
  }, [arrow]);

  return (
    <>
      <div className={scss.select} onClick={click}>
        <div className={scss.text}>{title}</div>
        {result}
      </div>
      {arrow && (
        <div className={scss.map}>
            <div className={scss.photo}>
              <PhotoProvider>
                <PhotoView src={image}>
                  <img src={image} alt="map" />
                </PhotoView>
              </PhotoProvider>
            </div>
        </div>
      )}
    </>
  );
};

export default TourMap;
