import React, { useEffect, useMemo, useState } from "react";
import scss from "./main.module.scss";
import { MainLinks } from "../../constatnts/Main/HeaderConsts";
import Link from "next/link";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { imgList } from "../../constants/MainSliders";
import { mainSlider } from "../../constants/MainSliders";




interface MainProps {
  imgPageSliders: Sliders[];
}
interface Sliders{
  className : string;
  title?: string;
}

const Main: React.FC<MainProps> = ({ imgPageSliders }) => {
  const { route } = useRouter();
  


  const renderBtns = React.useMemo(
    () =>
      MainLinks.map((item) => (
        <Link href={item.link} key={item.id} className={scss.button}>
          {item.title}
        </Link>
      )),
    []
  );

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    className: "slides",
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const sliderList = useMemo(
    () =>
      imgPageSliders.map((el) => (
        <main className={el.className} key={el.className}>
          <div className="container">
            <div className={scss.buttons}>
              {el.title && (
               <div className={route != "/tour" ? scss.imgText : scss.imgTextTour }>
                {el.title}
               </div>
              )}
              {renderBtns}
            </div>
          </div>
        </main>
      )),
    [imgPageSliders, renderBtns]
  );

  

  return (
    <div className="main">
      <Slider {...settings} className={scss.slider}>
        {sliderList}
      </Slider>
    </div>
  );
};

export default Main;
