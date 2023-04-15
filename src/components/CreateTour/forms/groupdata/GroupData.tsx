import Image from "next/image";
import scss from "./GroupData.module.scss";
import React, { useState } from "react";
import "react-widgets/scss/styles.scss";
import DatePicker from "react-widgets/DatePicker";

interface IGroupData {
  dispatch: any;
}

const GroupData: React.FC<IGroupData> = ({ dispatch }) => {
  const [travelDates, setTravelDates] = useState(true);
  const [approximateDates, setApproximateDates] = useState(false);
  const [myDates, setMyDates] = useState(false);
  const [duration, setDuration] = useState(0);
  const [dontHaveDates, setDontHave] = useState(0);

  const onIncrement = (type: string, setState: any, state: number, title: string) => {
    setState((prev: number) => prev + 1)
    dispatch({ type: type, payload: { date: state + 1, title: title } })
  }

  const onDecrement = (type: string, setState: any, state: number, title: string) => {
    if (state > 0) {
      setState((prev: number) => prev - 1);
      dispatch({ type: type, payload: { date: state - 1, title: title } })
    }
  }

  return (
    <div className={scss.content}>
      <div className={scss.textWrapper}>
        <h1>When you will be traveling?</h1>
      </div>
      <div className={scss.have_buttons}>
        <button
          onClick={() => {
            setTravelDates(true);
            setApproximateDates(false);
            setMyDates(false);
          }}
          className={
            travelDates == true ? scss.ActiveButton : scss.nonActiveButton
          }
        >
          I have my exact travel dates
        </button>
        <button
          onClick={() => {
            setApproximateDates(true);
            setTravelDates(false);
            setMyDates(false);
          }}
          className={
            approximateDates == true ? scss.ActiveButton : scss.nonActiveButton
          }
        >
          I have approximate dates
        </button>
        <button
          onClick={() => {
            setMyDates(true);
            setTravelDates(false);
            setApproximateDates(false);
          }}
          className={myDates == true ? scss.ActiveButton : scss.nonActiveButton}
        >
          I dont have my dates yet
        </button>
      </div>
      {travelDates == true ? (
        <div className={scss.number_index_wrapper}>
          <div className={scss.number_index_left_content}>
            <div className={scss.number_index_left_top_content}>
              <Image
                src={"/images/createTour/startdate.svg"}
                width={60}
                height={53}
                alt="peolple"
              />
              <p className={scss.image_title}>Start date</p>
            </div>
            <div className={scss.number_index_left_bottom_content}>
              <div className={scss.calendar}>
                <DatePicker onChange={(date) => dispatch({ type: "tripDatesStart", payload: { date, title: "I have my exact travel dates" } })} placeholder="m/dd/yy" />
              </div>
            </div>
          </div>
          <div className={scss.number_index_right_content}>
            <div className={scss.number_index_right_bottom_content}>
              <Image
                src={"/images/createTour/end-date.svg"}
                width={60}
                height={53}
                alt="peolple"
              />
              <p>End date</p>
            </div>
            <div className={scss.calendar}>
              <DatePicker onChange={(date) => dispatch({ type: "tripDatesEnd", payload: { date, title: "I have my exact travel dates" } })} placeholder="m/dd/yy" />
            </div>
          </div>
        </div>
      ) : approximateDates == true ? (
        <div className={scss.number_index_wrapper}>
          <div className={scss.number_index_left_content}>
            <div className={scss.number_index_left_top_content}>
              <Image
                src={"/images/createTour/Group 503.svg"}
                width={60}
                height={53}
                alt="peolple"
              />
              <p className={scss.image_title}>Month of departure</p>
            </div>
            <div className={scss.number_index_left_bottom_content + " " + scss.calendar}>
              <div>
                <DatePicker onChange={(date) => dispatch({ type: "tripDatesStart", payload: { date, title: "I have approximate dates" } })} placeholder="m/dd/yy" />
              </div>
            </div>
          </div>
          <div className={scss.number_index_right_content}>
            <div className={scss.number_index_right_bottom_content}>
              <Image
                src={"/images/createTour/Vector.svg"}
                width={60}
                height={53}
                alt="peolple"
              />
              <p>Approximately duration in days</p>
            </div>
            <div className={scss.number_index_bottom_right_content}>
              <button onClick={() => onDecrement("tripDatesEnd", setDuration, duration, "I have approximate dates")}>
                <div className={scss.minus} ></div>
              </button>
              <div>
                <p>
                  {duration}
                </p>
              </div>
              <button onClick={() => onIncrement("tripDatesEnd", setDuration, duration, "I have approximate dates")}>
                <div className={scss.plus} ></div>
              </button>
            </div>
          </div>
        </div>
      ) : myDates == true ? (
        <div className={scss.number_index_wrapperSec}>
          <div className={scss.number_index_right_content}>
            <div className={scss.number_index_right_bottom_content}>
              <Image
                src={"/images/createTour/Vector.svg"}
                width={60}
                height={53}
                alt="peolple"
              />
              <p>Approximately duration in days</p>
            </div>
            <div className={scss.number_index_bottom_right_content}>
              <button onClick={() => onDecrement("tripDatesEnd", setDontHave, dontHaveDates, "I dont have my dates yet")}>
                <div className={scss.minus}></div>
              </button>
              <div>
                <p>{dontHaveDates}</p>
              </div>
              <button onClick={() => onIncrement("tripDatesEnd", setDontHave, dontHaveDates, "I dont have my dates yet")}>
                <div className={scss.plus}></div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default GroupData;
