import React, { useState } from "react";
import Input from "../Input/Input";
import scss from './Option.module.scss'
import { Option } from "../../../../constants/FilterToursBlock";

interface Input {
    value: Option[];
    valueIndex: number;
    select: boolean;
    name: string;
    setTour: (value: string) => void;
    setDuration: (value: string) => void;
  }
  
  const Option: React.FC<Input> = ({ value, select, valueIndex, name, setTour, setDuration }) => {
    const [arrayO, setArray] = useState(value);
    const changeStatus = (myKey: number | string) => {
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
          filterName={name}
          setTour={setTour}
          setDuration={setDuration}
        />
      );
    });
  
    return <div className={scss.option}>{newArr}</div>;
  };
  
  export default Option;