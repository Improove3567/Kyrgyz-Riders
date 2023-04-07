import React from 'react';
import CreateTour from '../../components/CreateTour/CreateTour';
import Header from '../../components/Header/Header';
import GroupSize from '../../components/CreateTour/subcomponents/GroupSize';

const CreateTourPage = () => {

    return (
        <>
            <Header />
            <CreateTour><GroupSize /></CreateTour>
        </>
    );
};

export default CreateTourPage;