import React from "react";
import scss from "./SightsCard.module.scss";
import Link from "next/link";


interface SightCardProps {
    title?: string;
    img?: string;
    tid?: string;
    tour?: Array<object>
}
const SightsCard: React.FC<SightCardProps> = ({ title, img, tid, tour }) => {
    return (
        <Link href={`/sight/${tid}`} className={scss.wrapper}>
            <div className={scss.days}>
                <p>{tour?.length} {tour?.length === 1 ? "tour" : "tours"}</p>
            </div>
            <img src={img} alt="backgroundImage" className={scss.background} />
            <div className={scss.bottomBlock}>
                <p>{title}</p>
            </div>
        </Link>
    );
};

export default SightsCard;
