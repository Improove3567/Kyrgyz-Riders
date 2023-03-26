import React, { FC } from "react";
import { TourAboutTextArr } from "../../constants/TourAboutText";
import Divider from "../Divider/Divider";
import scss from './TourAboutText.module.scss'

interface tourText {
    aboutTour: string;
}

const TourAboutText: FC<tourText> = ({ aboutTour }) => {
    return (
        <div className={scss.title_block}>
            <div className='container'>
                <Divider title='Overview' variant='dark' />
                <div className={scss.text}>
                    {aboutTour}
                </div>
            </div>
        </div>
    )
}
export default TourAboutText;