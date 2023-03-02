import React, { FC } from "react";
import { BlogsCardProps } from "../../constants/BlogsCard";
import scss from "./BlogNewsTextBlock.module.scss";
interface BlogNewsTextProps {
  description: BlogsCardProps[];
}
const BlogNewsText: FC<BlogNewsTextProps> = ({description}) => {
  const renderText = React.useMemo(
    () =>
      description.map((item) => (
        <div className={scss.title} key={item.id}>
          {item.descriptionArr.map((el) => (
            <>
              <h1>{el.text}</h1>
              <div className={scss.text}>
                {el.textArr.map((al) => (
                  <div className={scss.paragraph}>{al.paragraph}</div>
                ))}
              </div>
            </>
          ))}
        </div>
      )),
    []
  );
  console.log(description)
  return (  
    <div className={scss.title_block}>
      {renderText}
    </div>
  );
};

export default BlogNewsText;
