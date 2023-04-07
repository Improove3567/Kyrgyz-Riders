import React, { useState, useEffect } from "react";
import scss from "./Select.module.scss";
import Option from "../Option/Option";
import Image from "next/image";

interface Tours {
  name: string;
  option: Array<object>;
  valueIndex: number;
  status: boolean;
  id: number;
  select: boolean;
}

const Select: React.FC<Tours> = ({ name, option, valueIndex, select }) => {
  const [arrow, setArrow] = useState(false);
  const result = React.useMemo(() => {
    return arrow ? (
      <Image
        src={"assets/images/arrow.svg"}
        width={10}
        height={5}
        alt={"arrow"}
      />
    ) : (
      <Image
        src={"assets/images/arrowUp.svg"}
        width={10}
        height={5}
        alt={"arrow"}
      />
    );
  }, [arrow]);

  const click = (): void => {
    setArrow(!arrow);
  };

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);
  useEffect(() => {
    if (!arrow && windowSize.width < 900) {
      document.body.style.height = "auto";
      document.body.style.overflow = "visible";
    }
    if (arrow && windowSize.width < 900) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    }
  }, [arrow]);
  return (
    <div>
      <div onClick={click} className={scss.select}>
        <span className={scss.span}>{name}</span>
        {result}
      </div>
      {arrow && (
        <div className={scss.inputs}>
          <Option
            valueIndex={valueIndex}
            click={click}
            title={name}
            select={select}
            value={option}
          />
        </div>
      )}
    </div>
  );
};

export default Select;
