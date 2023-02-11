import React, { useMemo } from "react";
import SightCard from "./SightsCard/SightsCard";
import scss from "./SightsBlock.module.scss";
import { SightsList } from "../../constants/SightsBlock";
import Divider from "../Divider/Divider";

const SightsBlock: React.FC = () => {
    const sightsList = useMemo(() => (
        SightsList.map((el) => (
            <SightCard {...el} key={el.days} />
        ))
    ), [])
    return (
        <div className={scss.wrapper}>
            <Divider title={"Sights"} variant={"dark"} />
            <div className={scss.card_container}>
                {sightsList}
            </div>
            <div className={scss.button}>
                <p>More Sights</p>
            </div>
        </div>
    );
};

export default SightsBlock;
