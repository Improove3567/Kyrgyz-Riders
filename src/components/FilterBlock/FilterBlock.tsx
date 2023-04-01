import React, { useEffect, useState } from "react";
import { FilterRenderType } from "../../constants/FilterBlockBtn";
import scss from "./FilterBlock.module.scss";
import Filter from "../../pages/ToursPage/Filter sorted/Filter/Filter";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

interface Function {
  change: (value: number) => void
}

const FilterBlock = ({ change }: Function) => {
  const [active, setActive] = useState<number>(0);
  const [filterData, setFilterData] = useState([])


  const click = (value: number) => {
    change(value)
  }

  useEffect(() => {
    request()
  }, [])

  const q = query(collection(db, "tours"), where("title", "==", 'Osh'));

  const request = async () => {
    const data = []
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // setFilterData(doc.data());
    });
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
