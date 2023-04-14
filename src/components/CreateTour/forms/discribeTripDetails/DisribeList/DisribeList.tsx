import scss from "./DiscribeList.module.scss";
import React, { useState } from "react";

interface DiscribeListI {
  id?: number;
  description: string;
}

const DiscribeList: React.FC<DiscribeListI> = ({ id, description }) => {
  const [index, setIndex] = useState(false);

  const click = () => setIndex(!index);

  return (
    <div className={scss.DiscribeListItem} onClick={click}>
      <div className={scss.mainCircule}>
        <div
          className={scss.innerCircule}
          style={!index ? { background: "#adadad" } : { background: "#8389C9" }}
        >
          <div className={index ? scss.innerCirculeChecked : ""}></div>
        </div>
      </div>
      <div className={scss.rectangle}>
        <p className={scss.textContent}>{description}</p>
      </div>
    </div>
  );
};

export default DiscribeList;