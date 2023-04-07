import Link from "next/link";
import React from "react";
import scss from "./Yourtour.module.scss";

const YourTours: React.FC = () => {
  return (
    <section className={scss.section}>
      <div className={scss.line}></div>
      <div className={scss.yourTour}>
        <Link href='createTour'>
          <div className={scss.front}>
            <p>Create Your Tour</p>
            <div className={scss.back}></div>
          </div>
        </Link>
      </div>
      <div className={scss.line}></div>
    </section >
  );
};

export default YourTours;
