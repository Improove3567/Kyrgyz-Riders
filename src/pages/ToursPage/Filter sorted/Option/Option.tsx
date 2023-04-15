import React, { useMemo, useState } from "react";
import Input from "../Input/Input";
import scss from './Option.module.scss'
import { Option } from "../../../../constants/FilterToursBlock";
import { useRouter } from "next/router";

interface Input {
  value: Option[];
  valueIndex: number;
  select: boolean;
  name: string;
}

const Option: React.FC<Input> = ({ value, select, valueIndex, name }) => {
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
        setPlaces={setPlaces}
        places={places}
        setActivities={setActivities}
        activities={activities}
      />
    );
  });

  return <div className={scss.option}>{newArr}</div>;
};

export default Option;