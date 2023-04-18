import React, {  useMemo } from "react";
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
  sightsDetail?: string;
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
  sightsDetail,
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
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  const titles =
    route == "/our-team/[id]"
      ? `${teamDetail?.name} ${teamDetail?.lastName}`
      : route == "/tour/[id]"
        ? ` ${tourDetail?.title} ${tourDetail?.tourInfo?.duration?.days} days`
        : route == "/sight/[id]"
          ? sightsDetail
          : "";
  const sliderList = useMemo(
    () =>
      imgPageSliders.map((el) => (
        <main className={el.className} key={el.className}>
          <div className="container">
            <div className={scss.buttons}>
              <div
                className={
                  route != "/tour/[id]" &&
                    route != "/our-team/[id]" &&
                    route != "/sight/[id]"
                    ? scss.imgText
                    : scss.imgTextTour
                }
              >
                {titles ? titles : el.title}
              </div>
              {renderBtns}
            </div>
          </div>
        </main>
      )),
    [imgPageSliders, renderBtns, teamDetail, tourDetail, sightsDetail]
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
