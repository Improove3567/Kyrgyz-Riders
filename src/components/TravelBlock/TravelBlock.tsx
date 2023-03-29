import React, { useEffect, useMemo , useState } from "react";
import scss from "./TravelBlock.module.scss";
import Divider from "../Divider/Divider";
import TravelCard from "./TravelCard/TravelCard";
import useTravel from "../../hooks/useTravel";
import Preloader from "../Preloader/Preloader";

const TravelBlock: React.FC = () => {
    const { getTravel, travel, isLoading } = useTravel();

    const [limit, setLimit] = useState<number>(3);

    useEffect(() => {
        getTravel(limit);
    }, [limit])

    const sightsList = useMemo(() => (
        travel?.map((el, index) => (
            <TravelCard {...el} key={index} />
        ))
    ), [travel , limit])

    const onMore = () => {
        setLimit((prev: number) => prev + 3)
    }


    if (isLoading) return <Preloader full />

    return (
        <div className={scss.wrapper}>
            <div className="container">
                <Divider title={"Travel & Stories"} variant={"dark"} />
                <div className={scss.card_container}>
                    {sightsList}
                </div>
                <button onClick={() => onMore()} className={scss.button}>
                    <p>More Stories</p>
                </button>
            </div>
        </div>
    );
};

export default TravelBlock;
