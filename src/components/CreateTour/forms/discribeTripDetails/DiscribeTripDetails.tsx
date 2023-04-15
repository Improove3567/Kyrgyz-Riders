import React, { FC, useState, useMemo } from "react";
import scss from "./DiscribeTripDetails.module.scss";
import DiscribeList from "./DisribeList/DisribeList";

interface IDiscribe {
  dispatch: any;
}

const DiscribeTripDetails: React.FC<IDiscribe> = ({ dispatch }) => {
  const [discribeTripDetails, setTripDetsils] = useState([{
    id: 1,
    description: "Fast-paced: See as much as possible within your trip duration",
    active: true
  },
  {
    id: 2,
    description: "Moderately paced: A mix of longer stays  and quick stops",
    active: false
  },
  {
    id: 3,
    description: "Relaxed pace: Just keep it to a couple of destinations, with longer stays in each",
    active: false
  },])

  const handleClick = (id: any, state: any) => {
    const filtered: any = [...discribeTripDetails].find((comment) => comment.id === id);
    if (state === "toActive") {
      const arr = discribeTripDetails.map((el) => {
        if (el.id === filtered.id) {
          return { ...filtered, active: true };
        }
        return { ...el, active: false };
      });
      setTripDetsils(arr);
    } else {
      const arr = discribeTripDetails.map((el) => {
        if (el.id === filtered.id) {
          return { ...filtered, active: false };
        }
        return { ...el, active: false };
      });
      setTripDetsils(arr);
    }
  };

  const renderDescibe = useMemo(() => discribeTripDetails.map((item) => (
    <div className={scss.listItems} key={item.id}>
      <DiscribeList dispatch={dispatch} handleClick={handleClick} key={item.id} {...item} />
    </div>
  )), [discribeTripDetails, handleClick])
  return (
    <div className={scss.idealPaceMain}>
      <div className={scss.textWrapper}>
        <h2>Which of these describes the ideal pace for your trip?</h2>
      </div>
      {renderDescibe}
    </div>
  );
};

export default DiscribeTripDetails;