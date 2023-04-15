import scss from "./DetailsEnd.module.scss";
import React from "react";

const DetailsEnd: React.FC = () => {
  return (
    <div className={scss.detailsEndMain}>
      <div className={scss.textWrapper}>
        <h2>Thank you!</h2>
      </div>
      <div className={scss.detailsEndContent}>
        <p>
          Enter your details to access information about your trip. Enter your
          details to access information about your trip. Enter your details to
          access information about your trip. Enter your details to access
          information about your trip. Enter your details to access information
          about your trip. Enter your details to access information about your
          trip. Enter your details to access information about your trip.
        </p>
      </div>
    </div>
  );
};

export default DetailsEnd;