import React, { FC } from "react";
import scss from "./BlogNewsTextBlock.module.scss";

interface contentTypes {
  title: string;
  desc: string;
}

interface blogDetailTypes {
  title?: string;
  content?: Array<contentTypes>;
  type?: string;
  urlContent?: string;
}

interface BlogNewsTypes {
  blogDetail?: blogDetailTypes;
}

const BlogNewsText: FC<BlogNewsTypes> = ({ blogDetail }) => {
  const renderText = React.useMemo(
    () => {
      if (blogDetail?.content) {
        return (
          blogDetail?.content.map((el: { title: string }, index: number) => (
            <div className={scss.title} key={`${el.title}_${index}`}>
              <>
                <h1>{el.title}</h1>
                <div className={scss.text}>
                  <div
                    className={scss.paragraph}
                    key={`${el.title}_${index}`}
                  >
                    {el.title}
                  </div>
                </div>
              </>
            </div>
          ))
        )
      }
    }, [blogDetail?.content]);

  return (
    <div className={scss.title_block}>
      <div className="container">{renderText}</div>
    </div>
  );
};

export default BlogNewsText;
