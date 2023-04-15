import React, { useEffect, useMemo } from "react";
import scss from "./BlogMain.module.scss";
import { networksData } from "../../constants/BlogAndNews";
import Image from "next/image";
import Divider from "../Divider/Divider";
import Link from "next/link";
import useBlogs from "../../hooks/useBlogs";

interface blogDetailTypes {
  title?: string;
  content?: Array<object>;
  type?: string;
  urlContent?: string;
}

interface BlogProps {
  blogDetail?: blogDetailTypes;
}

const BlogMain: React.FC<BlogProps> = ({ blogDetail }) => {
  const { getBlogs, news } = useBlogs();

  useEffect(() => {
    getBlogs();
  })

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
      news.map((el: any, index) => (
        <Link href={el.tid} key={index}>
          <div className={scss.newsCard}>
            <p className={scss.newsTitle}>{el.title}</p>
            <p className={scss.date}>{el.newsDate}</p>
          </div>
        </Link>
      )),
    [news]
  );



  const urlContentRender = useMemo(() => {
    if (blogDetail?.urlContent) {
      if (blogDetail?.urlContent.includes("youtube")) {
        return (
          <iframe className={scss.frameForVideo} width="100%" height="508" src={blogDetail?.urlContent} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        )
      } else {
        return (
          <img src={blogDetail?.urlContent} className={scss.frameForVideo} />
        )
      }
    }
  }, [blogDetail?.urlContent])

  return (
    <div className={scss.wrapper}>
      <div className="container">
        <Divider title="Blog and news" variant={"dark"} />
        <div className={scss.mainContent}>
          <div className={scss.videoContainer}>
            <div className={scss.mainBtn}>
              <p>{blogDetail?.title}</p>
            </div>
            {urlContentRender}
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
