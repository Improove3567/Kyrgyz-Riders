import React from "react";
import scss from "./Yourtour.module.scss";

const YourTours: React.FC = () => {
  return (
    <section className={scss.section}>
      <div className={scss.line}></div>
      <div className={scss.yourTour}>
        <div className={scss.front}>
          <p>Create Your Tour</p>
          <div className={scss.back}></div>
        </div>
      </div>
      <div className={scss.line}></div>
    </section>
  );
};

export default YourTours;
