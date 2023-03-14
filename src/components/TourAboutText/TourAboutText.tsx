import React, { FC } from "react";
import { TourAboutTextArr } from "../../constants/TourAboutText";
import Divider from "../Divider/Divider";
import scss from './TourAboutText.module.scss'

const TourAboutText: FC = () => {
    const showText = React.useMemo(
        () =>
            TourAboutTextArr.map((item) => (
                <div className={scss.line} key={item.id}>
                    <p>{item.title}</p>
                </div>
            )),
        [TourAboutTextArr]
    )
    return (
        <div className={scss.title_block}>
            <div className='conteiner'>
                <Divider title='Overview' variant='dark' />
                <div className={scss.text}>
                    {showText}
                </div>
            </div>
        </div>
    )
}
export default TourAboutText;