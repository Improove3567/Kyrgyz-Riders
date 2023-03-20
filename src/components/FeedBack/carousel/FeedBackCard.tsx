import React from "react";
import scss from "./FeedBackCard.module.scss";
import { IFeedback } from "../Feedback";
import Image from "next/image";
import Link from "next/link";
import Modal from "../Feedback modal/Modal";

const FeedbackCard: React.FC<IFeedback> = ({
  desc,
  img,
  country,
  link,
  stars,
  name,
}) => {
  return (
    <div className={scss.wrapper}>
      <header>
        {/* eslint-disable-next-line no-use-before-define */}
        <img width={90} height={90} src={img} alt="avatar" />
        <div className={scss.title}>
          <h1>
            {name}
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
      <p className={scss.nonActive}>{desc}</p>
      <p
        className={scss.read}
      >
        <Modal desc={desc} />
      </p>
      <div className={scss.line}></div>
      <Link href={`${link}`}>
        <Image src={"/images/tripLogo.svg"} alt={""} width={100} height={100} />
      </Link>
    </div>
  );
};

export default FeedbackCard;
