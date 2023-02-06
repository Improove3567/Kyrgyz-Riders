import { useRouter } from "next/router";
import React from "react";
import scss from "./FilterBlock.module.scss";
import Link from "next/link";
const FilterBlock = () => {
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
            <button>Search by types</button>
            <button>Search by details</button>
          </div>
      </div>
    </div>
  );
};

export default FilterBlock;
