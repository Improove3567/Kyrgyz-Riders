import React, { useEffect, useMemo, useState } from "react";
import scss from "./main.module.scss";
import { MainLinks } from "../../constatnts/Main/HeaderConsts";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import { useRouter } from "next/router";

const imgList = [
  {
    className: scss.tours,
    title: "/images/MainTexts/tours.svg",
  },
  {
    className: "sights",
    title: "/images/MainTexts/sights.svg",
  },
  {
    className: "travel",
    title: "/images/MainTexts/travel.svg",
  },
  {
    className: "about",
    title: "/images/MainTexts/about.svg",
  },
  {
    className: "blog",
    title: "/images/MainTexts/blog.svg",
  },
];

const mainSlide = [
  {
    className: scss.main,
  },
];
const toursSlides = [
  {
    className: scss.tours,
    title: "Tours",
  },
  {
    className: "sights",
    title: "Tours",
  },
  {
    className: "travel",
    title: "Tours",
  },
];


const tourSlide = [
  {
    className: scss.tour,
    title: "Highlights of Kyrgyzstan 7 days"
  },
]

const sightSlide = [
  {
    className: "sights",
    title: "Sights",
  },
]



interface MainProps {
  backgroundClassName?: string;
}

const Main: React.FC<MainProps> = ({ backgroundClassName }) => {
  const { route } = useRouter();
  const [slides, setSlides] = useState<typeof imgList>([]);

  useEffect(() => {
    if (route === "/") {
      setSlides(mainSlide as typeof imgList);
    } else if (route === "/tours") {
      setSlides(toursSlides);
    }else if ( route == "/tour"){
      setSlides(tourSlide)
    }else if (route == "/sights"){
      setSlides(sightSlide)
    }
  }, [route]);

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
      slides.map((el) => (
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
    [slides, renderBtns]
  );

  const main = useMemo(
    () => (
      <main className={backgroundClassName}>
        <div className="container">
          <div className={scss.buttons}>
            {
               <div className={scss.imgText}>
               
              </div>
            }
            {renderBtns}
          </div>
        </div>
      </main>
    ),
    [backgroundClassName, renderBtns]
  );

  return (
    <div className="main">
      <Slider {...settings} className={scss.slider}>
        {backgroundClassName ? main : sliderList}
      </Slider>
    </div>
  );
};

export default Main;
