import React from "react";
import scss from "./YourDetails.module.scss";

const YourDetails: React.FC = () => {
  return (
    <div className={scss.yourDetailsMain}>
      <div className={scss.textWrapper}>
        <h2>Enter your details</h2>
      </div>
      <div className={scss.yourDetailsContent}>
        <p>Enter your details to access information about your trip</p>
        <form className={scss.form}>
          <div className={scss.inputs}>
            <input
              className={scss.input}
              type='text'
              placeholder="First name"
            />
            <input
              className={scss.input}
              type='text'
              placeholder="Last name"/>
            <input
              className={scss.input}
              type='text'
              placeholder="E-mail"
              required/>
            <input
              className={scss.input}
              type='number'
              placeholder="What`s up number"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default YourDetails;