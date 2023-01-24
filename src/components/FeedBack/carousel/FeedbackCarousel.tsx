import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scss from "./feedBackCarousel.module.scss";
import Image from "next/image";
import FeedBackCard from "./FeedBackCard";
import { FeedBackCards } from "../../../constants/FeedBack";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

interface ArrowProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const FeedbackCarousel = () => {
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
    slidesToShow: 3,
    slidesToScroll: 3,
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
  };

  const render = React.useMemo(
    () => FeedBackCards.map((item) => <FeedBackCard key={item.id} {...item} />),
    []
  );

  return (
    <div className={scss.container}>
      <Slider {...settings}>{render}</Slider>
    </div>
  );
};

export default FeedbackCarousel;
