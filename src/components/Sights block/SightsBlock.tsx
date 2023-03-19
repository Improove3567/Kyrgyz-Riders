import React, { useEffect, useMemo } from "react";
import SightCard from "./SightsCard/SightsCard";
import scss from "./SightsBlock.module.scss";
import { SightsList } from "../../constants/SightsBlock";
import Divider from "../Divider/Divider";
import useSights from "../../hooks/useSights";

const SightsBlock: React.FC = () => {
    const { getSights, sights } = useSights();

    useEffect(() => {
        getSights();
    }, [])
    const sightsList = useMemo(() => (
        sights.map((el) => (
            <SightCard tid={""} title={""} img={""} {...el} />
        ))
    ), [sights])

    console.log(sights)
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
