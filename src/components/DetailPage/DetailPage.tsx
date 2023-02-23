import React, { FC } from "react";
import { DetailPageTextArr } from "../../constants/DetailPage";
import Divider from "../Divider/Divider";
import scss from './DetailPage.module.scss'
import Image from "next/image";
import detailImage from "../../../public/images/detailPage/detail Image.jpg"
const DetailPageMonica: FC = () => {
    const showText = React.useMemo(
        () =>
            DetailPageTextArr.map((item) => (
                <div className={scss.paragraph} key={item.id}>
                    <div className={scss.DImage}>
                        <Image src={detailImage} alt='detail image' width={384} height={384} />
                        <div className={scss.blocDPage}>
                            <div className={scss.divider}><Divider title='Monica Candamo' variant='dark' /></div>
                            <p className={scss.description}>{item.description}</p>
                        </div>

                    </div>
                </div>
            )),
        [DetailPageTextArr]
    )
    return (
        <div className={scss.title_block}>
            <div className={scss.text}>
                <div className={scss.paragraph}>
                    {showText}
                </div>
            </div>
        </div>
    )
}
export default DetailPageMonica;