import React from "react";
import Divider from "../Divider/Divider";
import MoreBlock from "../Divider/More block/MoreBlock";
import scss from "./feedback.module.scss";
import FeedbackCarousel from "./carousel/FeedbackCarousel";

export interface IFeedback {
  id: number;
  title: string;
  country: string;
  stars: number;
  desc: string;
  link: string;
  img:string;
}


const Feedback: React.FC = () => {

  return (
    <section className={scss.section}>
      <Divider title="Travelers Love Kyrgyz Riders" variant="light">
        <MoreBlock title="More reviews on Tripadvisor" />
      </Divider>
      <FeedbackCarousel />
    </section>
  );
};

export default Feedback;
