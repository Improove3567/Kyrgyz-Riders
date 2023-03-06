import React, { useState } from "react";
import scss from './Input.module.scss'
import { Option } from "../../../../constants/FilterToursBlock";

interface Iname {
    name: string;
    changeStatus: (id: number | string) => void ;
    statusEl: boolean;
    myKey: number | string;
    valueIndex: number;
    select:boolean
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
  
    const click = () => {
      changeStatus(myKey);
      valueIndex == 1 ?  setIndex(!index): ''
    };
  
    return (
      <label className={scss.label} onClick={click}>
        <div className={scss.input}>
          { !select ? (
            <div className={index ? scss.inputOne : scss.inputW}>
              <div className={scss.checkedOne}></div>
            </div>
          ) : (
            <div className={statusEl ? scss.inputSome : scss.inputW}>
              <div className={scss.checkedSome}></div>
            </div>
          )}
        </div>
        <span className={scss.span}>{name}</span>
      </label>
    );
  };
  
  export default Input;
  