import React, { useEffect, useMemo } from "react";
import SightCard from "./SightsCard/SightsCard";
import scss from "./SightsBlock.module.scss";
import Divider from "../Divider/Divider";
import useSights from "../../hooks/useSights";
import Preloader from "../Preloader/Preloader";

const SightsBlock: React.FC = () => {
  const { getSights, sights, isLoading } = useSights();

  useEffect(() => {
    getSights();
  }, []);
  const sightsList = useMemo(
    () => sights.map((el, index) => <SightCard {...el} key={index} />),
    [sights]
  );

  if (isLoading) return <Preloader full />;

  return (
    <div className={scss.wrapper}>
      <div className="container">
        <Divider title={"Sights"} />
        <div className={scss.mainCardContainer}>
          <div className={scss.card_container}>{sightsList}</div>
          <div className={scss.button}>
            <p>More Sights</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SightsBlock;
