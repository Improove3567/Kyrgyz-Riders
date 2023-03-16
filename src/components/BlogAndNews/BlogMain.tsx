import React, { useMemo } from "react";
import scss from "./BlogMain.module.scss";
import { newsData, networksData } from "../../constants/BlogAndNews";
import Image from "next/image";
import Divider from "../Divider/Divider";
const BlogMain: React.FC = () => {
  const networksList = useMemo(
    () =>
      networksData.map((el) => (
        <div className={scss.network} key={el.img}>
          <Image src={el.img} width={20} height={20} alt="social_network" />
        </div>
      )),
    []
  );
  const newsList = useMemo(
    () =>
      newsData.map((el) => (
        <div className={scss.newsCard} key={el.date}>
          <p className={scss.newsTitle}>{el.title}</p>
          <p className={scss.date}>{el.date}</p>
        </div>
      )),
    []
  );
  return (
    <div className={scss.wrapper}>
      <div className="container">
      <Divider title="Blog and news" variant={"dark"} />
      <div className={scss.mainContent}>
        <div className={scss.videoContainer}>
          <div className={scss.mainBtn}>
            <p>How Lake Issyk - Kul appeared</p>
          </div>
        <iframe className={scss.frameForVideo} width="100%" height="508" src="https://www.youtube.com/embed/ACuLf_AYixU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div className={scss.rightBlock}>
          <div className={scss.networksBlock}>
            <p>Find out more about us on social networks</p>
            <hr />
            <div className={scss.socialNetworks}>{networksList}</div>
          </div>
          <div className={scss.newsContainer}>
            <p className={scss.title}>News</p>
            <hr />
            <div className={scss.cardContainer}>{newsList}</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BlogMain;
