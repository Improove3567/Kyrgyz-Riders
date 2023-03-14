import React, { useEffect } from "react";
import scss from "./Sights.module.scss";
import Divider from "../Divider/Divider";
import MoreBlock from "../Divider/More block/MoreBlock";
import SightCard from "./SightCard/SightCard";
import useSights from "../../hooks/useSights";

export interface ISights {
  id: number;
  img: string | undefined | any;
  title: string;
  tours: Array<string>;
  isEdgeRight?: boolean;
  isEdgeLeft?: boolean;
}

const Sights: React.FC = () => {
  const { sights, getSights } = useSights();

  useEffect(() => {
    getSights();
  }, []);

  const renderCards = React.useMemo(
    () => sights.map((item: any) => <SightCard key={item.id} {...item} />),
    [sights]
  );
  return (
    <section className={scss.sights}>
      <div className="conteiner">
        <Divider title="Sights" variant="dark">
          <MoreBlock title="More Sights" />
        </Divider>
        <div className={scss.cards}>{renderCards}</div>
      </div>
    </section>
  );
};

export default Sights;
