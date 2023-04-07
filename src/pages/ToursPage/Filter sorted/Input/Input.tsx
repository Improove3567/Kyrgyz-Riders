import React, { useState,useEffect } from "react";
import scss from './Input.module.scss'


interface Iname {
  name?: string;
  changeStatus: (id: number | string) => void;
  statusEl?: boolean;
  myKey: any;
  valueIndex: number;
  select: boolean
  title : string
}
const Input: React.FC<Iname> = ({
  name,
  changeStatus,
  myKey,
  statusEl,
  select,
  title
}) => {
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
    <label className={statusEl && windowSize.width < 900 ?  scss.labelBack : scss.label } onClick={click}  style={ windowSize.width < 900  ? title == "Duration" || title == "Start from"  ?  {width:"30%"} : {width:"47%"} : {width: "100%"}} >
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
