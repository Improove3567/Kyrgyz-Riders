import React, { useMemo } from "react";
import scss from './Filter.module.scss'
import { filterData } from "../../constants/FilterConst";

const Filter: React.FC = () => {

  const render = useMemo(() => (
    filterData.map((el) => (
      <p key={el.title}>{el.title}</p>
    ))
  ), [filterData])
  return (
    <div className={scss.wrapper}>
      {render}
    </div>

  )
};

export default Filter;
