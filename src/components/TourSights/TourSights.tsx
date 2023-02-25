import React, { useEffect } from "react";
import useSights from "../../hooks/useSights";
import Divider from "../Divider/Divider";
import SightCard from "../Sights/SightCard/SightCard";
import scss from "./TourSights.module.scss";
const TourSights = () => {
  const { sights, getSights } = useSights();

  useEffect(() => {
    getSights();
  }, []);

  const renderCards = React.useMemo(
    () => sights.map((item: any) => <SightCard key={item.id} {...item} />),
    [sights]
  );
  return (
    <div className={scss.Toursights}>
        <div className={scss.container}>
            
      <Divider title="Sights visited on this tour" variant="dark" />
      <div className={scss.Tourcards}>{renderCards}</div>
        </div>
    </div>
  );
};

export default TourSights;
