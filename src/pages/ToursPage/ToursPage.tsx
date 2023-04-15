import React, { useState } from 'react';
import FilterBlock from '../../components/FilterBlock/FilterBlock';
import scss from './ToursPage.module.scss'
import YourTours from '../../components/yourTour/YourTours';
import Footer from '../../components/Footer/Footer';
import FilterToursCardBlock from './FilterToursCard/FilterToursCardBlock';
import Header from '../../components/Header/Header';
import Main from '../../components/main/Main';
import { toursSliders } from '../../constants/MainSliders';



const ToursPage = () => {
  const [index, setIndex] = useState(0)

  const change = (value: number): void => {
    setIndex(value)
  }
  return (
    <>
      <div className={scss.toursPage}>
        <Header isMain={false} />
        <Main imgPageSliders={toursSliders} />
        <FilterBlock change={change} />
        <FilterToursCardBlock index={index} />
        <YourTours />
        <Footer />
      </div>

    </>
  );
};

export default ToursPage;