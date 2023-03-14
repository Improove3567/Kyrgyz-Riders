import React, { FC } from "react";
import Divider from "../Divider/Divider";
import { SightsPageArr } from "../../constants/SightsPage";
import scss from './SightsPage.module.scss'

const SightsPage: FC = () => {
    const showWork = React.useMemo(
        () =>
            SightsPageArr.map((item) => (
                <div className={scss.line} key={item.id}>
                    <p>{item.title}</p>
                </div>
            )),
        [SightsPageArr]
    )
    return (
        <div className={scss.title_block}>
            <div className='conteiner'>
                <Divider title='Sights / Cholpon - Ata' variant='light' />
                <div className={scss.text}>
                    {showWork}
                </div>
            </div>
        </div>
    )
}
export default SightsPage;