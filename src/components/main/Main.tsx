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

const mainSlide = [
  {
    className: scss.main,
  },
]
const toursSlides = [
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
]



interface MainProps {
  background?: string;
}

const Main: React.FC<MainProps> = ({ background }) => {
  const  {route} = useRouter();
  const [slides, setSlides] = useState<typeof imgList>([]);
  
  useEffect(() => {
    if (route === '/'){
      setSlides(mainSlide as typeof imgList)
    } else if(route === '/tours') {
      setSlides(toursSlides)
    }
  }, [route])
  
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
    arrows: false,
    slidesToScroll: 1,
    className: "slides",
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  
  const sliderList = useMemo(
    () => slides.map((el) => (
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
    [slides, renderBtns]
  );

  const main = useMemo(() => (
    <main className={background}>
      <div className="container">
        <div className={scss.buttons}>
          {
            <Image className={scss.imgText} src={`/images/MainTexts/${background}.svg`} width={100} height={100} alt="text" />
          }
          {renderBtns}
        </div>
      </div>
    </main>
  ), [background, renderBtns])

  return (
    <div className="main">
      <Slider {...settings} className={scss.slider}>
        {background ? main : sliderList}
      </Slider>
    </div>
  );
};

export default Main;
