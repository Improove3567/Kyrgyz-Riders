import React, { FC, useEffect, useMemo, useState } from "react";
import scss from "./ItineraryBlock.module.scss";
import Divider from "../Divider/Divider";
import ArrowDown from "../../../public/images/TourFeatures/VectorDown.svg";
import ArrowUP from "../../../public/images/TourFeatures/VectorUp.svg";
import Image from "next/image";
import { AccordionData } from "../../constants/ItineraryContent";
import ItineraryContentBlock from "./ItineraryHeaderContent/ItineraryContentBlock";

const ItineraryBlock: FC = () => {
  // const [isActive, setIsActive] = useState(true);

  const render = useMemo(
    () =>
      AccordionData.map((item) => (
        <ItineraryContentBlock key={item.id} {...item} />
        // < >
        //   <div
        //     className={scss.accordionHeader}
        //     onClick={() => setIsActive(!isActive)}
        //   >
        //     <div className={scss.accordion}>
        //       <div className={scss.accordionTitleMain}>
        //         <h3>{item.title}</h3>
        //       </div>
        //       <div className={scss.accordionArrows}>
        //         <Image src={ArrowDown} alt="arrowDown" />
        //         {/* <Image src={ArrowUP} alt="arrowUp" /> */}
        //       </div>
        //     </div>
        //   </div>
        //   {isActive && (
        //     <div id={scss.accordionContentMain}>
        //       <p>{item.decs}</p>
        //       <div className={scss.accordionImg}>
        //         <img src={item.image} alt="image" />
        //       </div>
        //       <div className={scss.line}></div>
        //       <div className={scss.shortDescItinerary}>
        //         <p>{item.shortDesc1}</p>
        //         <p>{item.shortDesc2}</p>
        //       </div>
        //     </div>
        //   )}
        // </>
      )),
    []
  );

  return (
    <div className={scss.itineraryBlockMain}>
      <Divider title="Itinerary" variant="dark" />
      <>{render}</>
    </div>
  );
};

export default ItineraryBlock;
