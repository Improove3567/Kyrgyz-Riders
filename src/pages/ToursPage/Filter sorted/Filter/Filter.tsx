import React from "react";
import Select from "../Select/Select";
import css from "./Filter.module.scss";
import { Tours } from "../../../../constants/FilterToursBlock";
import { DetailTours } from "../../../../constants/FilterToursBlock";

interface Index {
  value: number;
}

const Filter: React.FC<Index> = ({ value }) => {
  return (
    <div className={css.filter}>
      <div className={value == 1 ? "hideSelect" : css.selects}>
        {Tours.map((el) => (
          <Select {...el} key={el.id} valueIndex={value} />
        ))}
      </div>
      <div className={value == 0 ? "hideSelect" : css.selects}>
        {DetailTours.map((el) => (
          <Select {...el} key={el.id} valueIndex={value} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
