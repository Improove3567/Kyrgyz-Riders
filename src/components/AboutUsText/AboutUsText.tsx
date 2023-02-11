import React, { FC } from 'react';
import scss from './AboutUstext.module.scss'
import { AboutUsTextArr } from '../../constants/AboutUsText';
const AboutUsText: FC = () => {
    const renderText = React.useMemo(
        () =>
          AboutUsTextArr.map((item) => (
            <div className={scss.paragraph} key={item.id}>
              {item.title}
            </div>
          )),
        [AboutUsTextArr]
      );
    return (
        <div className={scss.title_block}>
            <div className={scss.title}>
                <h1>About us</h1>
            </div>
            <div className={scss.text}>
                <div className={scss.paragraph}>
                        {renderText}
                </div>
            </div>
        </div>
    );
};

export default AboutUsText;