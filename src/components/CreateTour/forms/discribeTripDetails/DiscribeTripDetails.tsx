import React, { FC } from "react";
import scss from "./DiscribeTripDetails.module.scss";
import DiscribeList from "./DisribeList/DisribeList";
import { DiscribeTripDetailsData } from "../../../../constants/DiscribeTripDetails";

const DiscribeTripDetails: React.FC = () => {
  return (
    <div className={scss.idealPaceMain}>
      <div className={scss.textWrapper}>
        <h2>Which of these describes the ideal pace for your trip?</h2>
      </div>

      {DiscribeTripDetailsData.map((item) => (
        <div className={scss.listItems} key={item.id}>
          <DiscribeList key={item.id} {...item} />
        </div>
      ))}
    </div>
  );
};

export default DiscribeTripDetails;