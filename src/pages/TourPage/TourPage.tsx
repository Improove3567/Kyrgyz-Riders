import React from 'react';
import TourAboutText from '../../components/TourAboutText/TourAboutText';
import Main from '../../components/main/Main';
import Header from '../../components/Header/Header';
import SendARequest from '../../components/SendARequest/SendArequest.tsx/SendARequest';
const TourPage = () => {

    return (
        <>  
            <Header/>
            <Main/>
            <TourAboutText />
            <SendARequest/>
            
        </>
    );
};

export default TourPage;