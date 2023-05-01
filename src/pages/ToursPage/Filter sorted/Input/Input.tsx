import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import scss from './Input.module.scss'

interface Iname {
  name?: string;
  changeStatus: (id: number | string) => void;
  statusEl?: boolean;
  myKey: any;
  valueIndex: number;
  filterName: string;
  setPlaces: any;
  placesState: any;
  setActivities: any;
  activitiesState: any;
  select: boolean
  title: string
}
const Input: React.FC<Iname> = ({
  name,
  changeStatus,
  myKey,
  select,
  filterName,
  statusEl,
  setPlaces,
  placesState,
  setActivities,
  activitiesState,
  valueIndex,
  title
}) => {
  const [index, setIndex] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0
  });
  const router: any = useRouter();
  const { tour, duration, places, startFrom, activities }: any = router.query;

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
      case "Places":
        if (name) {
          if (places) {
            if (places.includes(name)) {
              const placesArr = places.split(',')
              if (placesArr.length > 1) {
                const updatedPlaces = placesArr.filter((c: string) => c !== name);
                setPlaces(updatedPlaces)
              } else if (placesArr.length == 1 && placesArr[0] == name) {
                setPlaces([])
              }
            } else {
              setPlaces([...placesState, name])
            }
          } else {
            setPlaces([...placesState, name])
          }
        }
        break;
      case "Activities":
        if (name) {
          if (activities) {
            if (activities.includes(name)) {
              const activitiesArr = activities.split(',')
              if (activitiesArr.length > 1) {
                const updatedActivities = activitiesArr.filter((c: string) => c != name);
                setActivities(updatedActivities)
              } else if (activitiesArr.length == 1 && activitiesArr[0] == name) {
                setActivities([])
              }
            } else {
              setActivities([...activitiesState, name])
            }
          } else {
            setActivities([...activitiesState, name])
          }
        }
        break;
      case "Start from":
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
  }

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth
    });
  }, []);

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
    <label className={statusEl && windowSize.width < 900 ? scss.labelBack : scss.label} onClick={click} style={windowSize.width < 900 ? title == "Duration" || title == "Start from" ? { width: "30%" } : { width: "47%" } : { width: "100%" }} >
      <div className={scss.input}>
        {!select && places?.split(',').includes(name) || !select && activities?.split(',').includes(name) ? (
          <div className={statusEl ? scss.inputOne : ''}>
            <div className={scss.checkedOne}></div>
          </div>
        ) :
          tour || duration || startFrom ? (
            <div className={name == tour || name == duration + " days" || name == startFrom ? scss.inputSome : scss.inputW}>
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
