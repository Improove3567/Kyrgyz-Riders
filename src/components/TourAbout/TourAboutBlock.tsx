import React, { FC, useMemo } from "react";
import scss from "./TourAbout.module.scss";
import TourAboutCard from "./TourAboutCard/TourAboutCard";
import TourInfoTypes from "../../constants/SightTourBlock";
import { SightTourArrProps } from "../../constants/SightTourBlock";
import Divider2 from "../Divider2/Divider2";
import MoreBlock2 from "../Divider2/MoreBlock/MoreBlock2";
interface TourAboutProps {
  tour: SightTourArrProps | object | undefined | any;
}
interface TourAboutArrProps {
  title?: string;
  text?: string | Array<string>;
  isSmall?: boolean;
}

const TourAbout: FC<TourAboutProps> = ({ tour }) => {
  const TourAboutArr: TourAboutArrProps[] = [
    {
      title: "Time of year",
      text: tour?.tourInfo?.time,
      isSmall: true,
    },
    {
      title: "Tour category",
      text: tour?.tourInfo?.category,
      isSmall: true,
    },
    {
      title: "Duration",
      text:
        tour?.tourInfo?.duration.days +
        " " +
        tour?.tourInfo?.duration.durationType,
      isSmall: true,
    },
    {
      title: "Itinerary",
      text: tour?.tourInfo?.itinerary,
    },
    {
      title: "Accommodation",
      text: tour?.tourInfo?.accommodation,
    },
    {
      title: "What to bring?",
      text: tour?.tourInfo?.bringThings,
    },
  ];

  const renderCard = useMemo(
    () => TourAboutArr.map((el) => <TourAboutCard {...el} key={el.title} />),
    [tour]
  );
  return (
    <div className={scss.content}>
      <div className="container">
        <div className={scss.containerDivider}>
          <Divider2
            title={`Tours / Highlights around ${tour?.title}`}
            variant="light"
          >
            <MoreBlock2 title={"More tours"} />
          </Divider2>
        </div>
        <div className={scss.wrapper}>{renderCard}</div>
      </div>
    </div>
  );
};

export default TourAbout;
