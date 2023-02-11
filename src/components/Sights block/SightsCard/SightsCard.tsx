import React, { useMemo } from "react";
import scss from "./SightsCard.module.scss";

interface SightCardProps {
    days: number;
    title: string;
}

const SightsCard: React.FC<SightCardProps> = ({ days, title }) => {
    return (
        <div className={scss.wrapper}>
            <div className={scss.days}>
                <p>{days} days</p>
            </div>
            <div className={scss.bottomBlock}>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default SightsCard;
