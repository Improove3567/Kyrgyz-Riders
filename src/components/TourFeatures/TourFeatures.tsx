import React, { FC } from "react";
import { TourFeaturesArr } from "../../constants/TourFeatures";
import Divider from "../Divider/Divider";
import scss from './TourFeatures.module.scss'
import Image from "next/image";
import checkMark from "../../../public/images/TourFeatures/checkMark.svg"

interface ReasonsType {
    reasons: Array<string>
}

const TourFeatures: FC<ReasonsType> = ({ reasons }) => {
    const showText = React.useMemo(
        () =>
            reasons?.map((item) => (
                <div className={scss.line} key={item}>
                    <div className={scss.title_mark}>
                        <Image src={checkMark} alt='checkmark' width={16} height={12} />
                        <p>{item}</p>
                    </div>
                </div>
            )),
        [reasons]
    )
    return (
        <div className={scss.content}>
            <div className="container">
                <div className={scss.title_block}>
                    <Divider title='Why you will love this tour' variant='dark' />
                    {showText}
                </div>
            </div>
        </div>
    )
}
export default TourFeatures;