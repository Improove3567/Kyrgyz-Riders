import React, { useEffect, useState } from "react";
import { FilterRenderType } from "../../constants/FilterBlockBtn";
import scss from "./FilterBlock.module.scss";

interface Function {
  change: (value: number) => void
}

const FilterBlock = ({ change }: Function) => {
  const [active, setActive] = useState<number>(0);
  const [filterData, setFilterData] = useState([])


  const click = (value: number) => {
    change(value)
  }

  return (
    <div className={scss.filter}>
      <div className="container">
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
                onClick={() => {
                  setActive(index)
                  click(index)
                }}
                className={active === index ? scss.active : scss.nonActive}
                key={el.id}
              >
                {el.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBlock;
