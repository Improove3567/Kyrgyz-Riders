import React, { useState } from 'react';
import FilterBlock from '../../components/FilterBlock/FilterBlock';
import Filter from './Filter sorted/Filter/Filter'
import DetailFilter from './DetailFIlter/FilterDetail/DetailFilter';
import scss from './ToursPage.module.scss'
import TourFilterCard from '../../components/TourFilterCard/TourFilterCard';

const ToursPage = () => {
    const [index,setIndex] = useState<number>(0)

    const change = (value:number): void => {
        setIndex(value)
    }
    return (
        <>
        <div className={scss.div}>
            <FilterBlock change={change}/>
            {index == 0? <Filter/> : <DetailFilter/>}
        </div>
        <FilterBlock/>
        <TourFilterCard/>
        </>
    );
};

export default ToursPage;