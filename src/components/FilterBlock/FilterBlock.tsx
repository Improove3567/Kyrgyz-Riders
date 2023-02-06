import { useRouter } from "next/router";
import React from "react";
import scss from "./FilterBlock.module.scss";
import Link from "next/link";
const FilterBlock = () => {
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
            <Link href={"/types"}>Search by types</Link>
            <Link href={"/details"}>Search by details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBlock;
