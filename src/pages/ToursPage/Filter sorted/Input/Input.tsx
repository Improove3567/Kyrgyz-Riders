import React, { useState } from "react";
import scss from './Input.module.scss'

interface Iname {
    name: string;
    changeStatus: any;
    statusEl: boolean;
    myKey: string | number;
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
            <div className={index ? scss.inputB : scss.inputW}>
              <div className={scss.checked}></div>
            </div>
          ) : (
            <div className={statusEl ? scss.inputBD : scss.inputW}>
              <div className={scss.checkedD}></div>
            </div>
          )}
        </div>
        <span className={scss.span}>{name}</span>
      </label>
    );
  };
  
  export default Input;
  