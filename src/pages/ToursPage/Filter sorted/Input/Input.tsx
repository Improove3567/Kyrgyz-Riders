import React, { useState,useEffect } from "react";
import scss from './Input.module.scss'


interface Iname {
  name?: string;
  changeStatus: (id: number | string) => void;
  statusEl?: boolean;
  myKey: any;
  valueIndex: number;
  select: boolean
}
const Input: React.FC<Iname> = ({
  name,
  valueIndex,
  changeStatus,
  myKey,
  statusEl,
  select
}) => {
  const [index, setIndex] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth
    });
  }, []);

  const click = () => {
    changeStatus(myKey);
  };
  return (
    <label className={statusEl && windowSize.width < 900 ?  scss.labelBack : scss.label } onClick={click} >
      <div className={scss.input}>
        {!select ? (
          <div className={statusEl ? scss.inputOne : ''}>
            <div className={scss.checkedOne}></div>
          </div>
        ) : (
          <div className={statusEl ? scss.inputSome : ''}>
            <div className={scss.checkedSome}></div>
          </div>
        )}
      </div>
      <span className={scss.span}>{name}</span>
    </label>
  );
};

export default Input;
