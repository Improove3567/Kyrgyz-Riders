import Image from "next/image";
import scss from "./GroupData.module.scss";
import { useState } from "react";
import DatePicker from "react-widgets/DatePicker";
import "react-widgets/scss/styles.scss";

const GroupData = () => {
  const [travelDates, setTravelDates] = useState(true);
  const [approximateDates, setApproximateDates] = useState(false);
  const [myDates, setMyDates] = useState(false);
  console.log(`travel${travelDates} appo${approximateDates} dates${myDates}`);

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
                <DatePicker placeholder="m/dd/yy" />;
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
              <DatePicker placeholder="m/dd/yy" />;
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
            <div className={scss.number_index_left_bottom_content  + " " + scss.calendar}>
              <div>
                <DatePicker placeholder="m/dd/yy" />;
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
              <button>
                <div className={scss.minus}></div>
              </button>
              <div>
                <p>0</p>
              </div>
              <button>
                <div className={scss.plus}></div>
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
              <button>
                <div className={scss.minus}></div>
              </button>
              <div>
                <p>0</p>
              </div>
              <button>
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
