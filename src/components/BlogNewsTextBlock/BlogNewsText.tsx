import React, { FC } from "react";
import { BlogsCardProps, descriptionArrProps } from "../../constants/BlogsCard";
import scss from "./BlogNewsTextBlock.module.scss";
interface BlogNewsTextProps {
  description: BlogsCardProps[];
}
const BlogNewsText: FC<BlogNewsTextProps> = ({ description }) => {

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
    [description]
  );
  console.log(description);

  // const render = useMemo(() => {
  //   description.map((item) => {
  //     item.descriptionArr.map(() => (

  //     ))
  //   })
  // }, [description])
  return (
    <div className={scss.title_block}>
      {renderText}
      {/* <p>{text}</p> */}
      {/* <h1>{description.descriptionArr.text}</h1>     */}
    </div>
  );
};

export default BlogNewsText;
