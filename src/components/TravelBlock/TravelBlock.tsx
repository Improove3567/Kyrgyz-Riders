import React, { useMemo } from "react";
import scss from "./TravelBlock.module.scss";
import Divider from "../Divider/Divider";
import { TravelData } from "../../constants/TravelData";
import TravelCard from "./TravelCard/TravelCard";

const TravelBlock: React.FC = () => {
    const sightsList = useMemo(() => (
        TravelData.map((el) => (
            <TravelCard {...el} key={el.date} />
        ))
    ), [])
    return (
        <div className={scss.wrapper}>
            <div className="conteiner">
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
