import React, { useMemo, useState } from "react";
import scss from "./TravelCard.module.scss";
import Image from "next/image";

interface SightCardProps {
    date?: string;
    title?: string;
    link?: string;
}

const TravelCard: React.FC<SightCardProps> = ({ date, title, link}) => {

    const [isActive, setActive] = useState<boolean>(false);

    const newLink = link?.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/');

    const renderVideo = useMemo(() => <iframe className={scss.video} width="560" height="315" src={newLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>, [isActive , newLink])
    const activeVideo = useMemo(() => <iframe className={scss.iVideo} width="560" height="315" src={newLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>, [isActive, link])

    const stopVideos = function () {
        const videos = document.querySelectorAll('iframe, video');
        Array.prototype.forEach.call(videos, function (video) {
            if (video.tagName.toLowerCase() === 'video') {
                video.pause();
            } else {
                let src = video.src;
                video.src = src;
            }
        });
    };
    const onClose = () => {
        setActive(false);
        stopVideos();
    }


    return (
        <div className={isActive ? scss.active : scss.wrapper}>
            {
                isActive ?
                    <div className={scss.active}>
                        <Image src="/images/travelStories/close.svg" className={scss.close} onClick={onClose} width={20} height={20} alt="close"></Image>
                        {renderVideo}
                    </div>
                    :
                    <div style={{
                        height: "100%"
                    }}>
                        <div onClick={() => setActive(true)} className={scss.unvisibleBlock}></div>
                        {activeVideo}
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
