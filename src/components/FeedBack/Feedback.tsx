import React from "react";
import Divider from "../Divider/Divider";
import MoreBlock from "../Divider/More block/MoreBlock";
import scss from "./feedback.module.scss";
import FeedbackCarousel from "./carousel/FeedbackCarousel";

export interface IFeedback {
  country?: string;
  stars?: number;
  desc?: string;
  link?: string;
  img?: string;
  name?: string;
  lastName?: string;
}

const Feedback: React.FC = () => {

  return (
    <section className={scss.section}>
      <div className="container">
        <Divider title="Travelers Love Kyrgyz Riders" variant="light">
          <MoreBlock title="More reviews on Tripadvisor" />
        </Divider>
        <FeedbackCarousel />
      </div>
    </section>
  );
};

export default Feedback;
