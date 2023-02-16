interface IHeaderLinks {
  id: number;
  title: string;
  link: string
}
export const HeaderLinks: IHeaderLinks[] = [
  {
    id: 1,
    title: "Tours",
    link: "tours",
  },
  {
    id: 2,
    title: "Sights",
    link: "sights",
  },
  {
    id: 3,
    title: "Travel stories",
    link: "travelstories",
  },
  {
    id: 4,
    title: "About Us",
    link: "aboutus",
  },
  {
    id: 5,
    title: "Blog & news",
    link: "Blognews",
  },
];


export const MainLinks: IHeaderLinks[] = [
  {
    id: 1,
    title: "Create your tour",
    link: "createtour",
  },
  {
    id: 2,
    title: "Watch video",
    link: "watchvideo",
  },
  {
    id: 3,
    title: "Find Tours",
    link: "findtours",
  },
];
