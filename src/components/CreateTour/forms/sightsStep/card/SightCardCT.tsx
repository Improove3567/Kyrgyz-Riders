import React, { ReactElement, useEffect, useState } from "react";
import scss from "./sightCardCT.module.scss";
import Link from "next/link";
import ArrowR from "../../../../../../public/images/TourFeatures/VectorRight.svg";
import Image from "next/image";

interface ICard {
  title: string;
  tid: string | number;
  ownVersion?: string;
  dispatch: any;
  index: number;
}

const SightCard: React.FC<ICard> = ({ title, tid, dispatch, index }) => {
  const [isActive, setActive] = useState(false);
  const [isVisit, setVisit] = useState(false);

  const onEdit = () => {
    if (isActive) {
      dispatch({ type: "updateSights", payload: { index, updatedData } });
      setVisit(!isVisit);
    }
  };

  const updatedData = { title: title, visit: isVisit, tid: tid };

  const onSend = () => {
    if (isActive) {
      setActive(false);
      dispatch({ type: "removeSights", payload: tid });
    } else {
      dispatch({ type: "addSight", payload: updatedData });
      setActive(true);
      setVisit(false);
    }
  };

  const activeButtons: any | ReactElement = (state: boolean) => {
    if (state) {
      return (
        <>
          <button
            onClick={() => onEdit()}
            className={!isVisit ? scss.niceAc : scss.nice}
          >
            <span>
              <div className={isVisit ? "" : scss.innerCirculeChecked}></div>
            </span>
            Nice to visit
          </button>
          <button
            onClick={() => onEdit()}
            className={!isVisit ? scss.must : scss.mustAc}
          >
            <span>
              <div className={isVisit ? scss.innerCirculeChecked : ""}></div>
            </span>
            Must visit
          </button>
        </>
      );
    } else {
      return (
        <>
          <button className={scss.nice}>Nice to visit</button>
          <button className={scss.must}>Must visit</button>
        </>
      );
    }
  };

  return (
    <>
      <div className={scss.wrapper}>
        <div className={scss.check} onClick={() => onSend()}>
          <div className={isActive ? scss.circleAc : scss.circleNon}>
            <div className={!isActive ? "" : scss.innerCirculeChecked}></div>
          </div>
        </div>
        <div className={scss.right}>
          <div className={scss.title}>
            <p>{title}</p>
            <Link href={`/sight/${tid}`}>Read more about this sight</Link>
          </div>
          <div className={scss.btns}>{activeButtons(isActive)}</div>
        </div>
      </div>
      <div
        className={scss.wrapperForAdaptive}
        style={isActive ? { background: "#8389c9" } : { background: "#ebebeb" }}
      >
        <div className={scss.topContent} onClick={() => onSend()}>
          <div className={scss.check}>
            <div className={isActive ? scss.circleAc : scss.circleNon}>
              <div
                className={
                  isActive ? scss.innerCirculeChecked : scss.innerCirculeOff
                }
              ></div>
            </div>
          </div>
          <div className={scss.right}>
            <div className={scss.title}>
              <p style={isActive ? { color: "#fff" } : { color: "" }}>
                {title}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={scss.bottomContentForAdaptive}>
        <div className={scss.top}>
          <Link className={scss.link} href={`/sight/${tid}`}>
            Read more about this sight
          </Link>
          <Image src={ArrowR} alt="image" />
        </div>
        <div className={scss.bottom}>
          <div className={scss.btns}>{activeButtons(isActive)}</div>
        </div>
      </div>
      <div className={scss.line}></div>
    </>
  );
};

export default SightCard;
