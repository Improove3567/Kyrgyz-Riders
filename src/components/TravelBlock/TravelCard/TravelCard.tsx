import React from "react";
import scss from "./TravelCard.module.scss";
import Image from "next/image";

interface SightCardProps {
    date: string;
    title: string;
}

const TravelCard: React.FC<SightCardProps> = ({ date, title }) => {
    return (
        <div className={scss.wrapper}>
            <div className={scss.playBtn}>
                <Image src="/images/travelStories/play.svg" width={20} height={20} alt="playBtn" />
            </div>
            <div className={scss.bottomBlock}>
                <p className={scss.title}>{title}</p>
                <p className={scss.date}>{date}</p>
            </div>
        </div>
    );
};

export default TravelCard;
