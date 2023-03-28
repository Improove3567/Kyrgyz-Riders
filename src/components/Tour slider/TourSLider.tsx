import React, { useMemo, useEffect, useState } from "react";
import scss from "./TourSlider.module.scss";
import SliderCard from "./SliderCard/SliderCard";
import Slider from "react-slick";
import Image from "next/image";
import Divider from "../Divider/Divider";
import FilterTour from "../Tour filter/FilterTour";
import useTours from "../../hooks/useTours";
import Preloader from "../Preloader/Preloader";
import MoreBlock from "../Divider/More block/MoreBlock";

interface ArrowProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const TourSlider: React.FC = () => {
  const { tours, getTours, isLoading } = useTours();

  useEffect(() => {
    getTours();
  }, []);

  function SampleNextArrow({ onClick }: ArrowProps) {
    return (
      <div className={scss.nextArrow_container} onClick={onClick}>
        <Image src="/images/Vector.svg" alt="NextArrow" width="6" height="12" />
      </div>
    );
  }

  function SamplePrevArrow({ onClick }: ArrowProps) {
    return (
      <div className={scss.prevArrow_container} onClick={onClick}>
        <Image src="/images/Vector.svg" alt="PrevArrow" width="6" height="12" />
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1
        }
      }
    ],
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
    dotsClass: `slick-dots dots`,
  };

  const render = useMemo(
    () => tours.map((el, index) => <SliderCard key={index} {...el} />),
    [tours]
  );

  if (isLoading) return <Preloader full />

  return (
    <div className={scss.wrapper}>
      <div className="container">
        <div className={scss.containerDivider}>
          <Divider title="Select Tour">
            <>
              <FilterTour />
              <div className={scss.selectsArrow}>
                <MoreBlock />
              </div>
            </>
          </Divider>
        </div>
        <div className="mainSliders">
          <Slider {...settings}>{render} {render}</Slider>
        </div>
      </div>
    </div>
  );
};

export default TourSlider;
