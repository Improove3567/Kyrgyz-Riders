export interface BlogsCardProps{
    heading: string;
    img: string;
    title: string;
    btn: string;
    id: number;
    p?: string;
    descriptionArr: descriptionArrProps[];
}
export interface descriptionArrProps {
    text: string;
    textArr: textArrProps[];
}
interface textArrProps {
    paragraph: string;
}
export const BlogsCardArr: BlogsCardProps[] = [
    {
        id: 1,
        heading: 'Blog',
        img: "/images/imgBlogs.svg",
        title: 'How Lake Issyk - Kul appeared ',
        btn: 'Read more',
        descriptionArr: [
            {
                text: 'Arctic Wild is a family owned',
                textArr: [
                    {
                        paragraph: 'Arctic Wild is a family owned and operated, wilderness guiding company based in Fairbanks, Alaska. We specialize in 1 to 3 week, fully guided and outfitted adventures across Alaska. Our professional guides can take you to the most remote',
                    },
                    {
                        paragraph: 'Arctic Wild is a family owned and operated, wilderness guiding company based in Fairbanks, Alaska. We specialize in 1 to 3 week, fully guided and outfitted adventures across Alaska. Our professional guides can take you to the most remote',
                    },
                    {
                        paragraph: 'Arctic Wild is a family owned and operated, wilderness guiding company based in Fairbanks, Alaska. We specialize in 1 to 3 week, fully guided and outfitted adventures across Alaska. Our professional guides can take you to the most remote',
                    }
                ]
            },
        ],
        p: 'dsadsadsad'
    },
    {
        id: 2,
        heading: 'News',
        img: "/images/imgBlogs.svg",
        title: 'How Lake Issyk - Kul appeared ',
        btn: 'Read more',
        descriptionArr: [
            {
                text: 'Arctic Wild is a family owned',
                textArr: [
                    {
                        paragraph: 'Arctic Wild is a family owned and operated, wilderness guiding company based in Fairbanks, Alaska. We specialize in 1 to 3 week, fully guided and outfitted adventures across Alaska. Our professional guides can take you to the most remote',
                    },
                    {
                        paragraph: 'Arctic Wild is a family owned and operated, wilderness guiding company based in Fairbanks, Alaska. We specialize in 1 to 3 week, fully guided and outfitted adventures across Alaska. Our professional guides can take you to the most remote',
                    },
                    {
                        paragraph: 'Arctic Wild is a family owned and operated, wilderness guiding company based in Fairbanks, Alaska. We specialize in 1 to 3 week, fully guided and outfitted adventures across Alaska. Our professional guides can take you to the most remote',
                    }
                ]
            },
        ]
    },
    {
        id: 3,
        heading: 'Blog',
        img: "/images/imgBlogs.svg",
        title: 'How Lake Issyk - Kul appeared ',
        btn: 'Read more',
        descriptionArr: [
            {
                text: 'Arctic Wild is a family owned',
                textArr: [
                    {
                        paragraph: 'Arctic Wild is a family owned and operated, wilderness guiding company based in Fairbanks, Alaska. We specialize in 1 to 3 week, fully guided and outfitted adventures across Alaska. Our professional guides can take you to the most remote',
                    },
                    {
                        paragraph: 'Arctic Wild is a family owned and operated, wilderness guiding company based in Fairbanks, Alaska. We specialize in 1 to 3 week, fully guided and outfitted adventures across Alaska. Our professional guides can take you to the most remote',
                    },
                    {
                        paragraph: 'Arctic Wild is a family owned and operated, wilderness guiding company based in Fairbanks, Alaska. We specialize in 1 to 3 week, fully guided and outfitted adventures across Alaska. Our professional guides can take you to the most remote',
                    }
                ]
            },
        ]
    },
    
]