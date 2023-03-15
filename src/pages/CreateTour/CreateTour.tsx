import React from 'react';
import Main from '../../components/main/Main';
import CreateTour from '../../components/CreateTour/CreateTour';
import Header from '../../components/Header/Header';
import { OneSightSlider } from '../../constants/MainSliders';

const CreateTourPage = () => {

    return (
        <>
            <Header />
            <CreateTour />
        </>
    );
};

export default CreateTourPage;