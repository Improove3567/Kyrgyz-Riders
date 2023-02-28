import React, { FC } from 'react';
import scss from './BlogCard.module.scss'
import Image from 'next/image';
import Link from 'next/link';
interface BlogCardProps{
    img: string;
    title: string;
    id: number;
    heading: string;
    btn: string;
}
const BlogCard: FC<BlogCardProps> = ({img, title, id, heading, btn}) => {
    return (
        <div className={scss.card} key={id}>
            <div className={scss.img}>
            <Image src={img} width={280} height={280} alt='news'/>
            </div>
            <div className={scss.card_bottom}>
                <p>{heading}</p>
                <h1>{title}</h1>
                <Link href={`/blogAndNews/${id}`}>{btn}</Link>
            </div>
        </div>
    );
};

export default BlogCard;