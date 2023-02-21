import Image from "next/image";
import React, { useState } from "react";
import scss from "./ItineraryContentBlock.module.scss";
import ArrowDown from "../../../../public/images/TourFeatures/VectorDown.svg";
import ArrowUP from "../../../../public/images/TourFeatures/VectorUp.svg";

interface ItineraryProps {
  title: string;
  desc: string;
  image: string;
  shortDesc1: string;
  shortDesc2: string;
}

const ItineraryContentBlock: React.FC<ItineraryProps> = ({
  title,
  desc,
  image,
  shortDesc1,
  shortDesc2,
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
            <h3>{title}</h3>
          </div>
          <div className={scss.accordionArrows}>
            {!isActive ? (
              <Image src={ArrowDown} alt="arrowDown" />
            ) : (
              <Image src={ArrowUP} alt="arrowUp" />
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
            <p className={scss.shortDesc1}>{shortDesc1}</p>
            <p className={scss.shortDesc2}>{shortDesc2}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ItineraryContentBlock;