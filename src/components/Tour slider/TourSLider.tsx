import React, { useMemo } from "react";
import scss from './TourSlider.module.scss';
import { CardList } from "../../constants/TourSlider";
import SliderCard from "./SliderCard/SliderCard";
import Slider from "react-slick";
import Image from "next/image";

interface ArrowProps {
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const TourSlider: React.FC = () => {
  const [arrow, setArrow] = React.useState(true);

  function SampleNextArrow({ onClick }: ArrowProps) {
    return (
      <div
        className={arrow ? scss.nextArrow_container : scss.hide}
        onClick={onClick}
      >
        <Image
          src="/images/arrow.svg"
          className={scss.nextArrow}
          alt="NextArrow"
          width="25"
          height="25"
          onClick={() => setArrow(false)}
        />
      </div>
    );
  }

  function SamplePrevArrow({ onClick }: ArrowProps) {
    return (
      <div
        className={arrow ? scss.hide : scss.prevArrow_container}
        onClick={onClick}
      >
        <Image
          src="/images/arrow.svg"
          className={scss.prevArrow}
          alt="PrevArrow"
          width="25"
          height="25"
          onClick={() => setArrow(true)}
        />
      </div>
    );
  }

  const settings = {
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    // variableWidth: true,
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
  };

  const render = useMemo(
    () => CardList.map((el) => <SliderCard key={el.title} {...el} />),
    []
  );

  return (
    <div className={scss.wrapper}>
        <Slider {...settings}>
          {render}
        </Slider>
      </div>


  );
};

export default TourSlider;
