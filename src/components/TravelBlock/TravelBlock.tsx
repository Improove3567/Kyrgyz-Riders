import React, { useEffect, useMemo, useState } from "react";
import scss from "./TravelBlock.module.scss";
import Divider from "../Divider/Divider";
import TravelCard from "./TravelCard/TravelCard";
import useTravel from "../../hooks/useTravel";
import Preloader from "../Preloader/Preloader";

const TravelBlock: React.FC = () => {
    const { getTravel, travel, isLoading, len } = useTravel();

    const [limit, setLimit] = useState<number>(3);

    useEffect(() => {
        getTravel(limit);
    }, [limit])

    const sightsList = useMemo(() => (
        travel?.map((el, index) => (
            <TravelCard {...el} key={index} />
        ))
    ), [travel, limit])

    const onMore = () => {
        if (limit < len.length) {
            setLimit((prev: number) => prev + 3);
        }
        else if (limit - 2 || limit + 2 == len.length) {
            setLimit(len.length)
        }
    }

  if (isLoading) return <Preloader full />;

    return (
        <div className={scss.wrapper}>
            <div className="container">
                <Divider title={"Travel & Stories"} variant={"dark"} />
                <div className={scss.back}>
                <div className={scss.card_container}>
                    {sightsList}
                </div>
                <div className={scss.btn}>
                <button onClick={() => onMore()} className={limit >= len.length ? scss.nonAcbutton : scss.button}>
                    <p>More Stories</p>
                </button>
                </div>
                </div>
            </div>
        </div>
  );
};

export default TravelBlock;
