import React, { useState, useMemo } from "react";
import scss from "./TourMap.module.scss";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

interface TourSelect {
  title: string;
  option: string[];
  status: boolean;
}

const TourMap: React.FC<TourSelect> = ({ title, option, status }) => {
  const [arrow, setArrow] = useState(status);

  const click = () => setArrow(!arrow);

  const newImg = useMemo(
    () =>
      option.map((el) => {
        const id = el + Date.now();
        if (title == "Text") {
          return <p key={id}>{el}</p>;
        } else {
          return (
            <PhotoView src={el} key={id}>
              <img src={el} alt="Map of the Kyrgyzstan" />
            </PhotoView>
          );
        }
      }),
    [option]
  );

  return (
    <>
      <div className={scss.select} onClick={click}>
        <div className={scss.text}>{title}</div>
        <div className={scss.arrowDown}></div>
      </div>
      {arrow && (
        <div className={scss.map}>
          {title == "Map of the tour" && (
            <PhotoProvider>{newImg}</PhotoProvider>
          )}
          {title == "Text" && <span>{newImg}</span>}
        </div>
      )}
    </>
  );
};

export default TourMap;
