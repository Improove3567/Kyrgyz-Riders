import React, { useEffect, useState } from "react";
import scss from './Input.module.scss'
import { useRouter } from "next/router";

interface Iname {
  name?: string;
  changeStatus: (id: number | string) => void;
  statusEl?: boolean;
  myKey: any;
  valueIndex: number;
  select: boolean;
  filterName: string;
  setPlaces: any;
  places: any;
  setActivities: any;
  activities: any;
}
const Input: React.FC<Iname> = ({
  name,
  valueIndex,
  changeStatus,
  myKey,
  select,
  filterName,
  statusEl,
  setPlaces,
  places,
  setActivities,
  activities
}) => {
  const [index, setIndex] = useState(false);
  const router: any = useRouter();
  const { tour, duration }: any = router.query;

  const click = () => {
    changeStatus(myKey);
    valueIndex == 1 ? setIndex(!index) : ''
    switch (filterName) {
      case "Tours":
        if (name) {
          const path = {
            pathname: router.pathname,
            query: { ...router.query, tour: name }
          }
          router.push(path, path, { shallow: true })
        }
        break;
      case "Duration":
        const splitName = name?.split(" ")
        if (splitName) {
          const res = splitName[0].trim();
          const path = {
            pathname: router.pathname,
            query: { ...router.query, duration: res }
          }
          router.push(path, path, { shallow: true })
        }
        break;
      case "Places i want to visit":
        if (name) {
          setPlaces([...places, name])
        }
        break;
      case "Activities i want to do":
        if (name) {
          setActivities([...activities, name])
        }
        break;
      case "Start form":
        if (name) {
          const path = {
            pathname: router.pathname,
            query: { ...router.query, startFrom: name }
          }
          router.push(path, path, { shallow: true })
        }
        break;
      default:
        console.log("Нет таких значений");
    }
  };

  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflow = 'hidden'
    }
    const handleRouteChangeComplete = () => {
      document.body.style.overflow = 'auto'
    }
    router.events.on('routeChangeStart', handleBodyScroll)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    return () => {
      router.events.off('routeChangeStart', handleBodyScroll)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      document.body.style.overflow = 'auto'
    }
  }, [router])

  return (
    <label className={scss.label} onClick={click}>
      <div className={scss.input}>
        {!select ? (
          <div className={index ? scss.inputOne : ''}>
            <div className={scss.checkedOne}></div>
          </div>
        ) :

          tour || duration ? (
            <div className={name == tour || name == duration + " days" ? scss.inputSome : scss.inputW}>
              <div className={scss.checkedSome}></div>
            </div>
          ) : (
            <div className={name === "All tours" ? scss.inputSome : scss.inputW}>
              <div className={scss.checkedSome}></div>
            </div>
          )

        }
      </div>
      <span className={scss.span}>{name}</span>
    </label>
  );
};

export default Input;
