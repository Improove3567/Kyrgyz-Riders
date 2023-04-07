import React, { useEffect, useState } from "react";
import scss from './Input.module.scss'
import { Option } from "../../../../constants/FilterToursBlock";
import useFilter from "../../../../hooks/useFilter";

interface Iname {
  name?: string;
  changeStatus: (id: number | string) => void;
  statusEl?: boolean;
  myKey: any;
  valueIndex: number;
  select: boolean;
  filterName: string;
  setTour: (value: string) => void;
  setDuration: (value: string) => void;
}
const Input: React.FC<Iname> = ({
  name,
  valueIndex,
  changeStatus,
  myKey,
  statusEl,
  select,
  filterName,
  setTour,
  setDuration
}) => {
  const [index, setIndex] = useState(false);


  // const { request } = useFilter();

  // useEffect(() => {
  //   request();
  // }, [])

  const click = () => {
    changeStatus(myKey);
    valueIndex == 1 ? setIndex(!index) : ''
    switch (filterName) {
      case "Tours":
        if (name) {
          setTour(name)
        }
        break;
      case "Duration":
        const splitName = name?.split(" ")
        if (splitName) {
          const res = splitName[0].trim();
          setDuration(res)
        }
        break;
      case "Places i want to visit":
        console.log('Places i want to visit');
        break;
      case "Activities i want to do":
        console.log('Activities i want to do');
        break;
      case "Start form":
        console.log('StartFrom');
        break;
      default:
        console.log("Нет таких значений");
    }
  };
  return (
    <label className={scss.label} onClick={click}>
      <div className={scss.input}>
        {!select ? (
          <div className={index ? scss.inputOne : ''}>
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
