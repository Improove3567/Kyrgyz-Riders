import React, { useMemo } from "react";
import scss from "./FilterTour.module.scss";
import { filterData } from "../../constants/FilterTour";
import { useRouter } from "next/router";

const FilterTour: React.FC = () => {
  const router = useRouter();
  let { tour } = router.query;
  if (tour === undefined) {
    tour = "1";
  }

  const render = useMemo(
    () =>
      filterData.map((el) => (
        <p
          className={tour === el.title ? scss.active_title : scss.inactive_title}
          key={el.id}
          onClick={() => {
            const path = {
              pathname: "",
              search: `?tour=${el.title}`,
            }
            router.push(path, path, { shallow: true });
          }}
        >
          {el.title}
        </p>
      )),
    [router, tour]
  );
  return <div className={scss.wrapper}>{render}</div>;
};

export default FilterTour;
