import React, { useState } from "react";
import { FilterRenderType } from "../../constants/FilterBlockBtn";
import scss from "./FilterBlock.module.scss";

const FilterBlock = () => {
  const [active, setActive] = useState<number>(0);

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
          {FilterRenderType.map((el, index) => (
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
