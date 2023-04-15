import React, { useMemo, useState } from "react";
import Input from "../Input/Input";
import scss from './Option.module.scss'
import Image from "next/image";
import { Option } from "../../../../constants/FilterToursBlock";
import { useRouter } from "next/router";

interface Input {
  value: Option[];
  valueIndex: number;
  select: boolean;
  name: string;
  click: any;
  title: any;
}

const Option: React.FC<Input> = ({ value, click, title, select, valueIndex, name }) => {
  const [arrayO, setArray] = useState(value);
  const [places, setPlaces] = useState([]);
  const [activities, setActivities] = useState([]);
  const router = useRouter();


  useMemo(() => {
    if (places.length > 0) {
      const placesArr = places.join(',')
      const path = {
        pathname: router.pathname,
        query: { ...router.query, places: placesArr }
      }
      router.push(path, path, { shallow: true });
    }
  }, [places])

  useMemo(() => {
    if (activities.length > 0) {
      const activitiesArr = activities.join(',')
      const path = {
        pathname: router.pathname,
        query: { ...router.query, activities: activitiesArr }
      }
      router.push(path, path, { shallow: true });
    }
  }, [activities])


  const changeStatus = (myKey: number | string) => {
    if (!select) {
      const newArrOptions = arrayO.map((item) => {
        if (item.id === myKey) {
          return { ...item, status: true };
        } else {
          return { ...item };
        }
      });
      setArray(newArrOptions);
    } else {
      const newArrOptions = arrayO.map((item) => {
        return item.id == myKey ? { ...item, status: true } : { ...item, status: false }
      });
      setArray(newArrOptions)
    }
  };

  const resetSaves = () => {
    const resArrOptions = arrayO.map((item) => {
      return { ...item, status: false }
    })
    setArray(resArrOptions)
  }
  const change = () => click()
  const resChange = () => {
    resetSaves()
  }
  const saveChange = (() => {
    click()
  })

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
        setPlaces={setPlaces}
        placesState={places}
        setActivities={setActivities}
        activities={activities}
        title={title}
      />
    );
  });

  return (
    <div className={scss.option}>
      <div className={scss.header} onClick={change}>
        <p>Filter / {title}</p>
        <Image src={"/assets/images/krestik.svg"} width={13} height={13} alt={"krestik"} />
      </div>
      <div className={scss.list}>
        {newArr}
      </div>
      <div className={scss.footer}>
        <button className={scss.reset} onClick={resChange}>Reset Settings</button>
        <button className={scss.save} onClick={saveChange}>Save changes</button>
      </div>
    </div>
  )
};

export default Option;