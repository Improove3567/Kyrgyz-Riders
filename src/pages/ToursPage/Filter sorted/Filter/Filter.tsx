import React from "react";
import Select from "../Select/Select";
import css from "./Filter.module.scss";
import { Tours } from "../../../../constants/FilterToursBlock";
import { DetailTours } from "../../../../constants/FilterToursBlock";

interface Index {
  value: number;
  setTour: (value: string) => void;
  setDuration: (value: string) => void;
}

const Filter: React.FC<Index> = ({ value, setTour, setDuration }) => {
  return (
    <div className={css.filter}>
      <div className={value == 1 ? "hideSelect" : ""}>
        {Tours.map((el) => (
          <Select {...el} key={el.id} valueIndex={value} setTour={setTour} setDuration={setDuration} />
        ))}
      </div>
      <div className={value == 0 ? "hideSelect" : ""}>
        {DetailTours.map((el) => (
          <Select {...el} key={el.id} valueIndex={value} setTour={setTour} setDuration={setDuration} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
