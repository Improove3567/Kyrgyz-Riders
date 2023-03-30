import React, { FC } from "react";
import scss from "./AboutUstext.module.scss";
import { AboutUsTextArr } from "../../constants/AboutUsText";
import Divider from "../Divider/Divider";
const AboutUsText: FC = () => {
  const renderText = React.useMemo(
    () =>
      AboutUsTextArr.map((item) => (
        <div className={scss.paragraph} key={item.id}>
          {item.title}
        </div>
      )),
    [AboutUsTextArr]
  );
  return (
    <div className={scss.title_block}>
      <div className="container">
        <div className={scss.title}>
          <Divider title="About us" variant="dark" />
        </div>
        <div className={scss.text}>
          {renderText}
        </div>
      </div>
    </div>
  );
};

export default AboutUsText;
