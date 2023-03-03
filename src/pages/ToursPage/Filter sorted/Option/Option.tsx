import React, { useState } from "react";
import Input from "../Input/Input";
import scss from './Option.module.scss'

interface Input {
    value: any[];
    valueIndex: number;
    select: boolean
  }
  
  const Option: React.FC<Input> = ({ value, select, valueIndex }) => {
    const [arrayO, setArray] = useState(value);
    const changeStatus = (myKey: number) => {
      const newArrOptions = arrayO.map((item) => {
        if (item.id === myKey) {
          return { ...item, status: true };
        } else {
          return { ...item, status: false };
        }
      
      });
      setArray(newArrOptions);
    };
  
    const newArr = arrayO.map((el) => {
      return (
        <Input
          select={select}
          myKey={el.id}
          key={el.id}
          name={el.name}
          changeStatus={changeStatus}
          statusEl={el.status}
          valueIndex={valueIndex}
        />
      );
    });
  
    return <div className={scss.option}>{newArr}</div>;
  };
  
  export default Option;