import React, { useMemo } from "react";
import scss from './TourSlider.module.scss';
import { CardList } from "../../constants/TourSlider";
import SliderCard from "./SliderCard/SliderCard";
import Slider from "react-slick";
import Image from "next/image";
import Divider from "../Divider/Divider";
import FilterTour from "../Tour filter/FilterTour";

interface ArrowProps {
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const TourSlider: React.FC = () => {

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
    () => CardList.map((el) => <SliderCard key={el.title} {...el} />),
    []
  );

  return (
    <div className={scss.wrapper}>
      <Divider title="Select Tour" variant="light">
        <FilterTour />
      </Divider>
      <Slider {...settings} >
        {render}
      </Slider>
    </div>


  );
};

export default TourSlider;
