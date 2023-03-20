import React, { useEffect, useMemo } from "react";
import scss from "./TravelBlock.module.scss";
import Divider from "../Divider/Divider";
import { TravelData } from "../../constants/TravelData";
import TravelCard from "./TravelCard/TravelCard";
import useTravel from "../../hooks/useTravel";

const TravelBlock: React.FC = () => {
    const { getTravel, travel } = useTravel();

    useEffect(() => {
        getTravel();
    }, [])
    const sightsList = useMemo(() => (
        travel?.map((el, index) => (
            <TravelCard {...el} key={index} />
        ))
    ), [travel])
    console.log(travel)
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
