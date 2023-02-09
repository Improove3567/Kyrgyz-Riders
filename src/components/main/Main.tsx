import React, { useMemo } from "react";
import scss from "./main.module.scss";
import { MainLinks } from "../../constatnts/Main/HeaderConsts";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";

const Main: React.FC = () => {

  const renderBtns = React.useMemo(
    () =>
      MainLinks.map((item) => (
        <Link href={item.link} key={item.id}>
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
    arrows: true,
    slidesToScroll: 1,
    className: "slides",
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  const imgList = [
    {
      className: scss.main,
    },
    {
      className: scss.tours,
      title: "/images/Tours_text.svg"
    },
    {
      className: scss.sights,
      title: "/images/Sights_text.svg"
    },
    {
      className: scss.travel,
      title: "/images/Travel_text.svg"
    },
    {
      className: scss.about,
      title: "/images/About_text.svg"
    },
    {
      className: scss.blog,
      title: "/images/test.svg"
    },
  ]

  const render = useMemo(
    () => imgList.map((el) => (
      <main className={el.className}>
        <div className="container">
          <div className={scss.buttons}>
            {
              el.title && <Image className={scss.imgText} src={el.title} width={100} height={100} alt={""} />
            }
            {renderBtns}
          </div>
        </div>
      </main>
    )),
    []
  );

  return (
    <div className="main">
      <Slider {...settings} className={scss.slider}>
        {render}
      </Slider>
    </div>
  );
};

export default Main;
