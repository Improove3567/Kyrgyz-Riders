import React, { useMemo, useState } from "react";
import scss from "./TravelCard.module.scss";
import Image from "next/image";

interface SightCardProps {
    date?: string;
    title?: string;
    link?: string;
}

const TravelCard: React.FC<SightCardProps> = ({ date, title }) => {
    const [isActive, setActive] = useState<boolean>(false);

    const url = "https://www.youtube.com/embed/3KbUohmn7UE"

    const renderVideo = useMemo(() => <iframe className={scss.video} width="560" height="315" src="https://www.youtube.com/embed/3KbUohmn7UE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>, [isActive, url])

    return (
        <div className={isActive ? scss.active : scss.wrapper}>
            {
                isActive ? <div className={scss.active}>
                    <Image src="/images/travelStories/close.svg" className={scss.close} onClick={() => setActive(false)} width={20} height={20} alt="close"></Image>
                    {renderVideo}
                </div>
                    : <div className={scss.playBtn} onClick={() => setActive(true)}>
                        <Image src="/images/travelStories/play.svg" width={20} height={20} alt="playBtn" />
                    </div>
            }
            <div className={scss.bottomBlock}>
                <p className={scss.title}>{title}</p>
                <p className={scss.date}>{date}</p>
            </div>
        </div>
    );
};

export default TravelCard;
