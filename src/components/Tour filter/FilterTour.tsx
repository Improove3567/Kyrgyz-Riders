import React, { useMemo } from "react";
import scss from './FilterTour.module.scss';
import { filterData } from "../../constants/FilterTour";
import { useRouter } from 'next/router'

const FilterTour: React.FC = () => {
  const router = useRouter();
  const { tour } = router.query

  const render = useMemo(() => (
    filterData.map((el) => (
      <p className={tour === el.id ? scss.active_title : scss.inactive_title} key={el.id} onClick={() => {
        el.id === '9' ? (
          router.push({
            pathname: '/',
            search: "?tours"
          })
        ) : (
          router.push({
            pathname: '/',
            search: `?tour=${el.id}`
          })
        )

      }}>
        {el.title}
      </p>
    ))
  ), [router, tour])
  return (
    <div className={scss.wrapper}>
      {render}
    </div>

  )
};

export default FilterTour;
