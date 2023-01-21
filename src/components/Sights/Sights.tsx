import React from "react";
import scss from "./Sights.module.scss";
import Divider from "../Divider/Divider";
import MoreBlock from "../Divider/More block/MoreBlock";
import SightCard from "./SightCard/SightCard";
import { sightCards } from "../../constatnts/Sight/SightConsts";
import { StaticImageData } from "next/image";

export interface ISights {
  id: number;
  img: string | StaticImageData;
  title: string;
  tours: number;
  isEdgeRight?: boolean;
  isEdgeLeft?: boolean;
}

const Sights: React.FC = () => {
  const renderCards = React.useMemo(
    () => sightCards.map((item) => <SightCard key={item.id} {...item} />),
    []
  );
  return (
    <section className={scss.sights}>
        <Divider title="Sights" variant="light">
          <MoreBlock title="More Sights" />
        </Divider>
        <div className={scss.cards}>{renderCards}</div>
    </section>
  );
};

export default Sights;
