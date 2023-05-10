import React, { useEffect, useMemo, useRef, useState } from "react";
import scss from "./activitiesCard.module.scss";
import Radio from "../activitesRadio/activitiesRadio";
import ArrowR from "../../../../../../public/images/TourFeatures/VectorRight.svg";
import Image from "next/image";

interface IActivitesCard {
  dispatch: any;
  index: number;
  title: string;
  i: number;
}

const ActivitiesCard: React.FC<IActivitesCard> = ({
  dispatch,
  index,
  title,
  i,
}) => {
  const [isActive, setActive] = useState(false);
  const [isVisit, setVisit] = useState(false);
  const [modalDuration, setDuration] = useState(false);
  const [modalHeight, setModalHeight] = useState(0);
  const [days, setDays] = useState([
    {
      id: 1,
      title: "1 Day",
      active: false,
    },
    {
      id: 2,
      title: "2 Days",
      active: false,
    },
    {
      id: 3,
      title: "3 Days",
      active: false,
    },
    {
      id: 4,
      title: "4 Days",
      active: false,
    },
    {
      id: 5,
      title: "5 Days",
      active: false,
    },
    {
      id: 6,
      title: "6 Days",
      active: false,
    },
    {
      id: 7,
      title: "7 Days",
      active: false,
    },
  ]);

  const updatedActivities = {
    title: title,
    visit: isVisit,
    tid: index,
    duration: "",
  };
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalDuration) {
      const modal = modalRef.current;
      if (modal) {
        setModalHeight(modal.offsetHeight);
        document.body.style.height = `${modal.offsetHeight}px`;
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  }, [modalDuration]);
  const handleClick = (id: any, state: any) => {
    const filtered: any = [...days].find((comment) => comment.id === id);
    if (state === "toActive") {
      const arr = days.map((el) => {
        if (el.id === filtered.id) {
          return { ...filtered, active: true };
        }
        return { ...el, active: false };
      });
      setDays(arr);
    } else {
      const arr = days.map((el) => {
        if (el.id === filtered.id) {
          return { ...filtered, active: false };
        }
        return { ...el, active: false };
      });
      setDays(arr);
    }
    dispatch({ type: "updateActivities", payload: { i, updatedActivities } });
  };

  const renderRadio = useMemo(
    () =>
      days.map((el) => (
        <Radio
          dispatch={dispatch}
          i={i}
          updatedActivities={updatedActivities}
          id={el.id}
          title={el.title}
          active={el.active}
          key={el.id}
          handleClick={handleClick}
        />
      )),
    [days, modalDuration, handleClick]
  );

  const onEdit = () => {
    if (isActive) {
      dispatch({ type: "updateActivities", payload: { i, updatedActivities } });
      setVisit(!isVisit);
    }
  };

  const onSend = () => {
    if (isActive) {
      setActive(false);
      dispatch({ type: "removeActivities", payload: index });
    } else {
      dispatch({ type: "addActivities", payload: updatedActivities });
      setActive(true);
      setVisit(false);
    }
  };

  const activeButtons: any = (state: boolean) => {
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
            Nice to do
          </button>
          <button
            onClick={() => onEdit()}
            className={!isVisit ? scss.must : scss.mustAc}
          >
            <span>
              <div className={isVisit ? scss.innerCirculeChecked : ""}></div>
            </span>
            Must to do
          </button>
        </>
      );
    } else {
      return (
        <>
          <button className={scss.nice}>Nice to do</button>
          <button className={scss.must}>Must to do</button>
        </>
      );
    }
  };

  const openModal = () => {
    setDuration(!modalDuration);
  };

  return (
    <div className={scss.card}>
      <div className={scss.wrapper}>
        <div className={scss.check} onClick={() => onSend()}>
          <div className={isActive ? scss.circleAc : scss.circleNon}>
            <div className={!isActive ? "" : scss.innerCirculeChecked}></div>
          </div>
        </div>
        <div className={scss.right}>
          <div className={scss.title} onMouseLeave={() => setDuration(false)}>
            <p>{title}</p>
            <h5 onClick={() => openModal()}>Duration</h5>
            {modalDuration && <div className={scss.modal}>{renderRadio}</div>}
          </div>
          <div className={scss.btns}>{activeButtons(isActive)}</div>
        </div>
      </div>
      <div className={scss.cardAdaptive}>
        <div
          className={scss.wrapperForAdaptive}
          style={
            isActive ? { background: "#8389c9" } : { background: "#ebebeb" }
          }
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
          <div className={scss.bottom}>
            <div className={scss.btns}>{activeButtons(isActive)}</div>
          </div>
          <div className={scss.top} onClick={() => openModal()} onMouseLeave={() => setDuration(false)}>
            <h1>Duration</h1>
            <Image src={ArrowR} alt="image" />
            <div className={modalDuration ? scss.backModal : ''} onClick={() => setDuration(false)}>
            {modalDuration && (
              <div
                className={modalDuration ? scss.modal : scss.modalNon}
                onClick={(e) => e.stopPropagation()}
                ref={modalRef}
              >
                <h5>Duration</h5>
                <div className={scss.wrapModal}>{renderRadio}</div>
              </div>
            )}
            </div>      
          </div>
        </div>
        <div className={scss.line}></div>
      </div>
    </div>
  );
};

export default ActivitiesCard;
