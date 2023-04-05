import React, { FC } from "react";
import Divider from "../Divider/Divider";
import scss from './SightsPage.module.scss'

interface SightsText {
    aboutSight: string;
    title?: string;
}

const SightsPage: FC<SightsText> = ({ aboutSight, title }) => {
    return (
        <div className={scss.title_block}>
            <div className='container'>
                <Divider title={`Sights / ${title}`} variant='light' />
                <div className={scss.text}>
                    {aboutSight}
                </div>
            </div>
        </div>
    )
}
export default SightsPage;