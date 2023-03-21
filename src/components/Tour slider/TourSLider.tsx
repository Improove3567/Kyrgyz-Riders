import React, { useMemo, useEffect, useState } from "react";
import scss from './TourSlider.module.scss';
import SliderCard from "./SliderCard/SliderCard";
import Slider from "react-slick";
import Image from "next/image";
import Divider from "../Divider/Divider";
import FilterTour from "../Tour filter/FilterTour";
import useTours from "../../hooks/useTours";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const TourSlider: React.FC = () => {

  const { tours, getTours } = useTours()

  useEffect(() => {
    getTours()
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          initialSlide: 2,
          dots: true
        }
      },
      
      {
        breakpoint: 938,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 854,
        settings: {
          slidesToShow: 2.9,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 674,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 2
        }
      },
      
      {
        breakpoint: 644,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 608,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 1
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
        breakpoint: 410,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1
        }
      },
      
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1.1,
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
    dotsClass: `slick-dots dots`
  };

  const render = useMemo(
    () => tours.map((el, index ) => <SliderCard key={index} {...el} />),
    [tours]
  );


  return (
    <div className={scss.wrapper}>
      <div className="container">
      <Divider title="Select Tour">
        <FilterTour />
      </Divider>
      <div className="mainSliders">
        <Slider {...settings} >
          {render}
        </Slider>
      </div>
      </div>
    </div>


  );
};

export default TourSlider;
