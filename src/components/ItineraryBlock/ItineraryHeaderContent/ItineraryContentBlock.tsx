import Image from "next/image";
import React, { useState } from "react";
import scss from "./ItineraryContentBlock.module.scss";
import ArrowDown from "../../../../public/images/TourFeatures/VectorDown.svg";
import ArrowUP from "../../../../public/images/TourFeatures/VectorUp.svg";

interface ItineraryProps {
  itinerary?: string;
  desc?: string;
  image?: string;
  facts?: string;
  overnight?: string;
}

const ItineraryContentBlock: React.FC<ItineraryProps> = ({
  itinerary,
  desc,
  image,
  facts,
  overnight,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        className={scss.accordionHeader}
        onClick={() => setIsActive(!isActive)}
      >
        <div className={scss.accordion}>
          <div className={scss.accordionTitleMain}>
            <h3>{itinerary}</h3>
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
          <p>{desc}</p>
          <div className={scss.accordionImg}>
            <img src={image} alt="image" />
          </div>
          <div className={scss.line}></div>
          <div className={scss.shortDescItinerary}>
            <p className={scss.facts}>{facts}</p>
            <p className={scss.overnight}>{overnight}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ItineraryContentBlock;