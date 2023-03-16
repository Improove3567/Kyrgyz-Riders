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
           <div className="container">
           <Divider title={"Sights"} />
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

export default SightsBlock;
