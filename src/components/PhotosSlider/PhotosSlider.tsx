import Image from "next/image";
import React, { FC, useMemo } from "react";
import Slider from "react-slick";
import { PhotosItem } from "../../constants/PhotosItems";
import Divider from "../Divider/Divider";
import PhotosItems from "./PhotosItems/PhotosItems";
import scss from "./PhotosSlider.module.scss";

interface ArrowProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const PhotosSlider: FC = () => {
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
    dotsClass: `slick-dots dots`,
  };

  const render = useMemo(
    () =>
      PhotosItem.map((item) => (
        <PhotosItems key={item.id} image={item.image} />
      )),
    []
  );

  return (
    <div className={scss.photosMain}>
      <Divider title="Photos" />
      <div id={scss.mainSliders}>
        <Slider {...settings}>{render}</Slider>
      </div>
    </div>
  );
};

export default PhotosSlider;