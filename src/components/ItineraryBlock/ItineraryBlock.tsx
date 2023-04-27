import React, { FC, useMemo } from "react";
import scss from "./ItineraryBlock.module.scss";
import Divider from "../Divider/Divider";
import { AccordionData } from "../../constants/ItineraryContent";
import ItineraryContentBlock from "./ItineraryHeaderContent/ItineraryContentBlock";

export interface ItinerariesTypes {
  map(arg0: (item: any, index: any) => JSX.Element): any;
  itinerary: string;
  desc: string;
  images: string[];
  facts: string;
  overnight: string;
}

interface ItineraryProps {
  itineraries: ItinerariesTypes;
}

const ItineraryBlock: FC<ItineraryProps> = ({ itineraries }) => {
  const render = useMemo(
    () =>
      itineraries?.map((item, index) => (
        <ItineraryContentBlock item={item} key={index} />
      )),
    [itineraries]
  )

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