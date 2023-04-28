import Image from "next/image";
import React, { ReactNode, useState } from "react";
import scss from "./ItineraryContentBlock.module.scss";
import ArrowDown from "../../../../public/images/TourFeatures/VectorDown.svg";
import ArrowUP from "../../../../public/images/TourFeatures/VectorUp.svg";
import { ItinerariesTypes } from "../ItineraryBlock";

interface ItineraryProps {
  item: ItinerariesTypes;
}

const ItineraryContentBlock: React.FC<ItineraryProps> = ({ item }) => {
  const [isActive, setIsActive] = useState(false);

  const imags = item.images.map((el) => {
    return <img src={el} alt="image" key={el} />;
  });

  return (
    <>
      <div
        className={scss.accordionHeader}
        onClick={() => setIsActive(!isActive)}
      >
        <div className={scss.accordion}>
          <div className={scss.accordionTitleMain}>
            <h3>{item.itinerary}</h3>
          </div>
          <div className={scss.accordionArrows}>
            {!isActive ? (
              <Image src={ArrowDown} width={16} height={8} alt="arrowDown" />
            ) : (
              <Image src={ArrowUP} width={16} height={8} alt="arrowUp" />
            )}
          </div>
        </div>
      </div>
      {isActive && (
        <div id={scss.accordionContentMain}>
          <p>{item.desc}</p>
          <div className={scss.accordionImg}>{imags}</div>
          <div className={scss.line}></div>
          <div className={scss.shortDescItinerary}>
            <p className={scss.facts}>Fast facts: {item.facts}</p>
            {
              item.overnight != null && (
                <p className={scss.overnight}>Overnight: {item.overnight}</p>
              )
            }
          </div>
        </div>
      )}
    </>
  );
};

export default ItineraryContentBlock;
