import React, { useState } from "react";
import scss from "./FilterBlock.module.scss";

interface IArr {
  id: number;
  text: string;
}
const FilterBlock = () => {
  const [active, setActive] = useState<number>(0);
  const category: IArr[] = [
    {
      text: "Search by tour type",
      id: 0,
    },
    {
      text: "Search by details",
      id: 1,
    },
  ];
  return (
    <div className={scss.filter}>
      <div className={scss.block}>
        <div className={scss.filters}>
          <div className={scss.arrows}>
            <span></span>
          </div>
          <h1>Filters</h1>
        </div>
        <div className={scss.types}>
          {category.map((el, index) => (
            <button
              onClick={() => setActive(index)}
              className={active === index ? scss.active : scss.nonActive}
              key={el.id}
            >
              {el.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBlock;
