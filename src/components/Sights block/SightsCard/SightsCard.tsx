import React, { useMemo } from "react";
import scss from "./SightsCard.module.scss";
import Link from "next/link";

interface SightCardProps {
    days: number;
    title: string;
    id: number
}
const SightsCard: React.FC<SightCardProps> = ({ days, title, id }) => {
    return (
        <Link href={`/sight/${id}`}  className={scss.wrapper}>
            <div>
                <div className={scss.days}>
                    <p>{days} days</p>
                </div>
                <div className={scss.bottomBlock}>
                    <p>{title}</p>
                </div>
            </div>
        </Link>
    );
};

export default SightsCard;
