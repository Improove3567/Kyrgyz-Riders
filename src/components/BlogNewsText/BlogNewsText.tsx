import React, { FC } from 'react';
import { BlogNewsTextArr } from '../../constants/BlogNewsText';
import scss from './BlogNewsText.module.scss'
const BlogNewsText: FC = () => {
    const renderText = React.useMemo(
        () =>
          BlogNewsTextArr.map((item) => (
            <div className={scss.title}>
              <h1>{item.title}</h1>
              <div className={scss.text}>
                <div className={scss.paragraph}>
                    {item.textArr.map((el) => (
                        <div>{el.paragraphOne}</div>
                    ))}
                    {item.textArr.map((el) => (
                        <div>{el.paragraphTwo}</div>
                    ))}
                    {item.textArr.map((el) => (
                        <div>{el.paragraphThree}</div>
                    ))}
                </div>
              </div>
            </div>
          )),
        []
      );
    return (
        <div className={scss.title_block}>
             {renderText}
        </div>
    );
};

export default BlogNewsText;