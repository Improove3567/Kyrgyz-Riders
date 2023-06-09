import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scss from "./feedBackCarousel.module.scss";
import Image from "next/image";
import FeedBackCard from "./FeedBackCard";
import useFeedback from "../../../hooks/useFeedback";
import Preloader from "../../Preloader/Preloader";

interface ArrowProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

interface FeedbackCI {
  change: (desc: string | undefined) => void
}

const FeedbackCarousel: React.FC<FeedbackCI> = ({ change }) => {
  const { feedback, getFeedback, isLoading } = useFeedback();

  useEffect(() => {
    getFeedback();
  }, []);

  const render = React.useMemo(
    () => feedback.map((item, index) => <FeedBackCard key={index} {...item} change={change} />),
    [feedback]
  );

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
    arrows: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: "center",
    variableWidth: true,
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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  if (isLoading) return <Preloader full />;
  return (
    <div className={scss.container}>
      <div className="mainSliders">
        <Slider {...settings}>{render}</Slider>
      </div>
    </div>
  );
};

export default FeedbackCarousel;
