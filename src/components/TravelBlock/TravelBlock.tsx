import React, { useEffect, useMemo } from "react";
import scss from "./TravelBlock.module.scss";
import Divider from "../Divider/Divider";
import TravelCard from "./TravelCard/TravelCard";
import useTravel from "../../hooks/useTravel";
import Preloader from "../Preloader/Preloader";

const TravelBlock: React.FC = () => {
    const { getTravel, travel, isLoading } = useTravel();

    useEffect(() => {
        getTravel();
    }, [])
    const sightsList = useMemo(() => (
        travel?.map((el, index) => (
            <TravelCard {...el} key={index} />
        ))
    ), [travel])

    if (isLoading) return <Preloader full />

    return (
        <div className={scss.wrapper}>
            <div className="container">
                <Divider title={"Travel & Stories"} variant={"dark"} />
                <div className={scss.card_container}>
                    {sightsList}
                </div>
                <div className={scss.button}>
                    <p>More Sights</p>
                </div>
            </div>
        </div>
    );
};

export default TravelBlock;
