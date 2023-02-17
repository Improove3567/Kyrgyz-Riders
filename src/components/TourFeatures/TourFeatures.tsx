import React, { FC } from "react";
import { TourFeaturesArr } from "../../constants/TourFeatures";
import Divider from "../Divider/Divider";
import scss from './TourFeatures.module.scss'
import Image from "next/image";
const TourFeatures: FC = () => {
    const showText = React.useMemo(
        () =>
            TourFeaturesArr.map((item) => (
                <div className={scss.paragraph} key={item.id}>
                    <div className={scss.title_mark}>
                        <Image src={item.img} alt='dasd' width={16} height={12} />
                        <p>{item.title}</p>
                    </div>
                </div>
            )),
        [TourFeaturesArr]
    )
    return (
        <div className={scss.title_block}>
            <div className={scss.title}>
                <Divider title='Why you will love this tour' variant='dark' />
            </div>
            <div className={scss.text}>
                <div className={scss.paragraph}>
                    {showText}
                </div>
            </div>
        </div>
    )
}
export default TourFeatures;