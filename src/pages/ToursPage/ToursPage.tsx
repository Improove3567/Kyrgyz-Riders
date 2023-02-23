import React, { useState } from 'react';
import FilterBlock from '../../components/FilterBlock/FilterBlock';
import Filter from './Filter sorted/Filter/Filter'
import scss from './ToursPage.module.scss'
import TourFilterCard from '../../components/TourFilterCard/TourFilterCard';
import YourTours from '../../components/yourTour/YourTours';
import Footer from '../../components/Footer/Footer';
import FilterToursCardBlock from './FilterToursCard/FilterToursCardBlock';
import Header from '../../components/Header/Header';
import Main from '../../components/main/Main';



const ToursPage = () => {
    const [index, setIndex] = useState<number>(0)


    const change = (value: number): void => {
        setIndex(value)
    }
    return (
        <>
            <div className={scss.TsPage}>
                <Header isMain={true} />
                <Main />
                <FilterBlock change={change} />
                <FilterToursCardBlock index={index} />
                <YourTours />
                <Footer />

            </div>
        </>
    );
};

export default ToursPage;