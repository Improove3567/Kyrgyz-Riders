import scss from "./DiscribeList.module.scss";
import React from "react";

interface DiscribeListI {
  id?: number;
  description: string;
  handleClick: any;
  active: boolean;
  dispatch: any;
}

const DiscribeList: React.FC<DiscribeListI> = ({ id, description, handleClick, active, dispatch }) => {

  const click = () => {
    handleClick(id, "toActive")
    dispatch({ type: "discribeTrip", payload: description })
  };

  return (
    <div className={scss.DiscribeListItem} onClick={click}>
      <div className={scss.mainCircule}>
        <div
          className={scss.innerCircule}
          style={!active ? { background: "#adadad" } : { background: "#8389C9" }}
        >
          <div className={!active ? "" : scss.innerCirculeChecked}></div>
        </div>
      </div>
      <div className={scss.rectangle}>
        <p className={scss.textContent}>{description}</p>
      </div>
    </div>
  );
};

export default DiscribeList;