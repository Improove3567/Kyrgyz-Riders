import React, { useMemo } from "react";
import scss from './Filter.module.scss'
import { filterData } from "../../constants/FilterConst";
import { useRouter } from 'next/router'

const Filter: React.FC = () => {
  const router = useRouter();
  const { tour } = router.query

  const render = useMemo(() => (
    filterData.map((el) => (
      <p className={tour === el.id ? scss.active_title : scss.inactive_title} key={el.id} onClick={() => {
        router.push({
          pathname: '/',
          search: `?tour=${el.id}`
        }, undefined, { scroll: false })

      }}>
        {el.title}
      </p>
    ))
  ), [filterData, tour])
  return (
    <div className={scss.wrapper}>
      {render}
    </div>

  )
};

export default Filter;
