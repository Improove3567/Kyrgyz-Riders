import React, { useMemo } from 'react';
import { PriceIncludeArr } from '../../constants/PriceIncludes';
import Divider from '../Divider/Divider';
import scss from './PriceIncludes.module.scss'
import Image from 'next/image';
const PriceIncludes = () => {
    const renderIncludes = useMemo(() => (
        PriceIncludeArr.map((el) => (
            <div className={scss.line} key={el.id}>
                <div className={scss.img} key={el.id}>
                    <Image src={el.img} width={16} height={12} alt='cross'/>
                    <p>{el.title}</p>
                </div>
            </div>
        ))
    ), [])
    return (
        <div className={scss.content}>
            <div className={scss.container}>
            <Divider title='Price includes' variant='dark'/>
            {renderIncludes}
            </div>
        </div>
    );
};

export default PriceIncludes;