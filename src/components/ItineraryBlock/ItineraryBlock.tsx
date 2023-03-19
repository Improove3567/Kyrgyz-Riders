import React, { FC, useMemo } from "react";
import scss from "./ItineraryBlock.module.scss";
import Divider from "../Divider/Divider";
import { AccordionData } from "../../constants/ItineraryContent";
import ItineraryContentBlock from "./ItineraryHeaderContent/ItineraryContentBlock";

interface ItinerariesTypes {
  itinerary: string;
  desc: string;
  image: string;
  facts: string;
  overnight: string;
}

interface ItineraryProps {
  itineraries: any;
}

const ItineraryBlock: FC<ItineraryProps> = ({ itineraries }) => {
  const render = useMemo(
    () =>
      itineraries?.map((item: any) => (
        <ItineraryContentBlock  {...item} />
      )),
    [itineraries]
  );


  return (
    <div className={scss.itineraryBlockMain}>
      <div className="container">
        <Divider title="Itinerary" variant="dark" />
        <>{render}</>
      </div>
    </div>
  );
};

export default ItineraryBlock;