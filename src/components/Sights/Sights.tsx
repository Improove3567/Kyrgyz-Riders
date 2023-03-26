import React, { useEffect } from "react";
import scss from "./Sights.module.scss";
import Divider from "../Divider/Divider";
import MoreBlock from "../Divider/More block/MoreBlock";
import SightCard from "./SightCard/SightCard";
import useSights from "../../hooks/useSights";

export interface ISights {
  id?: number;
  img?: string | undefined;
  title?: string;
  tours?: Array<string>;
  isEdgeRight?: boolean;
  isEdgeLeft?: boolean;
}

const Sights: React.FC = () => {
  const { sights, getSights } = useSights();

  useEffect(() => {
    getSights();
  }, []);

  const sightList = sights.slice(0, 4)

  const renderCards = React.useMemo(
    () => sightList.map((item, index) => <SightCard key={index} {...item} />),
    [sights]
  );
  return (
    <section className={scss.sights}>
      <div className="container">
        <Divider title="Sights" variant="dark">
          <MoreBlock title="More Sights" />
        </Divider>
        <div className={scss.cards}>{renderCards}</div>
      </div>
    </section>
  );
};

export default Sights;
