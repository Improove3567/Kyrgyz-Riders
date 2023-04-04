import React, { useEffect, useMemo } from "react";
import scss from "./main.module.scss";
import { MainLinks } from "../../constatnts/Main/HeaderConsts";
import Link from "next/link";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { SightTourArrProps } from "../../constants/SightTourBlock";

interface MainProps {
  imgPageSliders: Sliders[];
  teamDetail?: TeamDetailTypes;
  tourDetail?: SightTourArrProps | object | undefined | any;
}
interface Sliders {
  className: string;
  title?: string;
}
interface TeamDetailTypes {
  image?: string;
  name?: string;
  lastName?: string;
  speciality?: string;
  description?: string;
}

const Main: React.FC<MainProps> = ({
  imgPageSliders,
  teamDetail,
  tourDetail,
}) => {
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
              <div
                className={
                  route != "/tour/[id]" && route != "/our-team/[id]"
                    ? scss.imgText
                    : scss.imgTextTour
                }
              >
                {route == "/"
                  ? "Kyrgyz Riders"
                  : route == "/tours"
                  ? "Tours"
                  : route == "/sights"
                  ? "sights"
                  : route == "/travel"
                  ? "Travel Stories"
                  : route == "/aboutus"
                  ? "About Us"
                  : route == "/blogAndNews"
                  ? "BLOG & NEWS"
                  : route == "/our-team/[id]"
                  ? `${teamDetail?.name} ${teamDetail?.lastName}`
                  : route == "/tour/[id]"
                  ? `Highlights around ${tourDetail?.title} ${tourDetail?.tourInfo?.duration?.days} ${tourDetail?.tourInfo?.duration?.durationType}`
                  : ""}
              </div>
              {renderBtns}
            </div>
          </div>
        </main>
      )),
    [imgPageSliders, renderBtns, teamDetail, tourDetail]
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
