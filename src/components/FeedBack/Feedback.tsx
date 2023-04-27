import React, { useState } from "react";
import Divider from "../Divider/Divider";
import MoreBlock from "../Divider/More block/MoreBlock";
import scss from "./feedback.module.scss";
import FeedbackCarousel from "./carousel/FeedbackCarousel";
import DescWindow from "../Modal/DescWindow";
import Link from "next/link";

export interface IFeedback {
  country?: string;
  stars?: number;
  desc?: string;
  link?: string;
  img?: string;
  name?: string;
  change: (desc:string | undefined) => void;
}

const Feedback: React.FC = () => {
  const [index, setIndex] = useState(false);
  const [title,setTitle] = useState<string | undefined>()

  const click = () => {
    setIndex(!index);
  };

  const change = (desc: string | undefined) => {
    click()
    setTitle(desc)
  };



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
        <FeedbackCarousel change={change} />
        <DescWindow index={index} click={click} title={title} />
      </div>
    </section>
  );
};

export default Feedback;
