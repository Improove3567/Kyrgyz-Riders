import React, { useMemo } from "react";
import scss from "./main.module.scss";
import { MainLinks } from "../../constatnts/Main/HeaderConsts";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";

interface MainProps {
  background?: string;
}

const Main: React.FC<MainProps> = ({ background }) => {

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
      title: "/images/MainTexts/tours.svg"
    },
    {
      className: "sights",
      title: "/images/MainTexts/sights.svg"
    },
    {
      className: "travel",
      title: "/images/MainTexts/travel.svg"
    },
    {
      className: "about",
      title: "/images/MainTexts/about.svg"
    },
    {
      className: "blog",
      title: "/images/MainTexts/blog.svg"
    },
  ]
  let test = background;
  console.log(test)
  const renderSlider = useMemo(
    () => imgList.map((el) => (
      <main className={el.className} key={el.className}>
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
    [imgList, renderBtns]
  );

  const render = useMemo(() => (
    <main className={background}>
      <div className="container">
        <div className={scss.buttons}>
          {
            <Image className={scss.imgText} src={`/images/MainTexts/${background}.svg`} width={100} height={100} alt={""} />
          }
          {renderBtns}
        </div>
      </div>
    </main>
  ), [background, renderBtns])

  return (
    <div className="main">
      <Slider {...settings} className={scss.slider}>
        {background ? render : renderSlider}
      </Slider>
    </div>
  );
};

export default Main;
