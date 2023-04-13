import React, { useState } from "react";
import Divider from "../Divider/Divider";
import MoreBlock from "../Divider/More block/MoreBlock";
import scss from "./feedback.module.scss";
import FeedbackCarousel from "./carousel/FeedbackCarousel";
import Modal2 from "../Modal/Modal2";

export interface IFeedback {
  country?: string;
  stars?: number;
  desc?: string;
  link?: string;
  img?: string;
  name?: string;
  lastName?: string;
  click : () => void
}

const Feedback: React.FC = () => {

  const [index,setIndex] = useState(false)

  const click = () => setIndex(!index)

  
  return (
    <section className={scss.section}>
      <div className="container">
        <div className={scss.mainDivider}>
          <Divider title="Travelers Love Kyrgyz Riders" variant="light">
            <MoreBlock title="More reviews on Tripadvisor" />
          </Divider>
        </div>
        <div className={scss.minDivider}>
          <Divider title="Reviews" variant="light">
            <MoreBlock title="More reviews on Tripadvisor" />
          </Divider>
        </div>
        <FeedbackCarousel click = {click}/>
        <Modal2 index = {index} click = {click}/>
      </div>
    </section>
  );
};

export default Feedback;
