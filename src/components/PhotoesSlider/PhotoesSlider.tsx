import Image from "next/image";
import React, { FC, useMemo } from "react";
import Slider from "react-slick";
import { PhotoesItem } from "../../constants/PhotoesItems";
import Divider from "../Divider/Divider";
import PhotoesItems from "./PhotoesItems/PhotoesItems";
import scss from "./PhotoesSlider.module.scss";
import useTours from "../../hooks/useTours";

interface ArrowProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

interface PhotosProps {
  photos: Array<string>;
}

const PhotosSlider: FC<PhotosProps> = ({ photos }) => {
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
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          dots: false
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

  const renderPhotoesItems = useMemo(
    () =>
    photos?.map((item) => (
        <PhotoesItems image={item} key={item} />
      )),
    [photos]
  );

  return (
    <div className={scss.photoesMain}>
      <div className="container">
      <Divider title="Pictures" />
      <div className="mainSliders">
        <Slider {...settings}>
          {renderPhotoesItems}
        </Slider>
      </div>
      </div>
    </div>
  );
};

export default PhotosSlider;