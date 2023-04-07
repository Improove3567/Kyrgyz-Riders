import React, { useState } from "react";
import { useMultiStepForm } from "../../../hooks/useMultiStepForm";
import scss from "./GroupSize.module.scss";
import image from "../../../../public/images/CreateYourTour/GroupSize/Vector1.svg";
import imageSecond from "../../../../public/images/CreateYourTour/GroupSize/Vector.svg";
import Image from "next/image";
import arrowLeft from "../../../../public/images/CreateYourTour/GroupSize/arrowLeft.svg";
import arrowRight from "../../../../public/images/CreateYourTour/GroupSize/arrowRight.svg";

const GroupSize: React.FC = () => {
  const { steps, currentStepIndex } = useMultiStepForm([]);
  const [countAdults, setCountAdults] = useState<number>(0);
  const [countChildren, setCountChildren] = useState<number>(0);

  return (
    <div className={scss.wrapper}>
      <div className={scss.content}>
        <div className={scss.textWrapper}>
          <h1>Numbers of travelers</h1>
        </div>
        <div className={scss.number_index_wrapper}>
          <div className={scss.number_index_left_content}>
            <div className={scss.number_index_left_top_content}>
              <Image src={image} alt="peolple" />
              <p className={scss.image_title}>Numbers of adults</p>
            </div>
            <div className={scss.number_index_left_bottom_content}>
              <div className={scss.number_index_bottom_left_content}>
                <button
                  disabled={countAdults === 0 ? true : false}
                  onClick={() => setCountAdults(countAdults - 1)}
                >
                  <div className={scss.minus}></div>
                </button>
                <div>
                  <p>{countAdults}</p>
                </div>
                <button onClick={() => setCountAdults(countAdults + 1)}>
                  <div className={scss.plus}></div>
                </button>
              </div>
            </div>
          </div>
          <div className={scss.number_index_right_content}>
            <div className={scss.number_index_right_bottom_content}>
              <Image src={imageSecond} alt="peolple" />
              <p>Numbers of children</p>
            </div>
            <div className={scss.number_index_bottom_right_content}>
              <button
                disabled={countChildren === 0 ? true : false}
                onClick={() => setCountChildren(countChildren - 1)}
              >
                <div className={scss.minus}></div>
              </button>
              <div>
                <p>{countChildren}</p>
              </div>
              <button onClick={() => setCountChildren(countChildren + 1)}>
                <div className={scss.plus}></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={scss.multistepButtons}>
        <button className={scss.multistepButtons_left_group_content}>
          <Image src={arrowLeft} alt="arrow" /> Go back
        </button>
        <button>
          Next step <Image src={arrowRight} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default GroupSize;
