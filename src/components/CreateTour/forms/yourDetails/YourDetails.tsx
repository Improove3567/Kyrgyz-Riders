import React from "react";
import scss from "./YourDetails.module.scss";

interface IDetails {
  dispatch: any;
}

const YourDetails: React.FC<IDetails> = ({ dispatch }) => {

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
              onChange={(e) => dispatch({ type: "addName", payload: e })}
            />
            <input
              className={scss.input}
              type='text'
              placeholder="Last name"
              onChange={(e) => dispatch({ type: "addLastName", payload: e })}
            />
            <input
              className={scss.input}
              type='text'
              placeholder="E-mail"
              required
              onChange={(e) => dispatch({ type: "addEmail", payload: e })}
            />
            <input
              className={scss.input}
              type='number'
              placeholder="What`s up number"
              onChange={(e) => dispatch({ type: "addNumber", payload: e })}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default YourDetails;