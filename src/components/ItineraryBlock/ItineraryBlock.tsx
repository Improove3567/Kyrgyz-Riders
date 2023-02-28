import React, { FC, useMemo } from "react";
import scss from "./ItineraryBlock.module.scss";
import Divider from "../Divider/Divider";
import { AccordionData } from "../../constants/ItineraryContent";
import ItineraryContentBlock from "./ItineraryHeaderContent/ItineraryContentBlock";

const ItineraryBlock: FC = () => {
  const render = useMemo(
    () =>
      AccordionData.map((item) => (
        <ItineraryContentBlock key={item.id} {...item} />
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