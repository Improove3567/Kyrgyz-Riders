import React, { useEffect } from "react";
import scss from "./Sights.module.scss";
import Divider from "../Divider/Divider";
import MoreBlock from "../Divider/More block/MoreBlock";
import SightCard from "./SightCard/SightCard";
import useSights from "../../hooks/useSights";
import Preloader from "../Preloader/Preloader";
import Link from "next/link";

export interface ISights {
  id?: number;
  img?: string | undefined;
  title?: string;
  tours?: Array<string>;
  isEdgeRight?: boolean;
  isEdgeLeft?: boolean;
  tid?: string;
}

const Sights: React.FC = () => {
  const { sights, getSights, isLoading } = useSights();


  useEffect(() => {
    getSights();
  }, []);

  const sightList = sights.slice(0, 4)

  const renderCards = React.useMemo(
    () => sightList.map((item, index) => <SightCard key={index} {...item} />),
    [sights]
  );

  if (isLoading) return <Preloader full />

  return (
    <section className={scss.sights}>
      <div className="container">
        <Divider title="Sights" variant="dark">
          <Link href="/sights">
            <MoreBlock title="More Sights" />
          </Link>
        </Divider>
        <div className={scss.cards}>{renderCards}</div>
      </div>
    </section>
  );
};

export default Sights;
