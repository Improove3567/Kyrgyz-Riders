import React, { useMemo } from "react";
import SightCard from "./SightsCard/SightsCard";
import scss from "./SightsBlock.module.scss";
import { SightsList } from "../../constants/SightsBlock";
import Divider from "../Divider/Divider";

const SightsBlock: React.FC = () => {
    const render = useMemo(() => (
        SightsList.map((el) => (
            <SightCard days={el.days} title={el.title} key={el.days} />
        ))
    ), [])
    return (
        <div className={scss.wrapper}>
            <Divider title={"Sights"} variant={"dark"} />
            <div className={scss.card_container}>
                {render}
            </div>
            <div className={scss.button}>
                <p>More Sights</p>
            </div>
        </div>
    );
};

export default SightsBlock;
