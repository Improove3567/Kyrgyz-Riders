import React from "react";
import Divider from "../Divider/Divider";
import MoreBlock from "../Divider/More block/MoreBlock";
import scss from "./feedback.module.scss";
import FeedbackCarousel from "./carousel/FeedbackCarousel";
import Link from "next/link";

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
        <div className={scss.mainDivider}>
          <Divider title="Travelers Love Kyrgyz Riders" variant="light">
          <Link target="_blank" href="https://www.tripadvisor.ru/">
              <MoreBlock title="More reviews on Tripadvisor" />
            </Link>
          </Divider>
        </div>
        <div className={scss.minDivider}>
          <Divider title="Reviews" variant="light">
            <Link target="_blank" href="https://www.tripadvisor.ru/">
              <MoreBlock title="More reviews on Tripadvisor" />
            </Link>
          </Divider>
        </div>
        <FeedbackCarousel />
      </div>
    </section>
  );
};

export default Feedback;
