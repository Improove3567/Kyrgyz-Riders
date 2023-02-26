import React, { FC } from "react";
import { TourAboutTextArr } from "../../constants/TourAboutText";
import Divider from "../Divider/Divider";
import scss from './TourAboutText.module.scss'

const TourAboutText: FC = () => {
    const showText = React.useMemo(
        () =>
            TourAboutTextArr.map((item) => (
                <div className={scss.paragraph} key={item.id}>
                    {item.title}
                </div>
            )),
        [TourAboutTextArr]
    )
    return (
        <div className={scss.title_block}>
            <div className={scss.title}>
                <Divider title='About tour' variant='light' />
            </div>
            <div className={scss.text}>
                <div className={scss.paragraph}>
                    {showText}
                </div>
            </div>
        </div>
    )
}
export default TourAboutText;