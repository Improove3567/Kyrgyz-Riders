import React, { useMemo, useEffect, useState } from "react";
import scss from './TourSlider.module.scss';
import { CardList } from "../../constants/TourSlider";
import SliderCard from "./SliderCard/SliderCard";
import Slider from "react-slick";
import Image from "next/image";
import Divider from "../Divider/Divider";
import FilterTour from "../Tour filter/FilterTour";
import { db } from "../../firebase/firebase-config";
import { collection, getDocs, doc, query, DocumentData, SnapshotOptions } from "firebase/firestore";

interface ArrowProps {
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const TourSlider: React.FC = () => {

  const touSliderData: ((options?: SnapshotOptions | undefined) => DocumentData)[] = []

  const getFireStore = query(collection(db, "slider-tour-data"))

  let [test, setTest] = useState<any | undefined>([])
  const getTests = async () => {
    const querySnapshot = await getDocs(getFireStore);
    querySnapshot.forEach((doc: any) => touSliderData.push(doc.data()));
    setTest(touSliderData);
  }

  useEffect(() => {
    getTests();
  }, [])


  function SampleNextArrow({ onClick }: ArrowProps) {
    return (
      <div
        className={scss.nextArrow_container}
        onClick={onClick}
      >
        <Image
          src="/images/Vector.svg"
          alt="NextArrow"
          width="6"
          height="12" />

      </div>
    );
  }

  function SamplePrevArrow({ onClick }: ArrowProps) {
    return (
      <div
        className={scss.prevArrow_container}
        onClick={onClick}
      >
        <Image
          src="/images/Vector.svg"
          alt="PrevArrow"
          width="6"
          height="12"
        />
      </div>
    );
  }
  console.log(test);


  const settings = {
    className: "center",
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    nextArrow: (
      <SampleNextArrow
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        onClick={function (
          event: React.MouseEvent<HTMLDivElement, MouseEvent>
        ): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
    dotsClass: `slick-dots dots`
  };

  const render = useMemo(
    () => test.map((el: any) => <SliderCard key={"test"} {...el} />),
    []
  );


  return (
    <div className={scss.wrapper}>
      <Divider title="Select Tour" variant="light">
        <FilterTour />
      </Divider>
      <div className="mainSliders">
        <Slider {...settings} >
          {render}
        </Slider>
      </div>
    </div>


  );
};

export default TourSlider;
