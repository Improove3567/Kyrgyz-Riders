import React from "react";
import scss from "./FeedBackCard.module.scss";
import { IFeedback } from "../Feedback";
import Image from "next/image";
import Link from "next/link";

const FeedbackCard: React.FC<IFeedback> = ({
  desc,
  img,
  title,
  country,
  link,
  stars,
}) => {
  const [isActive, setActive] = React.useState(false);
  return (
    <div className={scss.wrapper}>
      <header>
        <Image width={90} height={90} src={img} alt="img" />
        <div className={scss.title}>
          <h1>
            {title}
            <p>
              / {stars}
              <Image
                src={"/images/star.svg"}
                alt="star"
                width={90}
                height={90}
              ></Image>
            </p>
          </h1>
          <p>{country}</p>
        </div>
      </header>
      <div className={scss.line}></div>
      <p className={isActive ? scss.active : scss.nonActive}>{desc}</p>
      <p
        className={isActive ? scss.readAc : scss.read}
        onClick={() => setActive(!isActive)}
      >
        {isActive ? "Read all" : "go back"}
      </p>
      <div className={scss.line}></div>
      <Link href={link}>{link}</Link>
    </div>
  );
};

export default FeedbackCard;
