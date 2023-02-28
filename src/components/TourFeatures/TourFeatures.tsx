import React, { FC } from "react";
import { TourFeaturesArr } from "../../constants/TourFeatures";
import Divider from "../Divider/Divider";
import scss from './TourFeatures.module.scss'
import Image from "next/image";
import checkMark from "../../../public/images/TourFeatures/checkMark.svg"
const TourFeatures: FC = () => {
    const showText = React.useMemo(
        () =>
            TourFeaturesArr.map((item) => (
                <div className={scss.line} key={item.id}>
                    <div className={scss.title_mark}>
                        <Image src={checkMark} alt='checkmark' width={16} height={12} />
                        <p>{item.title}</p>
                    </div>
                </div>
            )),
        [TourFeaturesArr]
    )
    return (
        <div className={scss.content}>
            <div className={scss.title_block}>
                <Divider title='Why you will love this tour' variant='dark' />
                {showText}
            </div>
        </div>
    )
}
export default TourFeatures;