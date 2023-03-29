import React, { useEffect, useMemo } from "react";
import { networksData, newsData } from "../../constants/BlogAndNews";
import scss from "./BlogMain.module.scss";
import Image from "next/image";
import BlogCard from "./BlogCard/BlogCard";
import Divider from "../Divider/Divider";
import useBlogs from "../../hooks/useBlogs";
import Preloader from "../Preloader/Preloader";

const BlogMain = () => {
  const { getBlogs, blogs, isLoading } = useBlogs();
  useEffect(() => {
    getBlogs();
  }, [])

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
  const renderCard = useMemo(
    () => blogs?.map((el, index) => <BlogCard {...el} key={index} />),
    [blogs]
  );

  if (isLoading) return <Preloader full />

  return (
    <div className={scss.wrapper}>
      <div className="container">
        <Divider title="Blog and news" variant="dark" />
        <div className={scss.container}>
          <div className={scss.wrapperCard}>
            <div className={scss.wrap}>{renderCard}</div>
            <div className={scss.btn_more}>
              <button>More</button>
            </div>
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
