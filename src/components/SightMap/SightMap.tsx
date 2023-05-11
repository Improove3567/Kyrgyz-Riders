import React from "react";
import scss from "./SightMap.module.scss";
import Divider from "../Divider/Divider";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";
import 'react-photo-view/dist/react-photo-view.css';

interface mapsProps {
  map: string;
}

const SightMap: React.FC<mapsProps> = ({ map }) => {
  return (
    <div className={scss.wrapper}>
      <div className="container">
        <Divider title="Map" variant="dark" />
        <div className={scss.img}>
          <div className={scss.map}>
            <PhotoProvider>
              <PhotoView src={map}>
                <Image src={map} width={780} height={376} alt={"map"} />
              </PhotoView>
            </PhotoProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SightMap;
