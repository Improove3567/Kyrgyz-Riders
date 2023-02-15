import React, { useEffect } from "react";
import Divider from "../../components/Divider/Divider";
import FilterTour from "../../components/Tour filter/FilterTour";
import Main from "../../components/main/Main";
import Sights from "../../components/Sights/Sights";
import YourTours from "../../components/yourTour/YourTours";
import OurTeam from "../../components/Our team/OurTeam";
import Feedback from "../../components/FeedBack/Feedback";
import TourSlider from "../../components/Tour slider/TourSLider";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { db } from "../../firebase/firebase-config";
import { collection, getDoc, doc } from "firebase/firestore";


const HomePage = () => {

  // const getFireStore = doc(db, "test", "nsN6Of7Stsch8oorYl2Y")

  // const getTests = async () => {
  //   const res = await getDoc(getFireStore)
  //   console.log(res.data());
  // }

  // useEffect(() => {
  //   getTests()
  // }, [])
  return (
    <>
      <Header isMain={true} />
      <Main />
      <TourSlider />
      <Sights />
      <Feedback />
      <OurTeam />
      <YourTours />
      <Footer />
    </>
  );
};

export default HomePage;
