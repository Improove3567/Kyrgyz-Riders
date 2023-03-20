import React, { useEffect, useMemo } from "react";
import scss from "./SightsCard.module.scss";
import Link from "next/link";


interface SightCardProps {
    title?: string;
    img?: string;
    tid?: string;
}
const SightsCard: React.FC<SightCardProps> = ({ title, img, tid, }) => {
    return (
        <Link href={`/sight/${tid}`} className={scss.wrapper}>
            <div>
                <div className={scss.days}>
                    <p>{ } days</p>
                </div>
                <div className={scss.bottomBlock}>
                    <p>{title}</p>
                </div>
            </div>
        </Link>
    );
};

export default SightsCard;
