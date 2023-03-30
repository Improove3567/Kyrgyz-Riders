import React, { FC } from "react";
import Divider from "../Divider/Divider";
import scss from './SightsPage.module.scss'

interface SightsText {
    aboutSight: string;
}

const SightsPage: FC<SightsText> = ({ aboutSight }) => {
    return (
        <div className={scss.title_block}>
            <div className='container'>
                <Divider title='Sights / Cholpon - Ata' variant='light' />
                <div className={scss.text}>
                    {aboutSight}
                </div>
            </div>
        </div>
    )
}
export default SightsPage;