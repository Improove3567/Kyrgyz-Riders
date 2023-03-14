import React, { FC } from "react";
import { PriceDoesntIncludeArr } from "../../constants/PriceDoesntInclude";
import Divider from "../Divider/Divider";
import scss from "./PriceDoesntInclude.module.scss";
import Image from "next/image";
import cross from "../../../public/images/PriceDoesntInclude/cross.svg";
const PriceDoesntInclude: FC = () => {
  const showText = React.useMemo(
    () =>
      PriceDoesntIncludeArr.map((item) => (
        <div className={scss.paragraph} key={item.id}>
          <div className={scss.title_mark}>
            <Image src={cross} alt="cross" width={16} height={12} />
            <p>{item.title}</p>
          </div>
        </div>
      )),
    [PriceDoesntIncludeArr]
  );
  return (
    <div className={scss.title_block}>
      <div className="conteiner">
        <Divider title="Price does not include" variant="dark" />
        {showText}
      </div>
    </div>
  );
};
export default PriceDoesntInclude;
