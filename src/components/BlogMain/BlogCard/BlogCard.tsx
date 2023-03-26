import React, { FC } from 'react';
import scss from './BlogCard.module.scss'
import Image from 'next/image';
import Link from 'next/link';
interface BlogCardProps {
    title?: string,
    urlContent?: string,
    type?: string;
    tid?: string;
}
const BlogCard: FC<BlogCardProps> = ({ urlContent, title, type, tid }) => {

    return (
        <div className={scss.card}>
            <div className={scss.img}>
                <img src={urlContent} width={280} height={280} alt='news' />
            </div>
            <div className={scss.card_bottom}>
                <p>{type}</p>
                <h1>{title}</h1>
                <div className={scss.btn}>
                    <Link href={`/blogAndNews/${tid}`}>Read more</Link>
                    <Image src='/images/vectorBlogCard.svg' width={4} height={7} alt={'vector'} />
                </div>
            </div>
        </div>
    );
};

export default BlogCard;