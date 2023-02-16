import React from "react";
import Filter from "../Filter sorted/Filter/Filter";
import TourFilterCard from "../../../components/TourFilterCard/TourFilterCard";
import scss from './FilterCardBlock.module.scss'

interface Select {
    index : number
}

const FilterToursCardBlock: React.FC<Select> = ({index}) => {
    return(
        <div className={scss.container}>
            <Filter value={index}  />
            <TourFilterCard />
        </div>
    )
}

export default FilterToursCardBlock