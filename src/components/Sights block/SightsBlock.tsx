import React, { useEffect, useMemo, useState } from "react";
import scss from "./SightsBlock.module.scss";
import Divider from "../Divider/Divider";
import useSights from "../../hooks/useSights";
import Preloader from "../Preloader/Preloader";

const SightCard = React.lazy(() => import("./SightsCard/SightsCard"));

const SightsBlock: React.FC = () => {
    const { getSights, sights, isLoading, len } = useSights();

    const [limit, setLimit] = useState<number>(3);

    useEffect(() => {
        getSights(limit);
    }, [limit])

    const onMore = () => {
        if (limit < len.length) {
            setLimit((prev: number) => prev + 3);
        }
        else if (limit - 2 || limit + 2 == len.length) {
            setLimit(len.length)
        }
    }

    const sightsList = useMemo(() => (
        sights.map((el, index) => (
            <SightCard {...el} key={index} />
        ))
    ), [sights, limit])

    if (isLoading) return <Preloader full />

    return (
        <div className={scss.wrapper}>
            <div className="container">
                <Divider title={"Sights"} />
                <div className={scss.card_container}>
                    {sightsList}
                </div>
                <button onClick={() => onMore()} className={limit >= len.length ? scss.nonAcbutton : scss.button}>
                    <p>More Sights</p>
                </button>
            </div>
        </div>
    );
};

export default SightsBlock;
