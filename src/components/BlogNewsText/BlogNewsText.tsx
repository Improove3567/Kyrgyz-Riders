import React, { FC } from 'react';
import { isTemplateMiddle } from 'typescript';
import { BlogNewsTextArr } from '../../constants/BlogNewsText';
import scss from './BlogNewsText.module.scss'
const BlogNewsText: FC = () => {
    const renderText = React.useMemo(
        () =>
          BlogNewsTextArr.map((item) => (
            <div className={scss.title} key={item.id}>
              <h1>{item.title}</h1>
              <div className={scss.text}>
                <div className={scss.paragraph} >
                    {item.textArr.map((el) => (
                        <div key={el.paragraph}>{el.paragraph}</div>
                    ))}
                </div>
              </div>
            </div>
          )),
        [BlogNewsTextArr]
      );
    return (
        <div className={scss.title_block}>
             {renderText}
        </div>
    );
};

export default BlogNewsText;