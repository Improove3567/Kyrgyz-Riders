import React, { useState } from 'react';
import FilterBlock from '../../components/FilterBlock/FilterBlock';
import Filter from './Filter sorted/Filter/Filter'
import DetailFilter from './DetailFIlter/FilterDetail/DetailFilter';
import scss from './ToursPage.module.scss'

const ToursPage = () => {
    const [index,setIndex] = useState(false)

    const change = () => {
        setIndex(!index)
        console.log('ff')
    }
    return (
        <div className={scss.div}>
            <FilterBlock change={change}/>
            {!index? <Filter/> : <DetailFilter/>}
        </div>
        
    );
};

export default ToursPage;